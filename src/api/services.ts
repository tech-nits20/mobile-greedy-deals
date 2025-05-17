import { call, put } from 'redux-saga/effects';
import axiosClient, { HeadersV2 } from './client';
import { SagaIterator } from 'redux-saga';
import {
  DOWNLOAD_OFFER_COUPON_CODE,
  GET_ALL_CATEGORIES,
  GET_CATEGORY_BY_ID,
  GET_DISCOUNTS_OFFERS,
  GET_EARLY_DEALS,
  GET_FILTER_BRANDS_VENDOR,
  GET_OFFER_BY_CATEGORY,
  GET_TOP_CASHBACK_DISCOUNTS,
  GET_PRODUCT_FILTERS,
  GOOGLE_PLACES_BASE_URL,
  GOOGLE_API_KEY,
  OFFER_PRODUCT_DETAILS,
} from './endpoints';
import { IListingFilters } from '../types/FilterTypes';
import { ILatLongType } from '../redux/sagas/categories/categoriesTypes';
import Geolocation from '@react-native-community/geolocation';
import { setPreviousCurrentLocation } from '../redux/sagas/categories/categoryRedux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CUSTOM_LOCATION_KEY } from '../helper/Constants';

export interface IOffersByCategoryId {
  categoryId: string;
  lat: number;
  lng: number;
}

export interface ILocationType {
  data: any;
  lat: number;
  lng: number;
}

export function* fetchAllCategoryService(): SagaIterator {
  try {
    const response = yield call(axiosClient.get, GET_ALL_CATEGORIES);
    return response;
  } catch (error) {
    console.error('==Error fetching data:', error);
    throw error;
  }
}

export function* fetchCategoryService(payload: string): SagaIterator {
  try {
    const response = yield call(
      axiosClient.get,
      `${GET_CATEGORY_BY_ID}${payload}`
    );
    return response;
  } catch (error) {
    console.error('==Error fetchCategory data:', error);
    throw error;
  }
}

export function* fetchDiscountsAndOffersService(
  payload: IListingFilters
): SagaIterator {
  try {
    const response = yield call(() =>
      axiosClient.post(GET_DISCOUNTS_OFFERS, payload, { headers: HeadersV2 })
    );
    return response;
  } catch (error) {
    console.error('==Error fetchDiscountsAndOffers data:', error);
    throw error;
  }
}

export function* fetchTopCashbackDiscountsService(
  payload: IListingFilters
): SagaIterator {
  try {
    const response = yield call(() =>
      axiosClient.post(GET_TOP_CASHBACK_DISCOUNTS, payload, {
        headers: HeadersV2,
      })
    );
    return response;
  } catch (error) {
    console.error('==Error fetchTopCashbackDiscountsService data:', error);
    throw error;
  }
}

export function* fetchEarlyDealsService(
  payload: IListingFilters
): SagaIterator {
  try {
    const response = yield call(() =>
      axiosClient.post(GET_EARLY_DEALS, payload, { headers: HeadersV2 })
    );
    return response;
  } catch (error) {
    console.error('==Error fetchEarlyDealsService data:', error);
    throw error;
  }
}

export function* fetchFilterAPIService(payload: IListingFilters): SagaIterator {
  try {
    const response = yield call(() =>
      axiosClient.post(GET_PRODUCT_FILTERS, payload, { headers: HeadersV2 })
    );

    return response;
  } catch (error) {
    console.error('==Error fetchCategoriesFilterService data:', error);
    throw error;
  }
}

export function* fetchOfferByCategoryService(
  payload: IListingFilters
): SagaIterator {
  try {
    const response = yield call(() =>
      axiosClient.post(GET_OFFER_BY_CATEGORY, payload, { headers: HeadersV2 })
    );
    return response;
  } catch (error) {
    console.error('==Error fetchOfferByCategoryService data:', error);
    throw error;
  }
}

export function* fetchFilterBrandsVendorService(
  payload: IListingFilters
): SagaIterator {
  try {
    const response = yield call(() =>
      axiosClient.post(GET_FILTER_BRANDS_VENDOR, payload, {
        headers: HeadersV2,
      })
    );
    return response;
  } catch (error) {
    console.error('==Error fetchFilterBrandsVendorService data:', error);
    throw error;
  }
}

export function* downloadOfferCouponCodeService(payload: string): SagaIterator {
  try {
    const response = yield call(
      axiosClient.post,
      `${DOWNLOAD_OFFER_COUPON_CODE}${payload}`,
      '',
      {
        responseType: 'blob',
        headers: HeadersV2,
      }
    );
    return response;
  } catch (error) {
    console.error('==Error downloadOfferCouponCodeService data:', error);
    throw error;
  }
}

const fetchCurrentLocation = async (latitude: number, longitude: number) => {
  const response = await fetch(
    `${GOOGLE_PLACES_BASE_URL}?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`
  );
  const locationRes = await response.json();
  return locationRes;
};

export function* fetchCurrentLocationService(): SagaIterator {
  try {
    let latitude = 0;
    let longitude = 0;
    const customLocation = yield call(
      AsyncStorage.getItem,
      CUSTOM_LOCATION_KEY
    );

    if (!customLocation) {
      const position = yield call(
        () =>
          new Promise((resolve, reject) =>
            Geolocation.getCurrentPosition(resolve, reject)
          )
      );

      if (position) {
        latitude = position?.coords?.latitude;
        longitude = position?.coords?.longitude;
      }
    } else {
      const parsedLocation = JSON.parse(customLocation);
      latitude = parsedLocation?.lat;
      longitude = parsedLocation?.lng;
    }

    yield put(setPreviousCurrentLocation({ lat: latitude, lng: longitude }));
    const locationRes = yield call(fetchCurrentLocation, latitude, longitude);

    const result: ILocationType = {
      data: locationRes,
      lat: latitude,
      lng: longitude,
    };
    return result;
  } catch (error) {
    console.error('==Error fetchCurrentLocation data:', error);
  }
}

export function* fetchProductDetailsService(payload: string): SagaIterator {
  try {
    const response = yield call(
      axiosClient.get,
      `${OFFER_PRODUCT_DETAILS}${payload}`,
      {
        headers: HeadersV2,
      }
    );
    return response;
  } catch (error) {
    console.error('==Error fetchProductDetailsService data:', error);
    throw error;
  }
}

export async function fetchLocationSuggestion(query: string) {
  if (query.length < 2) return;

  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=${GOOGLE_API_KEY}&language=en&components=country:in`;

  try {
    const response = await fetch(url);
    const json = await response.json();
    if (json.predictions) {
      return json.predictions;
    }
  } catch (error) {
    console.error('Error fetching places:', error);
  }

  return [];
}

export async function fetchLocationDetails(placeId: string) {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=geometry&key=${GOOGLE_API_KEY}`;

  try {
    const response = await fetch(url);
    const json = await response.json();
    if (json.result) {
      return json.result;
    }
  } catch (error) {
    console.error('Error fetching place details:', error);
  }

  return null;
}
