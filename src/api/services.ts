import { call } from 'redux-saga/effects';
import axiosClient from './client';
import { SagaIterator } from 'redux-saga';
import {
  DOWNLOAD_OFFER_COUPON_CODE,
  GET_ALL_CATEGORIES,
  GET_CATEGORY_BY_ID,
  GET_DISCOUNTS_OFFERS,
  GET_EARLY_DEALS,
  GET_FILTER_BRANDS_VENDOR,
  GET_OFFER_BY_CATEGORY,
  GET_PREMIUM_BRANDS_OFFERS,
  GET_TOP_CASHBACK_DISCOUNTS,
  GET_PRODUCT_FILTERS,
  GOOGLE_PLACES_BASE_URL,
  GOOGLE_API_KEY,
} from './endpoints';
import { IListingFilters } from '../types/FilterTypes';
import { ILatLongType } from '../redux/sagas/categories/categoriesTypes';
import Geolocation from 'react-native-geolocation-service';

export interface IOffersByCategoryId {
  categoryId: string;
  lat: number;
  long: number;
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
  payload: ILatLongType
): SagaIterator {
  try {
    const response = yield call(
      axiosClient.post,
      GET_DISCOUNTS_OFFERS,
      {
        lat: payload.lat,
        lng: payload.lng,
      },
      {
        params: { maxItems: 10 },
      }
    );
    return response;
  } catch (error) {
    console.error('==Error fetchDiscountsAndOffers data:', error);
    throw error;
  }
}

export function* fetchTopCashbackDiscountsService(
  payload: ILatLongType
): SagaIterator {
  try {
    const response = yield call(
      axiosClient.post,
      GET_TOP_CASHBACK_DISCOUNTS,
      {
        lat: payload.lat,
        lng: payload.lng,
      },
      {
        params: { maxItems: 10 },
      }
    );
    return response;
  } catch (error) {
    console.error('==Error fetchTopCashbackDiscountsService data:', error);
    throw error;
  }
}

export function* fetchEarlyDealsService(payload: ILatLongType): SagaIterator {
  try {
    const response = yield call(
      axiosClient.post,
      GET_EARLY_DEALS,
      {
        lat: payload.lat,
        lng: payload.lng,
      },
      {
        params: { maxItems: 10 },
      }
    );
    return response;
  } catch (error) {
    console.error('==Error fetchEarlyDealsService data:', error);
    throw error;
  }
}

export function* fetchPremiumBrandsOffersService(
  payload: ILatLongType
): SagaIterator {
  try {
    const response = yield call(
      axiosClient.post,
      GET_PREMIUM_BRANDS_OFFERS,
      {
        lat: payload.lat,
        lng: payload.lng,
      },
      {
        params: { maxItems: 10 },
      }
    );
    return response;
  } catch (error) {
    console.error('==Error fetchPremiumBrandsOffersService data:', error);
    throw error;
  }
}

export function* fetchCategoriesFilterService(
  payload: IListingFilters
): SagaIterator {
  try {
    console.log(`==SAGA CAT ID: ${JSON.stringify(payload)}`);
    const response = yield call(
      axiosClient.post,
      GET_PRODUCT_FILTERS,
      payload,
      {
        params: { maxItems: 30 },
      }
    );

    return response;
  } catch (error) {
    console.error('==Error fetchCategoriesFilterService data:', error);
    throw error;
  }
}

export function* fetchOfferByCategoryService(
  payload: IOffersByCategoryId
): SagaIterator {
  try {
    const response = yield call(
      axiosClient.post,
      `${GET_OFFER_BY_CATEGORY}${payload.categoryId}`,
      {
        lat: payload.lat,
        lng: payload.long,
      }
    );
    return response;
  } catch (error) {
    console.error('==Error fetchOfferByCategoryService data:', error);
    throw error;
  }
}

export function* fetchFilterBrandsVendorService(
  payload: IOffersByCategoryId
): SagaIterator {
  try {
    const response = yield call(
      axiosClient.post,
      `${GET_FILTER_BRANDS_VENDOR}${payload.categoryId}`,
      {
        lat: payload.lat,
        lng: payload.long,
      }
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
      }
    );
    return response;
  } catch (error) {
    console.error('==Error downloadOfferCouponCodeService data:', error);
    throw error;
  }
}

export function* fetchCurrentLocationService(): SagaIterator {
  try {
    const position = yield call(
      () =>
        new Promise((resolve, reject) =>
          Geolocation.getCurrentPosition(resolve, reject)
        )
    );

    if (position) {
      const latitude = position?.coords?.latitude;
      const longitude = position?.coords?.longitude;

      const locationRes = yield call(
        axiosClient.get,
        `${GOOGLE_PLACES_BASE_URL}?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`
      );

      const result: ILocationType = {
        data: locationRes,
        lat: latitude,
        lng: longitude,
      };
      return result;
    }
  } catch (error) {
    console.error('==Error fetchCurrentLocation data:', error);
  }
}
