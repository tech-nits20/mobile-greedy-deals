import { SagaIterator } from 'redux-saga';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  fetchAllCategoryService,
  fetchFilterAPIService,
  fetchCurrentLocationService,
  fetchDiscountsAndOffersService,
  fetchEarlyDealsService,
  fetchTopCashbackDiscountsService,
  ILocationType,
} from '../../../api/services';
import {
  fetchBeautyAndSpaOffersAction,
  fetchCategoriesAction,
  fetchClothingOffersAction,
  fetchCurrentLocationAction,
  fetchDiscountsOffersAction,
  fetchEarlyDealsAction,
  fetchFoodsOffersAction,
  fetchHospitalsOffersAction,
  fetchPremiumBrandsOffersAction,
  fetchRealStateOffersAction,
  fetchTopCashbackDiscountsAction,
  getAllCategoriesList,
  setAllCategoriesList,
  setBeautyAndSpaOffers,
  setCategoriesData,
  setCategoriesState,
  setCategoryProductsData,
  setClothingOffers,
  setCurrentLocation,
  setDiscountOfferState,
  setDiscountsAndOffers,
  setEarlyDeals,
  setEarlyDealsState,
  setFoodsOffers,
  setHospitalsOffers,
  setPremiumBrandsOffers,
  setPremiumBrandsState,
  setRealStateOffers,
  setSubCategoriesData,
  setTopCashbackDiscounts,
  setTopCashbackState,
} from './categoryRedux';
import {
  ICategory,
  ICategoryProducts,
  ICurrentLocationType,
  ILatLongType,
  ISubCategory,
} from './categoriesTypes';
import {
  ExtraDealTypeEnum,
  IListingFilters,
  LocalOrBrandEnum,
  SortTypeEnum,
} from '../../../types/FilterTypes';
import { MAX_RANGE } from '../../../api/client';

