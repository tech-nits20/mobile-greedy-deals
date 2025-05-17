export enum SortTypeEnum {
  Popularity,
  NewestFirst,
  ExtraGreedyDealsDiscount,
  ExpiringSoon,
  Upcoming,
}

export enum ExtraDealTypeEnum {
  NoFilter = -1,
  CashBack = 0,
  Discount = 1,
  HasExtraGreedyDeals = 100,
}

export enum LocalOrBrandEnum {
  NoFilter = -1,
  Branded = 0,
  Local = 1,
}
export interface IListingFilters {
  filters?: {
    lat?: number;
    lng?: number;
    range?: {
      min?: number;
      max?: number;
    };
    offerType?: number[];
    vendors?: string[];
    categoryId?: string;
    offerTypeIds?: string[];
    extraDealType?: ExtraDealTypeEnum;
    localOrBrand?: LocalOrBrandEnum;
  };
  sort?: {
    order?: SortTypeEnum;
  };
}
