import {
  createAction,
  createSlice,
  PayloadAction,
  Reducer,
} from '@reduxjs/toolkit';
import {
  ICategoriesBaseState,
  ICategory,
  ICategoryProducts,
  ICategoryState,
  ICurrentLocationType,
  IDiscountOfferState,
  IDiscountsOffersItem,
  IEarlyDealsState,
  ILatLongType,
  IPremiumBrandsState,
  ISectionDataState,
  ISubCategory,
  ITopCashbackState,
} from './categoriesTypes';

const initialState: ICategoriesBaseState = {
  categoriesData: [],
  subCategoriesData: undefined,
  categoryProducts: [],
  discountsAndOffers: [],
  topCashbackDiscounts: [],
  earlyDeals: [],
  premiumBrandsOffers: [],
  allCategoriesList: [],
  categoriesState: {
    categoryLoading: false,
    categoryError: undefined,
    isFetched: false,
  },
  discountAndOfferState: {
    discountOffersLoading: false,
    discountOffersError: undefined,
    isFetched: false,
  },
  topCashbackState: {
    topCashbackLoading: false,
    topCashbackError: undefined,
    isFetched: false,
  },
  earlyDealsState: {
    earlyDealsLoading: false,
    earlyDealsError: undefined,
    isFetched: false,
  },
  premiumBrandsState: {
    premiumBrandLoading: false,
    premiumBrandsError: undefined,
    isFetched: false,
  },
  currentLocation: {
    locationName: '',
    lat: 0,
    lng: 0,
  },
  clothingOffersData: {
    data: [],
    loading: false,
    error: undefined,
    isFetched: false,
  },
  foodsOffersData: {
    data: [],
    loading: false,
    error: undefined,
    isFetched: false,
  },
  beautyAndSpaData: {
    data: [],
    loading: false,
    error: undefined,
    isFetched: false,
  },
  realStatesData: {
    data: [],
    loading: false,
    error: undefined,
    isFetched: false,
  },
  hospitalsData: {
    data: [],
    loading: false,
    error: undefined,
    isFetched: false,
  },
  previousCurrentLocation: {
    lat: 0,
    lng: 0,
  },
  customLocation: {
    lat: 0,
    lng: 0,
  },
};
const name = 'categories';
// Create a slice with actions and reducer
const categoriesSlice = createSlice({
  name,
  initialState,
  reducers: {
    setCategoriesData: (
      state: ICategoriesBaseState,
      action: PayloadAction<[]>
    ) => {
      state.categoriesData = action.payload;
    },
    setSubCategoriesData: (
      state: ICategoriesBaseState,
      action: PayloadAction<ISubCategory[] | undefined>
    ) => {
      state.subCategoriesData = action.payload;
    },
    setCategoryProductsData: (
      state: ICategoriesBaseState,
      action: PayloadAction<ICategoryProducts[] | undefined>
    ) => {
      state.categoryProducts = action.payload;
    },
    setDiscountsAndOffers: (
      state: ICategoriesBaseState,
      action: PayloadAction<[] | undefined>
    ) => {
      state.discountsAndOffers = action.payload;
    },
    setTopCashbackDiscounts: (
      state: ICategoriesBaseState,
      action: PayloadAction<[] | undefined>
    ) => {
      state.topCashbackDiscounts = action.payload;
    },
    setEarlyDeals: (
      state: ICategoriesBaseState,
      action: PayloadAction<[] | undefined>
    ) => {
      state.earlyDeals = action.payload;
    },
    setPremiumBrandsOffers: (
      state: ICategoriesBaseState,
      action: PayloadAction<[] | undefined>
    ) => {
      state.premiumBrandsOffers = action.payload;
    },
    setCategoriesState: (
      state: ICategoriesBaseState,
      action: PayloadAction<ICategoryState>
    ) => {
      state.categoriesState = action.payload;
    },
    setDiscountOfferState: (
      state: ICategoriesBaseState,
      action: PayloadAction<IDiscountOfferState>
    ) => {
      state.discountAndOfferState = action.payload;
    },
    setTopCashbackState: (
      state: ICategoriesBaseState,
      action: PayloadAction<ITopCashbackState>
    ) => {
      state.topCashbackState = action.payload;
    },
    setEarlyDealsState: (
      state: ICategoriesBaseState,
      action: PayloadAction<IEarlyDealsState>
    ) => {
      state.earlyDealsState = action.payload;
    },
    setPremiumBrandsState: (
      state: ICategoriesBaseState,
      action: PayloadAction<IPremiumBrandsState>
    ) => {
      state.premiumBrandsState = action.payload;
    },
    setCurrentLocation: (
      state: ICategoriesBaseState,
      action: PayloadAction<ICurrentLocationType>
    ) => {
      state.currentLocation = action.payload;
    },
    setAllCategoriesList: (
      state: ICategoriesBaseState,
      action: PayloadAction<ICategory[]>
    ) => {
      state.allCategoriesList = action.payload;
    },
    setClothingOffers: (
      state: ICategoriesBaseState,
      action: PayloadAction<ISectionDataState>
    ) => {
      state.clothingOffersData = action.payload;
    },
    setFoodsOffers: (
      state: ICategoriesBaseState,
      action: PayloadAction<ISectionDataState>
    ) => {
      state.foodsOffersData = action.payload;
    },
    setBeautyAndSpaOffers: (
      state: ICategoriesBaseState,
      action: PayloadAction<ISectionDataState>
    ) => {
      state.beautyAndSpaData = action.payload;
    },
    setRealStateOffers: (
      state: ICategoriesBaseState,
      action: PayloadAction<ISectionDataState>
    ) => {
      state.realStatesData = action.payload;
    },
    setHospitalsOffers: (
      state: ICategoriesBaseState,
      action: PayloadAction<ISectionDataState>
    ) => {
      state.hospitalsData = action.payload;
    },
    setPreviousCurrentLocation: (
      state: ICategoriesBaseState,
      action: PayloadAction<ILatLongType>
    ) => {
      state.previousCurrentLocation = action.payload;
    },
    setCustomLocation: (
      state: ICategoriesBaseState,
      action: PayloadAction<ILatLongType>
    ) => {
      state.customLocation = action.payload;
    },
  },
});

