import { SagaIterator } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchAllCategoryService,
  fetchCategoryService,
  fetchCurrentLocationService,
  fetchDiscountsAndOffersService,
  fetchEarlyDealsService,
  fetchPremiumBrandsOffersService,
  fetchTopCashbackDiscountsService,
  ILocationType,
} from '../../../api/services';
import {
  fetchCategoriesAction,
  fetchCurrentLocationAction,
  fetchDiscountsOffersAction,
  fetchEarlyDealsAction,
  fetchPremiumBrandsOffersAction,
  fetchTopCashbackDiscountsAction,
  setAllCategoriesList,
  setCategoriesData,
  setCategoriesState,
  setCategoryProductsData,
  setCurrentLocation,
  setDiscountOfferState,
  setDiscountsAndOffers,
  setEarlyDeals,
  setEarlyDealsState,
  setPremiumBrandsOffers,
  setPremiumBrandsState,
  setSubCategoriesData,
  setTopCashbackDiscounts,
  setTopCashbackState,
} from './categoryRedux';
import {
  ICategoryProducts,
  ICurrentLocationType,
  ILatLongType,
  ISubCategory,
} from './categoriesTypes';

export function* fetchCategoriesSaga(): SagaIterator {
  try {
    yield put(
      setCategoriesState({ categoryLoading: true, categoryError: undefined })
    );
    const response = yield call(fetchAllCategoryService);
    if (response) {
      const filteredCategories = response.filter(
        (item: { parentId: null }) => item.parentId == null
      );
      yield put(setCategoriesData(filteredCategories));
      yield put(setAllCategoriesList(response));
      yield put(
        setCategoriesState({
          categoryLoading: false,
          categoryError: undefined,
        })
      );

      const subCategories: ISubCategory[] = [];
      const categoryProducts: ICategoryProducts[] = [];

      if (filteredCategories.length > 0) {
        // filteredCategories.forEach((category: { id: string }) => {
        //   const subCategory = response.filter(
        //     (item: { parentId: string }) => item.parentId === category.id
        //   );
        //   if (subCategory.length > 0) {
        //     subCategories.push({
        //       categoryId: category.id,
        //       subCategories: subCategory,
        //     });
        //   }
        // });
        const response = yield all(
          filteredCategories.map((category: { id: string }) =>
            call(fetchCategoryService, category.id)
          )
        );
        const subCategory = response.filter(
          (res: { children: string | any[] }) => res.children.length > 0
        );
        subCategory.forEach((item: { children: []; id: string }) => {
          subCategories.push({
            categoryId: item.id,
            subCategories: item.children,
          });
        });

        if (subCategories.length > 0) {
          // subCategories.forEach((subItem) => {
          //   subItem.subCategories.forEach((res: { id: string }) => {
          //     const subProduct = response.filter(
          //       (item: { parentId: string }) => res.id === item.parentId
          //     );
          //     if (subProduct.length > 0) {
          //       categoryProducts.push({
          //         categoryId: subItem.categoryId,
          //         subCategories: subProduct,
          //       });
          //     }
          //   });
          // });

          const categoryResponse = yield all(
            subCategories.flatMap((subItem) =>
              subItem.subCategories.map((res: { id: string }) =>
                call(fetchCategoryService, res.id)
              )
            )
          );
          const category = categoryResponse.filter(
            (res: { children: string | any[] }) => res.children.length > 0
          );
          category.forEach((item: { children: []; id: string }) => {
            categoryProducts.push({
              categoryId: item.id,
              products: item.children,
            });
          });
        }

        yield put(setSubCategoriesData(subCategories));
        yield put(setCategoryProductsData(categoryProducts));
      }
    }
  } catch (error) {
    console.log(`==Error on fetchCategoriesData: ${error}`);
    yield put(
      setCategoriesState({
        categoryLoading: false,
        categoryError: JSON.stringify(error),
      })
    );
  }
}

export function* fetchDiscountsOffersSaga({
  payload,
}: {
  payload: ILatLongType;
}): SagaIterator {
  try {
    yield put(
      setDiscountOfferState({
        discountOffersLoading: true,
        discountOffersError: undefined,
        isFetched: false,
      })
    );
    const response = yield call(fetchDiscountsAndOffersService, payload);
    if (response) {
      yield put(setDiscountsAndOffers(response));
    }
    yield put(
      setDiscountOfferState({
        discountOffersLoading: false,
        discountOffersError: undefined,
        isFetched: true,
      })
    );
  } catch (error) {
    console.log(`==Error on fetchDiscountsOffers: ${error}`);
    yield put(
      setDiscountOfferState({
        discountOffersLoading: false,
        discountOffersError: JSON.stringify(error),
        isFetched: true,
      })
    );
  }
}

