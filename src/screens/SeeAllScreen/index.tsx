import React, { memo } from 'react';
import { View } from 'react-native';
import TopAppBar from '../../components/TopAppBar';
import { ParamListBase, useNavigation, useRoute } from '@react-navigation/core';
import {
  ICategory,
  IDiscountsOffersItem,
} from '../../redux/sagas/categories/categoriesTypes';
import { FlatList } from 'react-native-gesture-handler';
import { Padding } from '../../../GlobalStyles';
import CategorySectionItem from '../../components/CategorySectionItem';
import { LISTING_SCREEN, PRODUCT_DETAILS_SCREEN } from '../../routes/Routes';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { getCurrentLocation } from '../../redux/sagas/categories/categoryRedux';
import { IProductInfo } from '../../redux/sagas/products/productsTypes';

const SeeAllScreen = () => {
  const location = useSelector(getCurrentLocation);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const route = useRoute<{
    key: string;
    name: string;
    params: { items: IDiscountsOffersItem[] };
  }>();
  const items = route?.params?.items as IDiscountsOffersItem[];

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

  return (
    <View>
      <TopAppBar title={'See all deals'} />
      <FlatList
        data={items}
        keyExtractor={(item) => item.title}
        numColumns={2}
        style={{ marginBottom: 70, padding: Padding.p_xl }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          paddingBottom: Padding.p_xl,
        }}
        renderItem={({ item }) => renderDealsCard(item)}
      />
    </View>
  );
};

export default memo(SeeAllScreen);