export const getAllCategories: (state: {
  categories: ICategoriesBaseState;
}) => ICategory[] = (state: { categories: ICategoriesBaseState }) => {
  return state.categories.categoriesData;
};

export const getAllSubCategories: (state: {
  categories: ICategoriesBaseState;
}) => ISubCategory[] | undefined = (state: {
  categories: ICategoriesBaseState;
}) => {
  return state.categories.subCategoriesData;
};

export const getCategoryProducts: (state: {
  categories: ICategoriesBaseState;
}) => ICategoryProducts[] | undefined = (state: {
  categories: ICategoriesBaseState;
}) => {
  return state.categories.categoryProducts;
};

export const getDiscountsOffers: (state: {
  categories: ICategoriesBaseState;
}) => IDiscountsOffersItem[] | undefined = (state: {
  categories: ICategoriesBaseState;
}) => {
  return state.categories.discountsAndOffers;
};

export const getTopCashbackDiscounts: (state: {
  categories: ICategoriesBaseState;
}) => IDiscountsOffersItem[] | undefined = (state: {
  categories: ICategoriesBaseState;
}) => {
  return state.categories.topCashbackDiscounts;
};

export const getEarlyDeals: (state: {
  categories: ICategoriesBaseState;
}) => IDiscountsOffersItem[] | undefined = (state: {
  categories: ICategoriesBaseState;
}) => {
  return state.categories.earlyDeals;
};

export const getPremiumBrandsOffers: (state: {
  categories: ICategoriesBaseState;
}) => IDiscountsOffersItem[] | undefined = (state: {
  categories: ICategoriesBaseState;
}) => {
  return state.categories.premiumBrandsOffers;
};

export const getCategoryStatus: (state: {
  categories: ICategoriesBaseState;
}) => ICategoryState = (state: { categories: ICategoriesBaseState }) => {
  return state.categories.categoriesState;
};

export const getDiscountOfferStatus: (state: {
  categories: ICategoriesBaseState;
}) => IDiscountOfferState = (state: { categories: ICategoriesBaseState }) => {
  return state.categories.discountAndOfferState;
};

export const getTopCashbackStatus: (state: {
  categories: ICategoriesBaseState;
}) => ITopCashbackState = (state: { categories: ICategoriesBaseState }) => {
  return state.categories.topCashbackState;
};

export const getEarlyDealsStatus: (state: {
  categories: ICategoriesBaseState;
}) => IEarlyDealsState = (state: { categories: ICategoriesBaseState }) => {
  return state.categories.earlyDealsState;
};

export const getPremiumBrandsStatus: (state: {
  categories: ICategoriesBaseState;
}) => IPremiumBrandsState = (state: { categories: ICategoriesBaseState }) => {
  return state.categories.premiumBrandsState;
};