export function* fetchCategoriesSaga(): SagaIterator {
  try {
    yield put(
      setCategoriesState({
        categoryLoading: true,
        categoryError: undefined,
        isFetched: false,
      })
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
          isFetched: true,
        })
      );

      const subCategories: ISubCategory[] = [];
      const categoryProducts: ICategoryProducts[] = [];

      if (filteredCategories.length > 0) {
        filteredCategories.forEach((category: { id: string }) => {
          const subCategory = response.filter(
            (item: { parentId: string }) => item.parentId === category.id
          );
          if (subCategory.length > 0) {
            subCategories.push({
              categoryId: category.id,
              subCategories: subCategory,
            });
          }
        });

        // const response = yield all(
        //   filteredCategories.map((category: { id: string }) =>
        //     call(fetchCategoryService, category.id)
        //   )
        // );
        // const subCategory = response.filter(
        //   (res: { children: string | any[] }) => res.children.length > 0
        // );
        // subCategory.forEach((item: { children: []; id: string }) => {
        //   subCategories.push({
        //     categoryId: item.id,
        //     subCategories: item.children,
        //   });
        // });

        if (subCategories.length > 0) {
          subCategories.flatMap((subItem) =>
            subItem.subCategories.map((res: { id: string }) => {
              const subProduct = response.filter(
                (item: { parentId: string }) => res.id === item.parentId
              );

              if (subProduct.length > 0) {
                categoryProducts.push({
                  categoryId: res.id,
                  products: subProduct,
                });
              }
            })
          );

          // subCategories.forEach((subItem) => {
          //   subItem.subCategories.forEach((res: { id: string }) => {
          //     const subProduct = response.filter(
          //       (item: { parentId: string }) => res.id === item.parentId
          //     );
          //     if (subProduct.length > 0) {
          //       categoryProducts.push({
          //         categoryId: subItem.categoryId,
          //         products: subProduct,
          //       });
          //     }
          //   });
          // });
          // const categoryResponse = yield all(
          //   subCategories.flatMap((subItem) =>
          //     subItem.subCategories.map((res: { id: string }) =>
          //       call(fetchCategoryService, res.id)
          //     )
          //   )
          // );
          // const category = categoryResponse.filter(
          //   (res: { children: string | any[] }) => res.children.length > 0
          // );
          // category.forEach((item: { children: []; id: string }) => {
          //   categoryProducts.push({
          //     categoryId: item.id,
          //     products: item.children,
          //   });
          // });
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
        isFetched: true,
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
    const requestPayload: IListingFilters = {
      filters: {
        lat: payload.lat,
        lng: payload.lng,
        range: {
          min: 0,
          max: MAX_RANGE,
        },
        extraDealType: ExtraDealTypeEnum.Discount,
        localOrBrand: LocalOrBrandEnum.NoFilter,
      },
      sort: {
        order: SortTypeEnum.Popularity,
      },
    };

    const response = yield call(fetchDiscountsAndOffersService, requestPayload);
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
    const requestPayload: IListingFilters = {
      filters: {
        lat: payload.lat,
        lng: payload.lng,
        range: {
          min: 0,
          max: MAX_RANGE,
        },
        extraDealType: ExtraDealTypeEnum.CashBack,
        localOrBrand: LocalOrBrandEnum.NoFilter,
      },
      sort: {
        order: SortTypeEnum.Popularity,
      },
    };
    const response = yield call(
      fetchTopCashbackDiscountsService,
      requestPayload
    );
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
        order: SortTypeEnum.Upcoming,
      },
    };
    const response = yield call(fetchEarlyDealsService, requestPayload);
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
    const requestPayload: IListingFilters = {
      filters: {
        lat: payload.lat,
        lng: payload.lng,
        range: {
          min: 0,
          max: MAX_RANGE,
        },
        extraDealType: ExtraDealTypeEnum.NoFilter,
        localOrBrand: LocalOrBrandEnum.Branded,
      },
      sort: {
        order: SortTypeEnum.Popularity,
      },
    };
    const response = yield call(fetchFilterAPIService, requestPayload);
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
    let route = undefined;
    let premises = undefined;
    let streetAddress = undefined;
    let locality = undefined;
    let subLocalityLevel1 = undefined;
    let subLocalityLevel2 = undefined;

    if (response) {
      let addressComponents: any[] = [];
      addressComponents = response?.data?.results?.find(
        (type: { types: string | any[] }) =>
          type.types.includes('street_address') ||
          type.types.includes('premise')
      )?.address_components;

      if (!addressComponents || addressComponents?.length === 0) {
        addressComponents = response?.data?.results?.find(
          (type: { types: string | any[] }) =>
            type.types.includes('locality') ||
            type.types.includes('sublocality') ||
            type.types.includes('sublocality_level_1')
        )?.address_components;
      }

      if (!addressComponents || addressComponents?.length === 0) {
        addressComponents = response?.data?.results?.find(
          (type: { types: string | any[] }) =>
            type.types.includes('locality') ||
            type.types.includes('sublocality') ||
            type.types.includes('sublocality_level_2')
        )?.address_components;
      }

      if (!addressComponents || addressComponents?.length === 0) {
        addressComponents = response?.data?.results?.find(
          (type: { types: string | any[] }) => type.types.includes('route')
        )?.address_components;
      }

      streetAddress = addressComponents.find(
        (c: { types: string | string[] }) => c.types.includes('street_address')
      )?.long_name;

      subLocalityLevel1 = addressComponents.find(
        (c: { types: string | string[] }) =>
          c.types.includes('sublocality_level_1')
      )?.long_name;

      subLocalityLevel2 = addressComponents.find(
        (c: { types: string | string[] }) =>
          c.types.includes('sublocality_level_2')
      )?.long_name;

      locality = addressComponents.find(
        (c: { types: string | string[] }) =>
          c.types.includes('locality') || c.types.includes('political')
      )?.long_name;

      console.log(`==Street Address: ${streetAddress}`);
      console.log(`==Sub Locality Level 1: ${subLocalityLevel1}`);
      console.log(`==Sub Locality Level 2: ${subLocalityLevel2}`);
      console.log(`==Locality: ${locality}`);

      let address = undefined;
      if (streetAddress && streetAddress.length < 8) {
        address = streetAddress;
      }
      if (subLocalityLevel1 && address) {
        address = address + ', ' + subLocalityLevel1;
      }
      const location: ICurrentLocationType = {
        locationName:
          address ??
          streetAddress ??
          subLocalityLevel1 ??
          subLocalityLevel2 ??
          locality ??
          '',
        lat: response?.lat ?? 0,
        lng: response?.lng ?? 0,
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
      console.log(`==Error on fetchCurrentLocationSaga: ${response}`);
    }
  } catch (error) {
    console.log(`==Error on fetchCurrentLocationSaga: ${error}`);
  }
}

export function* fetchClothingOffersSaga({
  payload,
}: {
  payload: ILatLongType;
}): SagaIterator {
  try {
    yield put(setClothingOffers({ data: [], isFetched: false, loading: true }));
    const allCategories: ICategory[] = yield select(getAllCategoriesList);
    const clothingCategory = allCategories.filter(
      (item) => item.name.trim().toLowerCase() === 'fashion'.toLowerCase()
    );
    if (clothingCategory.length > 0) {
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
          categoryId: clothingCategory[0].id,
        },
        sort: {
          order: SortTypeEnum.Popularity,
        },
      };
      const response = yield call(fetchFilterAPIService, requestPayload);
      if (response) {
        yield put(
          setClothingOffers({ data: response, isFetched: true, loading: false })
        );
      }
    } else {
      yield put(
        setClothingOffers({ data: [], isFetched: true, loading: false })
      );
    }
  } catch (error) {
    console.log(`Error on fetchClothingOffersSaga: ${error}`);
    yield put(
      setClothingOffers({
        data: [],
        isFetched: true,
        loading: false,
        error: JSON.stringify(error),
      })
    );
  }
}

