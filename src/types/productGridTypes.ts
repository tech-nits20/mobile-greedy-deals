import {
  IMappedFilterTypes,
  IProductInfo,
} from '../redux/sagas/products/productsTypes';
import { IListingFilters } from './FilterTypes';

export interface ProductGridSectionItemProps {
  title: string;
  offersDescription: string;
  expiredOn: string;
}

export interface ProductGridSectionProps {
  section: IProductInfo[];
  productName: string;
  loading?: boolean;
  filterDataModel: IListingFilters;
  sortingOption: IMappedFilterTypes[];
  onFilterChange: (res: IListingFilters) => void;
  onFilterClicked: () => void;
}
