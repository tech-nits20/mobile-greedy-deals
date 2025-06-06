import { IListingFilters } from './FilterTypes';

export enum OfferTypeEnum {
  BUY_GEY,
  UPTO,
  FLAT,
  ORIGINAL_PRICE,
  NONE,
}
export interface ILocationFilterItem {
  min: number;
  max: number;
}

export interface ITypeFilterItem {
  type: number;
  name: string;
}

export interface IOffersTypesFilterItem {
  name: string;
  id: string;
}

export interface IBrandsFilterItem {
  name: string;
  id: string;
}
export interface IListingFilterSectionProps {
  location: {
    sectionTitle: string;
    items: ILocationFilterItem[];
    id: number;
  };
  type: {
    sectionTitle: string;
    items: ITypeFilterItem[];
    id: number;
  };
  offersTypes?: {
    sectionTitle: string;
    items?: IOffersTypesFilterItem[];
    id: number;
  };
  brands?: {
    sectionTitle: string;
    items?: IBrandsFilterItem[];
    id: number;
  };
  setFilterModel?: (filterModel: IListingFilters) => void;
}
export interface ListingFiltersProps {
  filters: IListingFilterSectionProps;
  isMobile?: boolean;
  onFilterChange?: (value: IListingFilters) => void;
  onCloseFilter?: () => void;
  onClearAllClicked?: () => void;
}
