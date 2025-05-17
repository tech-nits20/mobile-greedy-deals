import * as React from 'react';
import { Image, View } from 'react-native';
import { styles } from './styles';
import TopAppBar from '../../components/TopAppBar';
import ListingSideRow from '../../components/ListingSideRow';
import FilterAndSort from '../../components/ListingFilter/FilterAndSort';
import ListingProductSection from '../../components/ListingProductSection';
import { Padding } from '../../../GlobalStyles';
import { FlatList } from 'react-native-gesture-handler';
import CustomCarousel from '../../components/CustomCarousel';
import {
  ParamListBase,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { CATEGORY_PRODUCTS_FILTER_SCREEN } from '../../routes/Routes';
import { ICategory } from '../../redux/sagas/categories/categoriesTypes';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchBrandsVendorAction,
  fetchFilteredProductAction,
  fetchOfferTypesByCategoryAction,
  getFilteredProducts,
  getFilterModel,
  setFilterModel,
} from '../../redux/sagas/products/productsRedux';
import {
  ExtraDealTypeEnum,
  IListingFilters,
  LocalOrBrandEnum,
} from '../../types/FilterTypes';
import { getCurrentLocation } from '../../redux/sagas/categories/categoryRedux';
import Loader from '../../components/Loader';
import { IOffersByCategoryId } from '../../api/services';
import { mockCarouselData } from '../../helper/Constants';
import { getOffersValues } from '../../helper/Utils';

const ListingScreen = () => {
  const route = useRoute();
  const params = route?.params as {
    subCategories: ICategory[];
    category: ICategory;
    selectedSubcategory: ICategory;
    viewAll?: boolean;
  };
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const dispatch = useDispatch();
  const location = useSelector(getCurrentLocation);
  const filterModel = useSelector(getFilterModel);
  const filteredResult = useSelector(getFilteredProducts);
  const [updateSubCategories, setUpdateSubCategories] = useState<ICategory[]>(
    []
  );
  const [activeCategory, setActiveCategory] = useState<ICategory>(
    params.selectedSubcategory
  );
  const isGDDeals = filteredResult?.data?.find((item) => item.offerType)
    ?.offerType?.isExtraGreedyDealsAvail;

  const onFilterSelection = () => {
    navigation.navigate(CATEGORY_PRODUCTS_FILTER_SCREEN);
  };

  const onItemSelected = (item: ICategory) => {
    refetchFilteredProducts(item.id);
    setActiveCategory(item);
  };

  useEffect(() => {
    const mappedData = [...params.subCategories];

    if (params?.viewAll) {
      const data: ICategory = {
        id: params.category.id,
        cssClass: params.category?.cssClass,
        name:
          params?.subCategories?.length === 0 ? params.category.name : 'All',
      };
      if (
        !updateSubCategories.includes({ name: 'All', id: params.category.id })
      ) {
        mappedData.unshift(data);
        setActiveCategory(data);
        setUpdateSubCategories(mappedData);
      }
    } else {
      setUpdateSubCategories([
        params.subCategories.find(
          (item) => item.id === params.selectedSubcategory.id
        ),
      ]);
    }
  }, [params.category]);

  const refetchFilteredProducts = (id: string) => {
    if (filterModel?.filters?.categoryId === id) return;
    const req = {
      filters: {
        lat: location.lat,
        lng: location.lng,
        range: { min: 0, max: 4 },
        categoryId: id,
        localOrBrand: LocalOrBrandEnum.NoFilter,
        extraDealType: ExtraDealTypeEnum.NoFilter,
      },
      sort: { order: 0 },
    };
    dispatch(fetchFilteredProductAction(req));
  };

  useEffect(() => {
    if (location.locationName && filteredResult?.data?.length === 0) {
      let req: IListingFilters;
      let filterRequest: IListingFilters;
      if (JSON.stringify(filterModel) === '{}') {
        req = {
          filters: {
            lat: location.lat,
            lng: location.lng,
            categoryId: activeCategory.id,
            localOrBrand: LocalOrBrandEnum.NoFilter,
            extraDealType: ExtraDealTypeEnum.NoFilter,
          },
          sort: { order: 0 },
        };
        filterRequest = {
          ...req,
          filters: { ...req.filters, range: { min: 0, max: 4 } },
        };
      } else {
        req = filterModel;
        filterRequest = {
          ...filterModel,
          filters: {
            ...filterModel.filters,
            offerTypeIds: getOffersValues(filterModel.filters.offerTypeIds),
          },
        };
      }
      dispatch(setFilterModel(req));
      dispatch(fetchFilteredProductAction(filterRequest));
    }
  }, [activeCategory, location]);

  useEffect(() => {
    if (location.locationName) {
      const req: IOffersByCategoryId = {
        categoryId: activeCategory?.id,
        lat: location.lat,
        lng: location.lng,
      };
      dispatch(fetchOfferTypesByCategoryAction(req));
      dispatch(fetchBrandsVendorAction(req));
    }
  }, [activeCategory, location]);

  return (
    <View style={styles.listingPage}>
      <Image
        style={styles.subtractIcon}
        resizeMode="cover"
        source={require('../../../assets/subtract1.png')}
      />
      <TopAppBar title={params.category.name ?? ''} />
      <View style={[styles.midRow, styles.midRowSpaceBlock]}>
        <View style={styles.midRowInner}>
          <View style={[styles.frameParent, styles.frameParentFlexBox]}>
            <View style={styles.frameGroup}>
              <ListingSideRow
                subCategories={updateSubCategories}
                selectedCat={activeCategory}
                onSelectedItem={onItemSelected}
              />
            </View>
            <View style={[styles.frameParent9, styles.frameParentFlexBox]}>
              <View style={[styles.component2Wrapper, styles.wrapperLayout]}>
                <View style={styles.component2}>
                  <CustomCarousel
                    carouselMargin={32}
                    items={mockCarouselData}
                  />
                </View>
              </View>
              <View style={styles.frameWrapper10}>
                <FilterAndSort
                  onFilterSelected={onFilterSelection}
                  isGdDeals={isGDDeals}
                />
              </View>
              <View style={styles.frameFlexBox}>
                {filteredResult.loading ? (
                  <View style={styles.loader}>
                    <Loader />
                  </View>
                ) : (
                  <FlatList
                    data={filteredResult.data}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    style={styles.flatlist}
                    columnWrapperStyle={{
                      justifyContent: 'space-between',
                      paddingBottom: Padding.p_xl,
                    }}
                    renderItem={({ item }) => {
                      return <ListingProductSection {...item} />;
                    }}
                  />
                )}
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ListingScreen;
