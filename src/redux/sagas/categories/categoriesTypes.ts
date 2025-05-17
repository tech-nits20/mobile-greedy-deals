import { IStoreOffers, IStoreOffersType } from '../products/productsTypes';

export interface ICategoriesBaseState {
  categoriesData: ICategory[];
  subCategoriesData: ISubCategory[] | undefined;
  categoryProducts: ICategoryProducts[] | undefined;
  discountsAndOffers: IDiscountsOffersItem[] | undefined;
  topCashbackDiscounts: IDiscountsOffersItem[] | undefined;
  earlyDeals: IDiscountsOffersItem[] | undefined;
  premiumBrandsOffers: IDiscountsOffersItem[] | undefined;
  categoriesState: ICategoryState;
  discountAndOfferState: IDiscountOfferState;
  topCashbackState: ITopCashbackState;
  earlyDealsState: IEarlyDealsState;
  premiumBrandsState: IPremiumBrandsState;
  currentLocation: ICurrentLocationType;
  allCategoriesList: ICategory[];
  clothingOffersData: ISectionDataState;
  foodsOffersData: ISectionDataState;
  beautyAndSpaData: ISectionDataState;
  realStatesData: ISectionDataState;
  hospitalsData: ISectionDataState;
  previousCurrentLocation: ILatLongType;
  customLocation: ILatLongType;
}

export interface ISectionDataState {
  data: IDiscountsOffersItem[];
  loading: boolean;
  error?: string;
  isFetched: boolean;
}
export interface ICurrentLocationType {
  locationName: string;
  lat: number;
  lng: number;
}
export interface IPremiumBrandsState {
  premiumBrandLoading: boolean;
  premiumBrandsError: string | undefined;
  isFetched: boolean;
}
export interface IEarlyDealsState {
  earlyDealsLoading: boolean;
  earlyDealsError: string | undefined;
  isFetched: boolean;
}
export interface ITopCashbackState {
  topCashbackLoading: boolean;
  topCashbackError: string | undefined;
  isFetched: boolean;
}
export interface IDiscountOfferState {
  discountOffersLoading: boolean;
  discountOffersError: string | undefined;
  isFetched: boolean;
}
export interface ICategoryState {
  categoryLoading: boolean;
  categoryError: string | undefined;
  isFetched: boolean;
}
export interface ISubCategory {
  categoryId: string;
  subCategories: ICategory[];
}

export interface ICategoryProducts {
  categoryId: string;
  products: ICategory[];
}
export interface ICategory {
  name: string;
  id: string;
  cssClass?: string;
  imageUrl?: string;
}

export interface IOfferImages {
  url: string;
}

export interface IOfferCategory {
  id?: string;
  name: string;
}

export enum IExtraGDDealsEnum {
  Cashback = 0,
  Percent,
}
export interface IStoreOfferType {
  id: string;
  selectedOfferType: number;
  buyX?: number;
  getY?: number;
  uptoXPercentOff?: number;
  flatXPercentOff?: number;
  extraGreedyDealDiscount?: number;
  isExtraGreedyDealsAvail?: boolean;
  extraGreedyDealsType?: IExtraGDDealsEnum;
  originalPrice?: number;
}

export interface IOfferItemStoreType {
  id: string;
  storeName: string;
  storeCity: string;
}
export interface IDiscountsOffersItem {
  id: string;
  title: string;
  description: string;
  couponCode: string;
  offerImages: IOfferImages[];
  offerCategories: IOfferCategory[];
  storeOffers: IStoreOffersType[];
  isActive: boolean;
  downloadCount: number;
  expiryDate: string;
  expiryEndDate: string;
  startTime: string;
  endTime: string;
  vendorId: string;
  offerType: IStoreOfferType;
  offerPrice: number;
  productName?: string;
  additionalDescription: string;
  youtubeLink: string;
  vendorName: string;
  vendorLogo: string;
  offerTypeId: string;
  stores: IOfferItemStoreType[];
}

export interface ILatLongType {
  lat: number;
  lng: number;
}
