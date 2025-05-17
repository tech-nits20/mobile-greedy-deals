import React, { FC, memo, useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';
import { Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchFilteredProductAction,
  getFilterModel,
  getOfferTypesByCategory,
  setFilterModel,
} from '../../../redux/sagas/products/productsRedux';
import { IListingFilters, SortTypeEnum } from '../../../types/FilterTypes';
import { getOffersValues } from '../../../helper/Utils';

interface SortOption {
  label: string;
  value: number;
}

const sortOptions: SortOption[] = [
  { label: 'Popularity', value: SortTypeEnum.Popularity },
  { label: 'Newest First', value: SortTypeEnum.NewestFirst },
  {
    label: 'GD Extra Discount',
    value: SortTypeEnum.ExtraGreedyDealsDiscount,
  },
  { label: 'Expiring Soon', value: SortTypeEnum.ExpiringSoon },
];

enum TabType {
  POPULAR,
  NEWEST,
  GD_DEALS,
}
export interface FilterAndSortProps {
  onFilterSelected?: () => void;
  isGdDeals: boolean;
}
const FilterAndSort: FC<FilterAndSortProps> = ({
  onFilterSelected,
  isGdDeals,
}) => {
  const dispatch = useDispatch();
  const filterDataModel = useSelector(getFilterModel);
  const [activeSort, setActiveSort] = useState<number>(
    filterDataModel?.sort?.order ?? 0
  );

  const [mappedSortOption, setMappedSortOption] = useState<SortOption[]>([]);

  useEffect(() => {
    console.log(`==GD DEAL: ${isGdDeals}`);

    // if (isGdDeals !== undefined && isGdDeals === true) {
    //   setMappedSortOption([
    //     ...sortOptions,
    //     { label: 'GD Extra Discount', value: 2 },
    //   ]);
    // } else {
    //   setActiveSort(activeSort === 2 ? 0 : activeSort);
    //   setMappedSortOption(sortOptions);
    // }
    setMappedSortOption(sortOptions);
  }, [isGdDeals]);

  const onFilterPressed = (value: number) => {
    setActiveSort(value);
  };

  useEffect(() => {
    dispatch(
      setFilterModel({ ...filterDataModel, sort: { order: activeSort } })
    );
  }, [activeSort]);

  const getRangeValues = (data: { min?: number; max?: number } | undefined) => {
    const range: { min: number; max: number } = {
      min: data?.min ?? 0,
      max: data?.max ?? 4,
    };

    return range;
  };

  useEffect(() => {
    const req: IListingFilters = {
      ...filterDataModel,
      filters: {
        ...filterDataModel.filters,
        range: getRangeValues(filterDataModel?.filters?.range),
        offerTypeIds: getOffersValues(filterDataModel?.filters?.offerTypeIds),
      },
    };
    dispatch(fetchFilteredProductAction(req));
  }, [filterDataModel]);

  return (
    <ScrollView horizontal>
      <View style={styles.frameWrapper10}>
        <View style={[styles.frameParent10, styles.frameParentFlexBox]}>
          <Pressable
            style={[styles.filterParent, styles.sortByWrapperLayout]}
            onPress={() => {
              onFilterSelected();
            }}
          >
            <Image
              style={styles.filterIcon}
              resizeMode="cover"
              source={require('../../../../assets/filter_default.png')}
            />
            <Text style={[styles.filter, styles.filterTypo]}>Filter</Text>
          </Pressable>
          {mappedSortOption.map((item) => {
            return (
              <Pressable
                key={item.value}
                style={[
                  styles.sortByWrapper,
                  styles.sortByWrapperLayout,
                  activeSort === item.value && styles.sortWrapperSelected,
                ]}
                onPress={() => onFilterPressed(item.value)}
              >
                <Text
                  style={[
                    styles.sortBy,
                    styles.filterTypo,
                    activeSort === item.value && styles.sortText,
                  ]}
                >
                  {item.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default memo(FilterAndSort);