export function* fetchTopCashbackDiscountsSaga({
  payload,
}: {
  payload: ILatLongType;
}): SagaIterator {
  try {
    yield put(
      setTopCashbackState({
        topCashbackLoading: true,
        topCashbackError: undefined,
        isFetched: false,
      })
    );
    const response = yield call(fetchTopCashbackDiscountsService, payload);
    if (response) {
      yield put(setTopCashbackDiscounts(response));
    }
    yield put(
      setTopCashbackState({
        topCashbackLoading: false,
        topCashbackError: undefined,
        isFetched: true,
      })
    );
  } catch (error) {
    console.log(`==Error on fetchTopCashbackDiscountsSaga: ${error}`);
    yield put(
      setTopCashbackState({
        topCashbackLoading: false,
        topCashbackError: JSON.stringify(error),
        isFetched: true,
      })
    );
  }
}

export function* fetchEarlyDealsSaga({
  payload,
}: {
  payload: ILatLongType;
}): SagaIterator {
  try {
    yield put(
      setEarlyDealsState({
        earlyDealsLoading: true,
        earlyDealsError: undefined,
        isFetched: false,
      })
    );
    const response = yield call(fetchEarlyDealsService, payload);
    if (response) {
      yield put(setEarlyDeals(response));
    }
    yield put(
      setEarlyDealsState({
        earlyDealsLoading: false,
        earlyDealsError: undefined,
        isFetched: true,
      })
    );
  } catch (error) {
    console.log(`==Error on fetchEarlyDealsSaga: ${error}`);
    yield put(
      setEarlyDealsState({
        earlyDealsLoading: false,
        earlyDealsError: JSON.stringify(error),
        isFetched: true,
      })
    );
  }
}

export function* fetchPremiumBrandsOffersSaga({
  payload,
}: {
  payload: ILatLongType;
}): SagaIterator {
  try {
    yield put(
      setPremiumBrandsState({
        premiumBrandLoading: true,
        premiumBrandsError: undefined,
        isFetched: false,
      })
    );
    const response = yield call(fetchPremiumBrandsOffersService, payload);
    if (response) {
      yield put(setPremiumBrandsOffers(response));
    }
    yield put(
      setPremiumBrandsState({
        premiumBrandLoading: false,
        premiumBrandsError: undefined,
        isFetched: true,
      })
    );
  } catch (error) {
    console.log(`==Error on fetchPremiumBrandsOffersSaga: ${error}`);
    yield put(
      setPremiumBrandsState({
        premiumBrandLoading: false,
        premiumBrandsError: JSON.stringify(error),
        isFetched: true,
      })
    );
  }
}

export function* fetchCurrentLocationSaga(): SagaIterator {
  try {
    const response: ILocationType = yield call(fetchCurrentLocationService);
    if (response) {
      const addressComponents = response.data.results[0].address_components;
      const locality = addressComponents.find(
        (c: { types: string | string[] }) => c.types.includes('locality')
      )?.long_name;

      const subLocalityLevel1 = addressComponents.find(
        (c: { types: string | string[] }) =>
          c.types.includes('sublocality_level_1')
      )?.long_name;

      const subLocalityLevel2 = addressComponents.find(
        (c: { types: string | string[] }) =>
          c.types.includes('sublocality_level_2')
      )?.long_name;
      // setCity(sublocalityLevel1 || sublocalityLevel2 || locality);
      console.log('City:', locality);
      console.log('District/Area:', subLocalityLevel1);
      console.log('Smaller Sector:', subLocalityLevel2);

      const location: ICurrentLocationType = {
        locationName: subLocalityLevel1 ?? subLocalityLevel2 ?? locality ?? '',
        lat: response.lat,
        lng: response.lng,
      };
      yield put(
        setCurrentLocation({
          locationName:
            subLocalityLevel1 ?? subLocalityLevel2 ?? locality ?? '',
          lat: response.lat,
          lng: response.lng,
        })
      );
    } else {
      console.error('Geocoding error:', response);
    }
  } catch (error) {
    console.log(`==Error on fetchCurrentLocationSaga: ${error}`);
  }
}

export function* initCategoriesSaga(): SagaIterator {
  yield takeLatest(fetchCategoriesAction, fetchCategoriesSaga);
  yield takeLatest(fetchDiscountsOffersAction, fetchDiscountsOffersSaga);
  yield takeLatest(
    fetchTopCashbackDiscountsAction,
    fetchTopCashbackDiscountsSaga
  );
  yield takeLatest(fetchEarlyDealsAction, fetchEarlyDealsSaga);
  yield takeLatest(
    fetchPremiumBrandsOffersAction,
    fetchPremiumBrandsOffersSaga
  );
  yield takeLatest(fetchCurrentLocationAction, fetchCurrentLocationSaga);
}
