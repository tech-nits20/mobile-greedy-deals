import { SagaIterator } from 'redux-saga';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  fetchBrandsVendorAction,
  fetchEndingSoonDealsAction,
  fetchFilteredProductAction,
  fetchGDOffersDealsAction,
  fetchOfferCouponCodeAction,
  fetchOfferTypesByCategoryAction,
  fetchProductDetailsAction,
  getFilteredProducts,
  refreshListingStateAction,
  setEndingSoonDeals,
  setFilterBrandsVendor,
  setFilteredData,
  setFilterModel,
  setFilterOfferTypesByCategory,
  setGDOffers,
  setOfferCouponCode,
  setProductDetails,
  setResetListingState,
} from './productsRedux';
import {
  downloadOfferCouponCodeService,
  fetchFilterAPIService,
  fetchFilterBrandsVendorService,
  fetchOfferByCategoryService,
  fetchProductDetailsService,
  IOffersByCategoryId,
} from '../../../api/services';
import {
  ExtraDealTypeEnum,
  IListingFilters,
  LocalOrBrandEnum,
  SortTypeEnum,
} from '../../../types/FilterTypes';
import {
  IFilterBrandsVendor,
  IMappedBrandVendor,
  IMappedFilterTypes,
} from './productsTypes';
import { ILatLongType, IStoreOfferType } from '../categories/categoriesTypes';
import { OfferTypeEnum } from '../../../types/listingTypes';
import { Buffer } from 'buffer';
import { MAX_RANGE } from '../../../api/client';

export function* fetchFilteredProductsSaga({
  payload,
}: {
  payload: IListingFilters;
}): SagaIterator {
  try {
    const prevData = yield select(getFilteredProducts);
    yield put(
      setFilteredData({ data: prevData.data, loading: true, error: undefined })
    );
    console.log(`==PAY: ${JSON.stringify(payload)}`);

    const response = yield call(fetchFilterAPIService, payload);
    if (response) {
      yield put(
        setFilteredData({ data: response, loading: false, error: undefined })
      );
    } else {
      yield put(
        setFilteredData({ data: [], loading: false, error: undefined })
      );
    }
  } catch (error) {
    console.log(`==Error on fetchFilteredProductsSaga: ${error}`);
    yield put(
      setFilteredData({
        data: [],
        loading: false,
        error: JSON.stringify(error),
      })
    );
  }
}