export function* fetchFoodsOfferSaga({
  payload,
}: {
  payload: ILatLongType;
}): SagaIterator {
  try {
    yield put(setFoodsOffers({ data: [], isFetched: false, loading: true }));
    const allCategories: ICategory[] = yield select(getAllCategoriesList);
    const foodsCategory = allCategories.filter(
      (item) => item.name.trim().toLowerCase() === 'food'.toLowerCase()
    );
    if (foodsCategory.length > 0) {
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
          categoryId: foodsCategory[0].id,
        },
        sort: {
          order: SortTypeEnum.Popularity,
        },
      };
      const response = yield call(fetchFilterAPIService, requestPayload);
      if (response) {
        yield put(
          setFoodsOffers({ data: response, isFetched: true, loading: false })
        );
      }
    } else {
      yield put(setFoodsOffers({ data: [], isFetched: true, loading: false }));
    }
  } catch (error) {
    console.log(`Error on fetchFoodsOfferSaga: ${error}`);
    yield put(
      setFoodsOffers({
        data: [],
        isFetched: true,
        loading: false,
        error: JSON.stringify(error),
      })
    );
  }
}

export function* fetchBeautyAndSpaOfferSaga({
  payload,
}: {
  payload: ILatLongType;
}): SagaIterator {
  try {
    yield put(
      setBeautyAndSpaOffers({ data: [], isFetched: false, loading: true })
    );
    const allCategories: ICategory[] = yield select(getAllCategoriesList);
    const beautySpaCategory = allCategories.filter(
      (item) => item.name.trim().toLowerCase() === 'Beauty & Spa'.toLowerCase()
    );
    if (beautySpaCategory.length > 0) {
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
          categoryId: beautySpaCategory[0].id,
        },
        sort: {
          order: SortTypeEnum.Popularity,
        },
      };
      const response = yield call(fetchFilterAPIService, requestPayload);
      if (response) {
        yield put(
          setBeautyAndSpaOffers({
            data: response,
            isFetched: true,
            loading: false,
          })
        );
      }
    } else {
      yield put(
        setBeautyAndSpaOffers({ data: [], isFetched: true, loading: false })
      );
    }
  } catch (error) {
    console.log(`Error on fetchBeautyAndSpaOfferSaga: ${error}`);
    yield put(
      setBeautyAndSpaOffers({
        data: [],
        isFetched: true,
        loading: false,
        error: JSON.stringify(error),
      })
    );
  }
}

export function* fetchRealStatesOfferSaga({
  payload,
}: {
  payload: ILatLongType;
}): SagaIterator {
  try {
    yield put(
      setRealStateOffers({ data: [], isFetched: false, loading: true })
    );
    const allCategories: ICategory[] = yield select(getAllCategoriesList);
    const realStateCategory = allCategories.filter(
      (item) => item.name.trim().toLowerCase() === 'Real Estate'.toLowerCase()
    );
    if (realStateCategory.length > 0) {
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
          categoryId: realStateCategory[0].id,
        },
        sort: {
          order: SortTypeEnum.Popularity,
        },
      };
      const response = yield call(fetchFilterAPIService, requestPayload);
      if (response) {
        yield put(
          setRealStateOffers({
            data: response,
            isFetched: true,
            loading: false,
          })
        );
      }
    } else {
      yield put(
        setRealStateOffers({ data: [], isFetched: true, loading: false })
      );
    }
  } catch (error) {
    console.log(`Error on fetchRealStatesOfferSaga: ${error}`);
    yield put(
      setRealStateOffers({
        data: [],
        isFetched: true,
        loading: false,
        error: JSON.stringify(error),
      })
    );
  }
}

export function* fetchHospitalOfferSaga({
  payload,
}: {
  payload: ILatLongType;
}): SagaIterator {
  try {
    yield put(
      setHospitalsOffers({ data: [], isFetched: false, loading: true })
    );
    const allCategories: ICategory[] = yield select(getAllCategoriesList);
    const hospitalCategory = allCategories.filter(
      (item) => item.name.trim().toLowerCase() === 'Hospitals'.toLowerCase()
    );
    if (hospitalCategory.length > 0) {
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
          categoryId: hospitalCategory[0].id,
        },
        sort: {
          order: SortTypeEnum.Popularity,
        },
      };
      const response = yield call(fetchFilterAPIService, requestPayload);
      if (response) {
        yield put(
          setHospitalsOffers({
            data: response,
            isFetched: true,
            loading: false,
          })
        );
      }
    } else {
      yield put(
        setHospitalsOffers({ data: [], isFetched: true, loading: false })
      );
    }
  } catch (error) {
    console.log(`Error on fetchHospitalOfferSaga: ${error}`);
    yield put(
      setHospitalsOffers({
        data: [],
        isFetched: true,
        loading: false,
        error: JSON.stringify(error),
      })
    );
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
  yield takeLatest(fetchClothingOffersAction, fetchClothingOffersSaga);
  yield takeLatest(fetchFoodsOffersAction, fetchFoodsOfferSaga);
  yield takeLatest(fetchBeautyAndSpaOffersAction, fetchBeautyAndSpaOfferSaga);
  yield takeLatest(fetchRealStateOffersAction, fetchRealStatesOfferSaga);
  yield takeLatest(fetchHospitalsOffersAction, fetchHospitalOfferSaga);
}
