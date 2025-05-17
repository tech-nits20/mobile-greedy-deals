import React, { FC, memo } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { IDiscountsOffersItem } from '../../redux/sagas/categories/categoriesTypes';
import { Padding } from '../../../GlobalStyles';
import CategorySectionItem from '../CategorySectionItem';
import { ParamListBase, useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { PRODUCT_DETAILS_SCREEN } from '../../routes/Routes';
import { IProductInfo } from '../../redux/sagas/products/productsTypes';
import CustomSkeleton from '../CustomSkeleton';
import { StyleSheet } from 'react-native';

export interface DealsAndOffersSectionType {
  sectionTitle: string;
  items: IDiscountsOffersItem[];
  location: string;
  loading?: boolean;
  onSeeAllPressed: () => void;
}

const SkeletonList = () => {
  return (
    <View style={styles.container}>
      {[...Array(3)].map((_, index) => (
        <View key={index} style={styles.item}>
          {/* <CustomSkeleton width={60} height={60} style={styles.avatar} /> */}
          <View>
            <CustomSkeleton width={110} height={100} style={styles.line} />
            <CustomSkeleton width={80} height={20} style={undefined} />
          </View>
        </View>
      ))}
    </View>
  );
};

const DealsAndOffersSection: FC<DealsAndOffersSectionType> = ({
  sectionTitle,
  items,
  location,
  loading,
  onSeeAllPressed,
}) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const onCardPressed = (res: IDiscountsOffersItem) => {
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
        location={item?.stores?.[0]?.storeCity}
        onCTAClick={() => onCardPressed(item)}
      />
    );
  };

  return (
    <View style={[styles.sectionParent, styles.parentFlexBox1]}>
      {loading ? (
        <View style={{}}>
          <SkeletonList />
        </View>
      ) : (
        <>
          <View style={styles.headerWrapper}>
            <Text style={[styles.sectionContainer, styles.sectionTitle]}>
              {sectionTitle}
            </Text>
            <TouchableOpacity onPress={onSeeAllPressed}>
              <Text style={styles.seeAllDeals}>{'See all Deals'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.frameChild} />
          <FlatList
            data={items}
            renderItem={({ item }) => renderDealsCard(item)}
            horizontal
            nestedScrollEnabled
            ItemSeparatorComponent={() => (
              <View style={{ paddingEnd: Padding.p_base }} />
            )}
          />
        </>
      )}
    </View>
  );
};

export default memo(DealsAndOffersSection);