export function* fetchOfferByCategorySaga({
  payload,
}: {
  payload: IOffersByCategoryId;
}): SagaIterator {
  try {
    const requestPayload: IListingFilters = {
      filters: {
        lat: payload.lat,
        lng: payload.lng,
        range: {
          min: 0,
          max: MAX_RANGE,
        },
        extraDealType: ExtraDealTypeEnum.NoFilter,
        localOrBrand: LocalOrBrandEnum.NoFilter,
        categoryId: payload.categoryId,
      },
      sort: {
        order: SortTypeEnum.Popularity,
      },
    };
    const response = yield call(fetchOfferByCategoryService, requestPayload);

    if (response) {
      const data: IStoreOfferType[] = response.map(
        (item: { offerType: any }) => item.offerType
      );
      const offerTypes: IStoreOfferType[] = [];
      data.map((item) => {
        switch (item.selectedOfferType) {
          case OfferTypeEnum.BUY_GEY:
            const existing = offerTypes.find(
              (val) => val.selectedOfferType === item.selectedOfferType
            );
            if (existing?.buyX !== item.buyX || existing?.getY !== item.getY) {
              offerTypes.push({
                buyX: item.buyX,
                getY: item.getY,
                selectedOfferType: item.selectedOfferType,
                id: item.id,
                isExtraGreedyDealsAvail: item.isExtraGreedyDealsAvail,
                extraGreedyDealDiscount: item.extraGreedyDealDiscount,
                extraGreedyDealsType: item.extraGreedyDealsType,
              });
            } else if (
              existing?.buyX === item.buyX &&
              existing?.getY === item.getY
            ) {
              const existingIndex = offerTypes.findIndex(
                (val) => val.selectedOfferType === item.selectedOfferType
              );
              offerTypes[existingIndex].id = offerTypes[
                existingIndex
              ].id.concat(`,${item.id}`);
            }
            break;
          case OfferTypeEnum.UPTO:
            const existingUpto = offerTypes.find(
              (val) => val.uptoXPercentOff === item.uptoXPercentOff
            );
            if (existingUpto?.uptoXPercentOff !== item.uptoXPercentOff) {
              offerTypes.push({
                uptoXPercentOff: item.uptoXPercentOff,
                selectedOfferType: item.selectedOfferType,
                id: item.id,
                isExtraGreedyDealsAvail: item.isExtraGreedyDealsAvail,
                extraGreedyDealDiscount: item.extraGreedyDealDiscount,
                extraGreedyDealsType: item.extraGreedyDealsType,
              });
            } else if (existingUpto?.uptoXPercentOff === item.uptoXPercentOff) {
              const existingIndex = offerTypes.findIndex(
                (val) => val.selectedOfferType === item.selectedOfferType
              );
              offerTypes[existingIndex].id = offerTypes[
                existingIndex
              ].id.concat(`,${item.id}`);
            }
            break;
          case OfferTypeEnum.FLAT:
            const existingFlat = offerTypes.find(
              (val) => val.flatXPercentOff === item.flatXPercentOff
            );
            if (existingFlat?.flatXPercentOff !== item.flatXPercentOff) {
              offerTypes.push({
                flatXPercentOff: item.flatXPercentOff,
                selectedOfferType: item.selectedOfferType,
                id: item.id,
                isExtraGreedyDealsAvail: item.isExtraGreedyDealsAvail,
                extraGreedyDealDiscount: item.extraGreedyDealDiscount,
                extraGreedyDealsType: item.extraGreedyDealsType,
              });
            } else if (existingFlat?.flatXPercentOff === item.flatXPercentOff) {
              const existingIndex = offerTypes.findIndex(
                (val) => val.selectedOfferType === item.selectedOfferType
              );
              offerTypes[existingIndex].id = offerTypes[
                existingIndex
              ].id.concat(`,${item.id}`);
            }
            break;
          // case 3:
          //   const existingGD = offerTypes.find(
          //     (val) =>
          //       val.extraGreedyDealXPercent === item.extraGreedyDealXPercent
          //   );
          //   if (
          //     existingGD?.extraGreedyDealXPercent !==
          //     item.extraGreedyDealXPercent
          //   ) {
          //     offerTypes.push({
          //       extraGreedyDealXPercent: item.extraGreedyDealXPercent,
          //       selectedOfferType: item.selectedOfferType,
          //       id: item.id,
          //     });
          //   }
          //   break;
          default:
            break;
        }
      });

      const sortedUpto = offerTypes.sort((a, b) =>
        (a.uptoXPercentOff ?? 0) > (b.uptoXPercentOff ?? 0) ? 1 : -1
      );
      const sortedFlat = offerTypes.sort((a, b) =>
        (a.flatXPercentOff ?? 0) > (b.flatXPercentOff ?? 0) ? 1 : -1
      );
      const sortedBuyX = offerTypes.sort((a, b) =>
        (a.buyX ?? 0) > (b.buyX ?? 0) ? 1 : -1
      );
      const sortedGetY = offerTypes.sort((a, b) =>
        (a.getY ?? 0) > (b.getY ?? 0) ? 1 : -1
      );
      // console.log(`==sortedUpto: ${JSON.stringify(sortedUpto)}`);
      // console.log(`==sortedFlat: ${JSON.stringify(sortedFlat)}`);
      // console.log(`==sortedExtraGD: ${JSON.stringify(sortedExtraGD)}`);
      // console.log(`==sortedBuyX: ${JSON.stringify(sortedBuyX)}`);
      // console.log(`==sortedGetY: ${JSON.stringify(sortedGetY)}`);
      // console.log(`==offerTypes: ${JSON.stringify(offerTypes)}`);

      const mappedData: IMappedFilterTypes[] = offerTypes.map((item) => {
        switch (item.selectedOfferType) {
          case OfferTypeEnum.BUY_GEY:
            return {
              name: `Buy ${item.buyX} Get ${item.getY}`,
              id: item.id,
            };
          case OfferTypeEnum.UPTO:
            return {
              name: `Upto ${item.uptoXPercentOff}% Off`,
              id: item.id,
            };
          case OfferTypeEnum.FLAT:
            return {
              name: `Flat ${item.flatXPercentOff}% Off`,
              id: item.id,
            };
          default:
            return { name: '', id: '' };
        }
      });
      // console.log(`==mappedData: ${JSON.stringify(mappedData)}`);

      yield put(setFilterOfferTypesByCategory(mappedData));
    }
  } catch (error) {
    console.log(`==Error on fetchOfferByCategorySaga: ${error}`);
  }
}

