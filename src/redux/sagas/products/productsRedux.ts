import {
  createAction,
  createSlice,
  PayloadAction,
  Reducer,
} from '@reduxjs/toolkit';
import {
  ICouponCodeType,
  IFilterProductType,
  IMappedBrandVendor,
  IMappedFilterTypes,
  IProductDetailsType,
  IProductInfo,
  IProductsBaseState,
} from './productsTypes';
import { IListingFilters } from '../../../types/FilterTypes';
import { IOffersByCategoryId } from '../../../api/services';
import {
  IDiscountsOffersItem,
  ILatLongType,
} from '../categories/categoriesTypes';

const initialState: IProductsBaseState = {
  filteredProducts: {
    data: [],
    loading: false,
    error: undefined,
  },
  offerTypesByCategory: [],
  brandsVendor: [],
  offerCouponCode: {},
  filterModel: {},
  GDOffersData: [],
  endingSoonDeals: [],
  productDetailsData: {
    data: undefined,
    loading: false,
    error: undefined,
  },
};

const name = 'products';
// Create a slice with actions and reducer
const productsSlice = createSlice({
  name,
  initialState,
  reducers: {
    setFilteredData: (
      state: IProductsBaseState,
      action: PayloadAction<IFilterProductType>
    ) => {
      state.filteredProducts = action.payload;
    },
    setFilterOfferTypesByCategory: (
      state: IProductsBaseState,
      action: PayloadAction<IMappedFilterTypes[]>
    ) => {
      state.offerTypesByCategory = action.payload;
    },
    setFilterBrandsVendor: (
      state: IProductsBaseState,
      action: PayloadAction<IMappedBrandVendor[]>
    ) => {
      state.brandsVendor = action.payload;
    },
    setOfferCouponCode: (
      state: IProductsBaseState,
      action: PayloadAction<ICouponCodeType>
    ) => {
      state.offerCouponCode = action.payload;
    },
    setFilterModel: (
      state: IProductsBaseState,
      action: PayloadAction<IListingFilters>
    ) => {
      state.filterModel = action.payload;
    },
    setGDOffers: (
      state: IProductsBaseState,
      action: PayloadAction<IDiscountsOffersItem[]>
    ) => {
      state.GDOffersData = action.payload;
    },
    setEndingSoonDeals: (
      state: IProductsBaseState,
      action: PayloadAction<IDiscountsOffersItem[]>
    ) => {
      state.endingSoonDeals = action.payload;
    },
    setProductDetails: (
      state: IProductsBaseState,
      action: PayloadAction<IProductDetailsType>
    ) => {
      state.productDetailsData = action.payload;
    },
    setResetListingState: () => initialState,
  },
});

export const getFilteredProducts: (state: {
  products: IProductsBaseState;
}) => IFilterProductType = (state: { products: IProductsBaseState }) => {
  return (
    state.products.filteredProducts || {
      data: [],
      loading: false,
      error: undefined,
    }
  );
};

export const getOfferTypesByCategory: (state: {
  products: IProductsBaseState;
}) => IMappedFilterTypes[] = (state: { products: IProductsBaseState }) => {
  return state.products.offerTypesByCategory || [];
};

export const getBrandsVendor: (state: {
  products: IProductsBaseState;
}) => IMappedBrandVendor[] = (state: { products: IProductsBaseState }) => {
  return state.products.brandsVendor || [];
};

export const getOfferCouponCode: (state: {
  products: IProductsBaseState;
}) => ICouponCodeType = (state: { products: IProductsBaseState }) => {
  return state.products.offerCouponCode;
};

export const getFilterModel: (state: {
  products: IProductsBaseState;
}) => IListingFilters = (state: { products: IProductsBaseState }) => {
  return state.products.filterModel || {};
};

export const getGDOffersData: (state: {
  products: IProductsBaseState;
}) => IProductInfo[] = (state: { products: IProductsBaseState }) => {
  return state.products.GDOffersData || [];
};

export const getEndingSoonDeals: (state: {
  products: IProductsBaseState;
}) => IDiscountsOffersItem[] = (state: { products: IProductsBaseState }) => {
  return state.products.endingSoonDeals || [];
};

export const getProductDetails: (state: {
  products: IProductsBaseState;
}) => IProductDetailsType | undefined = (state: {
  products: IProductsBaseState;
}) => {
  return state.products.productDetailsData;
};

export const fetchFilteredProductAction = createAction(
  `${name}/fetchFilteredProductAction`,
  (payload: IListingFilters) => {
    return {
      payload,
    };
  }
);

export const fetchGDOffersDealsAction = createAction(
  `${name}/fetchGDOffersDealsAction`,
  (payload: ILatLongType) => {
    return {
      payload,
    };
  }
);

export const fetchEndingSoonDealsAction = createAction(
  `${name}/fetchEndingSoonDealsAction`,
  (payload: ILatLongType) => {
    return {
      payload,
    };
  }
);

export const fetchOfferTypesByCategoryAction = createAction(
  `${name}/fetchOfferTypesByCategoryAction`,
  (payload: IOffersByCategoryId) => {
    return {
      payload,
    };
  }
);

export const fetchBrandsVendorAction = createAction(
  `${name}/fetchBrandsVendorAction`,
  (payload: IOffersByCategoryId) => {
    return {
      payload,
    };
  }
);

export const fetchOfferCouponCodeAction = createAction(
  `${name}/fetchOfferCouponCodeAction`,
  (payload: string) => {
    return {
      payload,
    };
  }
);

export const refreshListingStateAction = createAction(
  `${name}/refreshListingState`
);

export const fetchProductDetailsAction = createAction(
  `${name}/fetchProductDetailsAction`,
  (payload: string) => {
    return {
      payload,
    };
  }
);

export const {
  setFilteredData,
  setFilterOfferTypesByCategory,
  setFilterBrandsVendor,
  setOfferCouponCode,
  setFilterModel,
  setResetListingState,
  setGDOffers,
  setEndingSoonDeals,
  setProductDetails,
} = productsSlice.actions;
export const productsReducer: Reducer<IProductsBaseState> =
  productsSlice.reducer;
