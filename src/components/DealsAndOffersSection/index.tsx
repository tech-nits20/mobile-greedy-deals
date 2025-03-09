import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import {
  IDiscountsOffersItem,
  ICategory,
} from '../../redux/sagas/categories/categoriesTypes';
import { Padding } from '../../../GlobalStyles';
import CategorySectionItem from '../CategorySectionItem';
import { ParamListBase, useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { LISTING_SCREEN } from '../../routes/Routes';

export interface DealsAndOffersSectionType {
  sectionTitle: string;
  items: IDiscountsOffersItem[];
  onSeeAllPressed: () => void;
}

const DealsAndOffersSection: FC<DealsAndOffersSectionType> = ({
  sectionTitle,
  items,
  onSeeAllPressed,
}) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const onCardPressed = (res: IDiscountsOffersItem) => {
    const item: ICategory = {
      name: res.offerCategories[res.offerCategories.length - 1]?.name,
      id: res.id,
    };
    navigation.navigate(LISTING_SCREEN, {
      subCategories: [item],
      category: item,
      selectedSubcategory: item,
    });
  };

  const renderDealsCard = (item: IDiscountsOffersItem) => {
    return (
      <CategorySectionItem
        key={`${item.id}`}
        bgImage={item.offerImages}
        offerCategories={item?.offerCategories}
        offerPrice={item.offerPrice}
        expiryDate={item?.expiryEndDate}
        offerType={item?.offerType}
        storeName={item?.storeOffers?.[0]?.name}
        onCTAClick={() => onCardPressed(item)}
      />
    );
  };

  return (
    <View style={[styles.sectionParent, styles.parentFlexBox1]}>
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
    </View>
  );
};

export default DealsAndOffersSection;
