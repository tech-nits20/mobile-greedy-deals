import { IStoreOffers } from '../products/productsTypes';

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
export interface IDiscountsOffersItem {
  id: string;
  title: string;
  description: string;
  couponCode: string;
  offerImages: IOfferImages[];
  offerCategories: IOfferCategory[];
  storeOffers: IStoreOffers[];
  isActive: boolean;
  downloadCount: number;
  expiryDate: string;
  expiryEndDate: string;
  startTime: string;
  endTime: string;
  vendorId: string;
  offerType: IStoreOfferType;
  offerPrice: number;
}

export interface ILatLongType {
  lat: number;
  lng: number;
}
