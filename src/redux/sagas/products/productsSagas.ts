import { SagaIterator } from 'redux-saga';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  fetchBrandsVendorAction,
  fetchFilteredProductAction,
  fetchGDOffersDealsAction,
  fetchOfferCouponCodeAction,
  fetchOfferTypesByCategoryAction,
  getFilteredProducts,
  refreshListingStateAction,
  setFilterBrandsVendor,
  setFilteredData,
  setFilterModel,
  setFilterOfferTypesByCategory,
  setGDOffers,
  setOfferCouponCode,
  setResetListingState,
} from './productsRedux';
import {
  downloadOfferCouponCodeService,
  fetchCategoriesFilterService,
  fetchFilterBrandsVendorService,
  fetchOfferByCategoryService,
  IOffersByCategoryId,
} from '../../../api/services';
import { IListingFilters } from '../../../types/FilterTypes';
import {
  IFilterBrandsVendor,
  IMappedBrandVendor,
  IMappedFilterTypes,
} from './productsTypes';
import { IStoreOfferType } from '../categories/categoriesTypes';
import { OfferTypeEnum } from '../../../types/listingTypes';
import { Buffer } from 'buffer';

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
    const response = yield call(fetchCategoriesFilterService, payload);
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
    const response = yield call(fetchOfferByCategoryService, payload);

    if (response) {
      const data: IStoreOfferType[] = response;
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
      console.log(`==mappedData: ${JSON.stringify(mappedData)}`);

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
    const response = yield call(fetchFilterBrandsVendorService, payload);
    if (response) {
      const data: IFilterBrandsVendor[] = response;
      const mappedData: IMappedBrandVendor[] = data.map((item) => ({
        name: item.name,
        id: item.id,
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

      const imageObjectURL = `data:image/png;base64,${Buffer.from(
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
  payload: IListingFilters;
}): SagaIterator {
  try {
    const model: IListingFilters = {
      filters: {
        lat: payload?.filters?.lat,
        lng: payload?.filters?.lng,
        offerType: [3],
      },
      sort: {
        order: 2,
      },
    };
    const response = yield call(fetchCategoriesFilterService, model);
    if (response) {
      yield put(setGDOffers(response));
    }
  } catch (error) {
    console.log(`==Error on fetchGDOffersDealsSaga: ${error}`);
  }
}

export function* initProductsSaga(): SagaIterator {
  yield takeLatest(fetchFilteredProductAction, fetchFilteredProductsSaga);
  yield takeLatest(fetchOfferTypesByCategoryAction, fetchOfferByCategorySaga);
  yield takeLatest(fetchBrandsVendorAction, fetchBrandsVendorSaga);
  yield takeLatest(fetchOfferCouponCodeAction, fetchOfferCouponCodeSaga);
  yield takeLatest(refreshListingStateAction, refreshListingStateSaga);
  yield takeLatest(fetchGDOffersDealsAction, fetchGDOffersDealsSaga);
}