export function* fetchBrandsVendorSaga({
  payload,
}: {
  payload: IOffersByCategoryId;
}): SagaIterator {
  try {
    const requestPayload: IListingFilters = {
      filters: {
        lat: payload.lat,
        lng: payload.lng,
        range: {
          min: 0,
          max: MAX_RANGE,
        },
        extraDealType: ExtraDealTypeEnum.NoFilter,
        localOrBrand: LocalOrBrandEnum.NoFilter,
        categoryId: payload.categoryId,
      },
      sort: {
        order: SortTypeEnum.Popularity,
      },
    };
    const response = yield call(fetchFilterBrandsVendorService, requestPayload);
    if (response) {
      const data: IFilterBrandsVendor[] = response;
      const mappedData = Array.from(
        new Map(data.map((item) => [item.vendorId, item])).values()
      ).map((item) => ({
        name: item.vendorName,
        id: item.vendorId,
      }));
      yield put(setFilterBrandsVendor(mappedData));
    }
  } catch (error) {
    console.log(`==Error on fetchBrandsVendorSaga: ${error}`);
  }
}

export function* fetchOfferCouponCodeSaga({
  payload,
}: {
  payload: string;
}): SagaIterator {
  try {
    const response = yield call(downloadOfferCouponCodeService, payload);
    if (response) {
      console.log(`==response: ${JSON.stringify(response)}`);

      const imageObjectURL = `data:image/jpeg;base64,${Buffer.from(
        response,
        'binary'
      ).toString('base64')}`;
      console.log(`==imageObjectURL: ${imageObjectURL}`);

      yield put(setOfferCouponCode({ url: imageObjectURL }));
    }
  } catch (error) {
    console.log(`==Error on fetchOfferCouponCodeSaga: ${error}`);
    yield put(setOfferCouponCode({ error: JSON.stringify(error) }));
  }
}

export function* refreshListingStateSaga(): SagaIterator {
  try {
    yield put(setResetListingState());
  } catch (error) {
    console.log(`==Error on refreshListingStateSaga: ${error}`);
  }
}

export function* fetchGDOffersDealsSaga({
  payload,
}: {
  payload: ILatLongType;
}): SagaIterator {
  try {
    const requestPayload: IListingFilters = {
      filters: {
        lat: payload.lat,
        lng: payload.lng,
        range: {
          min: 0,
          max: MAX_RANGE,
        },
        extraDealType: ExtraDealTypeEnum.NoFilter,
        localOrBrand: LocalOrBrandEnum.NoFilter,
      },
      sort: {
        order: SortTypeEnum.ExtraGreedyDealsDiscount,
      },
    };
    const response = yield call(fetchFilterAPIService, requestPayload);
    if (response) {
      yield put(setGDOffers(response));
    }
  } catch (error) {
    console.log(`==Error on fetchGDOffersDealsSaga: ${error}`);
  }
}
export function* fetchEndingSoonDealsSaga({
  payload,
}: {
  payload: ILatLongType;
}): SagaIterator {
  try {
    const requestPayload: IListingFilters = {
      filters: {
        lat: payload.lat,
        lng: payload.lng,
        range: {
          min: 0,
          max: MAX_RANGE,
        },
        extraDealType: ExtraDealTypeEnum.NoFilter,
        localOrBrand: LocalOrBrandEnum.NoFilter,
      },
      sort: {
        order: SortTypeEnum.ExpiringSoon,
      },
    };
    const response = yield call(fetchFilterAPIService, requestPayload);
    if (response) {
      yield put(setEndingSoonDeals(response));
    }
  } catch (error) {
    console.log(`==Error on fetchGDOffersDealsSaga: ${error}`);
  }
}

export function* fetchProductDetailsSaga({
  payload,
}: {
  payload: string;
}): SagaIterator {
  try {
    yield put(setProductDetails({ loading: true }));
    const response = yield call(fetchProductDetailsService, payload);
    if (response) {
      yield put(setProductDetails({ data: response, loading: false }));
    } else {
      yield put(setProductDetails({ loading: false }));
    }
  } catch (error) {
    console.log(`Error on fetchProductDetailsSaga: ${error}`);
    yield put(
      setProductDetails({ loading: false, error: JSON.stringify(error) })
    );
  }
}

export function* initProductsSaga(): SagaIterator {
  yield takeLatest(fetchFilteredProductAction, fetchFilteredProductsSaga);
  yield takeLatest(fetchOfferTypesByCategoryAction, fetchOfferByCategorySaga);
  yield takeLatest(fetchBrandsVendorAction, fetchBrandsVendorSaga);
  yield takeLatest(fetchOfferCouponCodeAction, fetchOfferCouponCodeSaga);
  yield takeLatest(refreshListingStateAction, refreshListingStateSaga);
  yield takeLatest(fetchGDOffersDealsAction, fetchGDOffersDealsSaga);
  yield takeLatest(fetchEndingSoonDealsAction, fetchEndingSoonDealsSaga);
  yield takeLatest(fetchProductDetailsAction, fetchProductDetailsSaga);
}
