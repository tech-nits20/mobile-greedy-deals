import React, { memo, useState } from 'react';
import {
  IBrandsFilterItem,
  IListingFilterSectionProps,
  ILocationFilterItem,
  IOffersTypesFilterItem,
  ITypeFilterItem,
} from '../../../types/listingTypes';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { getFilterModel } from '../../../redux/sagas/products/productsRedux';

const FilterSections: React.FC<IListingFilterSectionProps> = ({
  location,
  type,
  brands,
  offersTypes,
  setFilterModel,
}) => {
  const filterDataModel = useSelector(getFilterModel);
  const [selectedBrands, setSelectedBrands] = useState<IBrandsFilterItem[]>([]);
  const [selectedLocation, setSelectedLocation] =
    useState<ILocationFilterItem[]>();
  const [selectedType, setSelectedType] = useState<ITypeFilterItem[]>();
  const [selectedOffers, setSelectedOffers] =
    useState<IOffersTypesFilterItem[]>();
  console.log(`==BR: ${JSON.stringify(filterDataModel)}`);

  return <View></View>;
};

export default memo(FilterSections);
