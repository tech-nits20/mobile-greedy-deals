import { IListingFilters } from '../../../types/FilterTypes';
import { IOfferImages, IStoreOfferType } from '../categories/categoriesTypes';

export interface IProductInfo {
  id?: string;
  title?: string;
  description?: string;
  couponCode?: string;
  offerImages?: IOfferImages[];
  storeOffers?: IStoreOffersType[];
  offerCategories: [
    {
      id: string;
      name: string;
    }
  ];
  isActive?: boolean;
  downloadCount?: number;
  expiryDate?: string;
  expiryEndDate?: string;
  startTime?: string;
  endTime?: string;
  vendorId?: string;
  offerType: IStoreOfferType;
  offerPrice?: number;
  productName?: string;
  additionalDescription: string;
  youtubeLink: string;
}

export interface IStoreOffersType {
  id: string;
  name: string;
  address: string;
  geoLocation: string;
  rank: number;
  storeImages: [];
  storeOffers: null;
  storeCategories: [];
  vendor: null;
  shopManagerId: null;
  ownerPhone: string;
  managerPhone: string;
}

export interface IStoreOffers {
  productOffer?: IStoreOfferType;
  categoryName?: string;
  id?: string;
  title?: string;
  name?: string;
  description?: string;
  couponCode?: string;
  offerImages?: [];
  storeOffers?: IStoreOffers[];
  offerCategories: [
    {
      id?: string;
      name?: string;
    }
  ];
  isActive?: boolean;
  downloadCount?: number;
  expiryDate?: string;
  expiryEndDate?: string;
  startTime?: string;
  endTime?: string;
  vendorId?: string;
  offerType: IStoreOfferType;
  offerPrice?: number;
}

export interface IMappedFilterTypes {
  name: string;
  id: string;
}

export interface IFilterBrandsVendor {
  id: string;
  name: string;
  address: string;
  geoLocation: string;
  rank: number;
  vendorImages: [];
  stores: [];
  isLocal: boolean;
  youtubeLink: null;
}

export interface IMappedBrandVendor {
  name: string;
  id: string;
}

export interface IFilterProductType {
  data: IProductInfo[];
  loading: boolean;
  error: string | undefined;
}
export interface ICouponCodeType {
  error?: string;
  url?: string;
}
export interface IProductsBaseState {
  filteredProducts?: IFilterProductType;
  offerTypesByCategory?: IMappedFilterTypes[];
  brandsVendor?: IMappedBrandVendor[];
  offerCouponCode?: ICouponCodeType;
  filterModel?: IListingFilters;
  GDOffersData?: IProductInfo[];
}
