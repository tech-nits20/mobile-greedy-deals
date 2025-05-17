import React, { memo, useEffect, useState } from 'react';
import { View } from 'react-native';
import TopAppBar from '../../components/TopAppBar';
import { ParamListBase, useNavigation, useRoute } from '@react-navigation/core';
import { IDiscountsOffersItem } from '../../redux/sagas/categories/categoriesTypes';
import { FlatList } from 'react-native-gesture-handler';
import { Padding } from '../../../GlobalStyles';
import CategorySectionItem from '../../components/CategorySectionItem';
import { PRODUCT_DETAILS_SCREEN } from '../../routes/Routes';
import { StackNavigationProp } from '@react-navigation/stack';
import { IProductInfo } from '../../redux/sagas/products/productsTypes';
import { HomeOfferChipType } from '../../components/HomeOfferChips';
import {
  ExtraDealTypeEnum,
  IListingFilters,
  LocalOrBrandEnum,
  SortTypeEnum,
} from '../../types/FilterTypes';
import axiosClient, { HeadersV2, MAX_RANGE } from '../../api/client';
import { useSelector } from 'react-redux';
import {
  getCurrentLocation,
  getEarlyDeals,
  getPremiumBrandsOffers,
} from '../../redux/sagas/categories/categoryRedux';
import { GET_PRODUCT_FILTERS } from '../../api/endpoints';
import Loader from '../../components/Loader';

let isFetched = false;
const SeeAllScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const route = useRoute<{
    key: string;
    name: string;
    params: { items: IDiscountsOffersItem[]; chipType: HomeOfferChipType };
  }>();
  const items = route?.params?.items as IDiscountsOffersItem[];
  const chipType = route?.params?.chipType as HomeOfferChipType;

  const location = useSelector(getCurrentLocation);
  const earlyDeals = useSelector(getEarlyDeals);
  const primeBrands = useSelector(getPremiumBrandsOffers);
  const [listItems, setListItems] = useState<IDiscountsOffersItem[]>(
    items ?? []
  );
  const onCardClicked = (res: IDiscountsOffersItem) => {
    const item: IProductInfo = {
      ...res,
    };
    navigation.navigate(PRODUCT_DETAILS_SCREEN, { product: item });
  };

  const renderDealsCard = (item: IDiscountsOffersItem) => {
    return (
      <CategorySectionItem
        key={`${item.id}`}
        bgImage={item.vendorLogo}
        offerCategories={item?.offerCategories}
        offerPrice={item.offerPrice}
        expiryDate={item?.expiryEndDate}
        offerType={item?.offerType}
        storeName={item?.stores?.[0]?.storeName}
        isSeeAll
        location={item?.stores?.[0]?.storeCity}
        onCTAClick={() => onCardClicked(item)}
      />
    );
  };

  const fetchOffers = (req: IListingFilters) => {
    axiosClient
      .post(GET_PRODUCT_FILTERS, req, {
        headers: HeadersV2,
      })
      .then((response) => {
        isFetched = true;
        setListItems(response as unknown as IDiscountsOffersItem[]);
      })
      .catch((error) => {
        console.error('Error fetching fetchOffers', error);
        isFetched = true;
        setListItems([]);
      });
  };

  useEffect(() => {
    console.log(`==>> chipType`, chipType);

    if (!chipType) {
      return;
    }
    switch (chipType) {
      case 'GD Offers':
        const requestPayload: IListingFilters = {
          filters: {
            lat: location.lat,
            lng: location.lng,
            range: {
              min: 0,
              max: MAX_RANGE,
            },
            extraDealType: ExtraDealTypeEnum.NoFilter,
            localOrBrand: LocalOrBrandEnum.NoFilter,
          },
          sort: {
            order: SortTypeEnum.ExtraGreedyDealsDiscount,
          },
        };
        fetchOffers(requestPayload);
        break;

      case 'Early Deals':
        setListItems(earlyDeals);
        isFetched = true;
        break;
      case 'Ending Soon':
        const request: IListingFilters = {
          filters: {
            lat: location.lat,
            lng: location.lng,
            range: {
              min: 0,
              max: MAX_RANGE,
            },
            extraDealType: ExtraDealTypeEnum.NoFilter,
            localOrBrand: LocalOrBrandEnum.NoFilter,
          },
          sort: {
            order: SortTypeEnum.ExpiringSoon,
          },
        };
        fetchOffers(request);
        break;
      case 'Branded offers':
        setListItems(primeBrands);
        isFetched = true;
      default:
        break;
    }
  }, [chipType]);

  return (
    <View>
      <TopAppBar title={chipType ? chipType : 'See all deals'} />
      {listItems?.length === 0 && !isFetched ? (
        <Loader />
      ) : (
        <FlatList
          data={listItems}
          keyExtractor={(item) => item.id}
          numColumns={2}
          style={{ marginBottom: 70, padding: Padding.p_xl }}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            paddingBottom: Padding.p_xl,
          }}
          renderItem={({ item }) => renderDealsCard(item)}
        />
      )}
    </View>
  );
};

export default memo(SeeAllScreen);
