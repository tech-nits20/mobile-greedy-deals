import React, { FC, memo, useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import TopAppBar from '../TopAppBar';
import CTAButton from '../CTAButton';
import { Color, FontSize, Padding } from '../../../GlobalStyles';
import { ParamListBase, useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  IBrandsFilterItem,
  IListingFilterSectionProps,
  ILocationFilterItem,
  IOffersTypesFilterItem,
  ITypeFilterItem,
} from '../../types/listingTypes';
import { useDispatch, useSelector } from 'react-redux';
import {
  getFilteredProducts,
  getBrandsVendor,
  getOfferTypesByCategory,
  getFilterModel,
  setFilterModel,
  fetchFilteredProductAction,
} from '../../redux/sagas/products/productsRedux';
import FilterItem from '../ListingFilter/FilterItem';
import { IListingFilters } from '../../types/FilterTypes';
import Loader from '../Loader';
import { ScrollView } from 'react-native-gesture-handler';
import { getOffersValues } from '../../helper/Utils';

enum FilterType {
  LOCATION,
  TYPE,
  BRANDS,
  OFFERS,
}

const InitialFilters: IListingFilterSectionProps = {
  location: {
    sectionTitle: 'Location',
    id: FilterType.LOCATION,
    items: [
      { min: 2, max: 4 },
      { min: 5, max: 7 },
      { min: 8, max: 10 },
      { min: 11, max: 12 },
    ],
  },
  type: {
    sectionTitle: 'Type',
    id: FilterType.TYPE,
    items: [
      { name: 'Offers', type: 0 },
      { name: 'Coupons', type: 1 },
      { name: 'Cashback', type: 2 },
      { name: 'Deals', type: 3 },
    ],
  },
};

const CategoryProductsFilters: FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const filterResult = useSelector(getFilteredProducts);
  const filterOptionBrands = useSelector(getBrandsVendor);
  const filterOptionTypes = useSelector(getOfferTypesByCategory);
  const filterDataModel = useSelector(getFilterModel);

  const [filterOptions, setFilterOptions] =
    useState<IListingFilterSectionProps>(InitialFilters);
  const [selectedItem, setSelectedItem] = useState(FilterType.LOCATION);
  const [selectedBrands, setSelectedBrands] = useState<IBrandsFilterItem[]>([]);
  const [selectedLocation, setSelectedLocation] =
    useState<ILocationFilterItem[]>();
  const [selectedType, setSelectedType] = useState<ITypeFilterItem[]>();
  const [selectedOffers, setSelectedOffers] =
    useState<IOffersTypesFilterItem[]>();
  const [selectedFilterModel, setSelectedFilterModel] =
    useState<IListingFilters>(filterDataModel);

  const onFilterApplied = () => {
    navigation.goBack();
  };

  useEffect(() => {
    if (
      JSON.stringify(filterDataModel) !== JSON.stringify(selectedFilterModel)
    ) {
      dispatch(
        setFilterModel({
          ...filterDataModel,
          ...selectedFilterModel,
        })
      );
    }
  }, [selectedFilterModel]);

  const getRangeValues = (data: { min?: number; max?: number } | undefined) => {
    const range: { min: number; max: number } = {
      min: data?.min ?? 0,
      max: data?.max ?? 4,
    };

    return range;
  };

  // useEffect(() => {
  //   const req: IListingFilters = {
  //     ...filterDataModel,
  //     filters: {
  //       ...filterDataModel.filters,
  //       range: getRangeValues(filterDataModel.filters.range),
  //       offerTypeIds: getOffersValues(filterDataModel.filters.offerTypeIds),
  //     },
  //   };
  //   dispatch(fetchFilteredProductAction(req));
  // }, [filterDataModel]);

  useEffect(() => {
    if (filterOptionTypes.length > 0) {
      const offerTypes = filterOptionTypes.map((item) => ({
        name: item.name,
        id: item.id,
      }));

      setFilterOptions((prev) => ({
        ...prev,
        offersTypes: {
          sectionTitle: 'Offers and Discounts',
          id: FilterType.OFFERS,
          items: offerTypes,
        },
      }));
    }
  }, [filterOptionTypes]);

  useEffect(() => {
    if (filterOptionBrands.length > 0) {
      const brandsType = filterOptionBrands.map((item) => ({
        name: item.name,
        id: item.id,
      }));

      setFilterOptions((prev) => ({
        ...prev,
        brands: {
          sectionTitle: 'Brands',
          id: FilterType.BRANDS,
          items: brandsType,
        },
      }));
    }
  }, [filterOptionBrands]);

  const onClearFilters = () => {
    setSelectedBrands([]);
    setSelectedLocation([]);
    setSelectedType([]);
    setSelectedOffers([]);
    setTimeout(() => {
      const model: IListingFilters = {
        filters: {
          lat: filterDataModel.filters.lat,
          lng: filterDataModel.filters.lng,
          range: filterDataModel.filters.range,
          categoryId: filterDataModel.filters.categoryId,
        },
        sort: {
          order: filterDataModel.sort.order,
        },
      };
      dispatch(setFilterModel(model));
    }, 500);
  };

  const onChangeBrand = (value: IBrandsFilterItem) => {
    if (!selectedBrands?.find((val) => val.id === value.id)) {
      setSelectedBrands([...selectedBrands, value]);
    } else {
      setSelectedBrands(selectedBrands.filter((item) => item.id !== value.id));
    }
  };

  const onChangeLocation = (value: ILocationFilterItem) => {
    if (!selectedLocation?.find((item) => item.min === value.min)) {
      setSelectedLocation([...(selectedLocation ?? []), value]);
    } else {
      setSelectedLocation(
        selectedLocation?.filter((item) => item.min !== value.min)
      );
    }
  };

  const onChangeType = (value: ITypeFilterItem) => {
    if (!selectedType?.find((item) => item.type === value.type)) {
      setSelectedType([...(selectedType ?? []), value]);
    } else {
      setSelectedType(selectedType?.filter((item) => item.type !== value.type));
    }
  };

  const onChangeOffers = (value: IOffersTypesFilterItem) => {
    if (!selectedOffers?.find((item) => item.id === value.id)) {
      setSelectedOffers([...(selectedOffers ?? []), value]);
    } else {
      setSelectedOffers(selectedOffers?.filter((item) => item.id !== value.id));
    }
  };

  useEffect(() => {
    const max = selectedLocation?.sort((a, b) => b.max - a.max)[0]?.max;

    if (selectedLocation?.length === 0) {
      setSelectedFilterModel({
        ...filterDataModel,
        filters: { ...filterDataModel.filters, range: undefined },
      });
    } else {
      setSelectedFilterModel({
        ...filterDataModel,
        filters: { ...filterDataModel.filters, range: { min: 0, max } },
      });
    }
  }, [selectedLocation]);

  useEffect(() => {
    setSelectedFilterModel({
      ...filterDataModel,
      filters: {
        ...filterDataModel.filters,
        vendors: selectedBrands?.map((val) => val.id),
      },
    });
  }, [selectedBrands]);

  useEffect(() => {
    setSelectedFilterModel({
      ...filterDataModel,
      filters: {
        ...filterDataModel.filters,
        offerType: selectedType?.map((item) => item.type),
      },
    });
  }, [selectedType]);

  useEffect(() => {
    setSelectedFilterModel({
      ...filterDataModel,
      filters: {
        ...filterDataModel.filters,
        offerTypeIds: selectedOffers?.map((item) => item.id),
      },
    });
  }, [selectedOffers]);

  useEffect(() => {
    const prevBrands: IBrandsFilterItem[] = [];
    filterDataModel?.filters?.vendors?.map((res) => {
      const model: IBrandsFilterItem = {
        name:
          filterOptions.brands?.items?.find((item) => item.id === res)?.name ??
          '',
        id: res,
      };
      prevBrands.push(model);
    });
    setSelectedBrands(prevBrands);

    const prevTypes: ITypeFilterItem[] = [];
    filterDataModel?.filters?.offerType?.map((res) => {
      const typeModel: ITypeFilterItem = {
        name:
          filterOptions?.type?.items?.find((item) => item.type === res)?.name ??
          '',
        type: res,
      };
      prevTypes.push(typeModel);
    });
    setSelectedType(prevTypes);

    const prevOffer: IOffersTypesFilterItem[] = [];
    filterDataModel?.filters?.offerTypeIds?.map((res) => {
      const model: IOffersTypesFilterItem = {
        name:
          filterOptions?.offersTypes?.items?.find((item) => item.id === res)
            ?.name ?? '',
        id: res,
      };
      prevOffer.push(model);
    });
    setSelectedOffers(prevOffer);

    const prevLocation: ILocationFilterItem[] = [];
    const range = filterDataModel?.filters?.range;

    filterOptions?.location.items.map((item) => {
      if (item.min === range?.min || item.max === range?.max) {
        const model: ILocationFilterItem = {
          min: item.min,
          max: item.max,
        };
        prevLocation.push(model);
      }
    });
    setSelectedLocation(prevLocation);
  }, []);

  const RenderFilterItem: React.FC<{ title: string; id: number }> = ({
    title,
    id,
  }) => {
    return (
      <Pressable
        onPress={() => setSelectedItem(id)}
        style={({ pressed }) => [
          [
            styles.filterItem,
            {
              backgroundColor: pressed
                ? Color.colorLightHover
                : Color.colorWhite,
            },
            selectedItem === id && styles.selectedFilterItem,
          ],
        ]}
      >
        {selectedItem === id && <View style={styles.innerItem} />}
        <Text style={{ color: Color.colorBlack }}>{title}</Text>
      </Pressable>
    );
  };

  return (
    <>
      {/* {filterResult.loading && (
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            height: '100%',
            width: '100%',
          }}
        >
          <Loader />
        </View>
      )} */}
      <View style={styles.container}>
        <TopAppBar
          isShowSearch={false}
          title="Filters"
          isClearFilter
          onClearFilter={onClearFilters}
        />
        <View style={styles.midContainer}>
          <View style={styles.leftContainer}>
            {filterOptions?.location && (
              <RenderFilterItem
                title={filterOptions.location.sectionTitle}
                id={FilterType.LOCATION}
              />
            )}
            {filterOptions?.type && (
              <RenderFilterItem
                title={filterOptions.type.sectionTitle}
                id={FilterType.TYPE}
              />
            )}
            {filterOptions?.brands && (
              <RenderFilterItem
                title={filterOptions.brands.sectionTitle}
                id={FilterType.BRANDS}
              />
            )}
            {filterOptions?.offersTypes && (
              <RenderFilterItem
                title={filterOptions.offersTypes.sectionTitle}
                id={FilterType.OFFERS}
              />
            )}
          </View>
          <ScrollView style={styles.rightContainer}>
            {selectedItem === FilterType.LOCATION &&
              filterOptions.location.items.map((item) => (
                <FilterItem
                  key={item.min}
                  itemName={`upto ${item.max} Kms`}
                  onChange={() => onChangeLocation(item)}
                  isChecked={
                    !!selectedLocation?.find(
                      (locationItem) =>
                        locationItem.min === item.min &&
                        locationItem.max === item.max
                    )
                  }
                />
              ))}
            {selectedItem === FilterType.TYPE &&
              filterOptions.type.items.map((item) => (
                <FilterItem
                  key={item.type}
                  itemName={item.name}
                  isChecked={
                    !!selectedType?.find(
                      (typeItem) => typeItem.type === item.type
                    )
                  }
                  onChange={() => onChangeType(item)}
                />
              ))}
            {selectedItem === FilterType.BRANDS &&
              filterOptions.brands.items.map((item) => (
                <FilterItem
                  key={item.id}
                  itemName={item.name}
                  isChecked={
                    !!selectedBrands?.find((res) => res.id === item.id)
                  }
                  onChange={() => onChangeBrand(item)}
                />
              ))}
            {selectedItem === FilterType.OFFERS &&
              filterOptions.offersTypes.items.map((item) => (
                <FilterItem
                  key={item.id}
                  itemName={item.name ?? ''}
                  isChecked={
                    !!selectedOffers?.find((offer) => offer.id === item.id)
                  }
                  onChange={() => onChangeOffers(item)}
                />
              ))}
          </ScrollView>
        </View>
        <View style={styles.bottomBar}>
          <Text
            style={styles.resultText}
          >{`Result: ${filterResult.data?.length}`}</Text>
          <View style={styles.footerButton}>
            <CTAButton
              title="Cancel"
              onPress={onFilterApplied}
              viewStyle={{
                paddingHorizontal: Padding.p_base,
                paddingVertical: Padding.p_7xs,
              }}
              titleStyle={{ fontSize: FontSize.size_xs }}
            />
            <CTAButton
              title="Apply Filters"
              onPress={onFilterApplied}
              viewStyle={{
                paddingHorizontal: Padding.p_base,
                paddingVertical: Padding.p_7xs,
              }}
              titleStyle={{ fontSize: FontSize.size_xs }}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default memo(CategoryProductsFilters);
