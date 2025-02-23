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
  };
  sort?: {
    order?: number;
  };
}