export const getCurrentLocation: (state: {
  categories: ICategoriesBaseState;
}) => ICurrentLocationType = (state: { categories: ICategoriesBaseState }) => {
  return state.categories.currentLocation;
};

export const getAllCategoriesList: (state: {
  categories: ICategoriesBaseState;
}) => ICategory[] = (state: { categories: ICategoriesBaseState }) => {
  return state.categories.allCategoriesList;
};

export const getClothingOffers: (state: {
  categories: ICategoriesBaseState;
}) => ISectionDataState = (state: { categories: ICategoriesBaseState }) => {
  return state.categories.clothingOffersData;
};

export const getFoodsOffers: (state: {
  categories: ICategoriesBaseState;
}) => ISectionDataState = (state: { categories: ICategoriesBaseState }) => {
  return state.categories.foodsOffersData;
};

export const getBeautyAndSpaOffers: (state: {
  categories: ICategoriesBaseState;
}) => ISectionDataState = (state: { categories: ICategoriesBaseState }) => {
  return state.categories.beautyAndSpaData;
};

export const getRealStateOffers: (state: {
  categories: ICategoriesBaseState;
}) => ISectionDataState = (state: { categories: ICategoriesBaseState }) => {
  return state.categories.realStatesData;
};

export const getHospitalOffers: (state: {
  categories: ICategoriesBaseState;
}) => ISectionDataState = (state: { categories: ICategoriesBaseState }) => {
  return state.categories.hospitalsData;
};

export const getPreviousCurrentLocation: (state: {
  categories: ICategoriesBaseState;
}) => ILatLongType = (state: { categories: ICategoriesBaseState }) => {
  return state.categories.previousCurrentLocation;
};

export const getCustomLocation: (state: {
  categories: ICategoriesBaseState;
}) => ILatLongType = (state: { categories: ICategoriesBaseState }) => {
  return state.categories.customLocation;
};

export const fetchCategoriesAction = createAction(`${name}/fetchAllCategories`);
export const fetchDiscountsOffersAction = createAction(
  `${name}/fetchDiscountsOffers`,
  (payload: ILatLongType) => {
    return {
      payload,
    };
  }
);
export const fetchTopCashbackDiscountsAction = createAction(
  `${name}/fetchTopCashbackDiscounts`,
  (payload: ILatLongType) => {
    return {
      payload,
    };
  }
);
export const fetchEarlyDealsAction = createAction(
  `${name}/fetchEarlyDeals`,
  (payload: ILatLongType) => {
    return {
      payload,
    };
  }
);
export const fetchPremiumBrandsOffersAction = createAction(
  `${name}/fetchPremiumBrandsOffers`,
  (payload: ILatLongType) => {
    return {
      payload,
    };
  }
);

export const fetchCurrentLocationAction = createAction(
  `${name}/fetchCurrentLocation`
);

export const fetchClothingOffersAction = createAction(
  `${name}/fetchClothingOffersAction`,
  (payload: ILatLongType) => {
    return {
      payload,
    };
  }
);

export const fetchFoodsOffersAction = createAction(
  `${name}/fetchClothingOffersAction`,
  (payload: ILatLongType) => {
    return {
      payload,
    };
  }
);

export const fetchBeautyAndSpaOffersAction = createAction(
  `${name}/fetchClothingOffersAction`,
  (payload: ILatLongType) => {
    return {
      payload,
    };
  }
);

export const fetchRealStateOffersAction = createAction(
  `${name}/fetchClothingOffersAction`,
  (payload: ILatLongType) => {
    return {
      payload,
    };
  }
);

export const fetchHospitalsOffersAction = createAction(
  `${name}/fetchClothingOffersAction`,
  (payload: ILatLongType) => {
    return {
      payload,
    };
  }
);

export const {
  setCategoriesData,
  setSubCategoriesData,
  setCategoryProductsData,
  setDiscountsAndOffers,
  setTopCashbackDiscounts,
  setEarlyDeals,
  setPremiumBrandsOffers,
  setCategoriesState,
  setDiscountOfferState,
  setEarlyDealsState,
  setPremiumBrandsState,
  setTopCashbackState,
  setCurrentLocation,
  setAllCategoriesList,
  setBeautyAndSpaOffers,
  setClothingOffers,
  setFoodsOffers,
  setHospitalsOffers,
  setRealStateOffers,
  setCustomLocation,
  setPreviousCurrentLocation,
} = categoriesSlice.actions;
export const categoriesReducer: Reducer<ICategoriesBaseState> =
  categoriesSlice.reducer;
