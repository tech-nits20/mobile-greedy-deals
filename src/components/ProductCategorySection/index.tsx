import React, { FC, memo, useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';
import ProductCategorySectionItem, {
  ProductCategoryItemType,
} from '../ProductCategorySectionItem';
import { ParamListBase, useNavigation } from '@react-navigation/core';
import { LISTING_SCREEN } from '../../routes/Routes';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {
  ICategory,
  ICategoryProducts,
  ISubCategory,
} from '../../redux/sagas/categories/categoriesTypes';
import Loader from '../Loader';
import { useDispatch } from 'react-redux';
import { refreshListingStateAction } from '../../redux/sagas/products/productsRedux';

export interface ProductCategorySectionProps {
  category: ICategory;
  subCategories: ISubCategory[];
  products: ICategoryProducts[];
}
const ProductCategorySection: FC<ProductCategorySectionProps> = ({
  category,
  subCategories,
  products,
}) => {
  const [productsSections, setProductsSection] = useState<ICategory[]>([]);
  const dispatch = useDispatch();

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const onItemPressed = (selectedCat: ICategory, viewAll?: boolean) => {
    dispatch(refreshListingStateAction());
    navigation.navigate(LISTING_SCREEN, {
      subCategories: productsSections,
      category,
      viewAll,
      selectedSubcategory: selectedCat,
    });
  };

  useEffect(() => {
    let filteredProducts: ICategory[] = [];
    let filteredSubCategories: ICategory[] = [];

    if (subCategories?.length > 0) {
      filteredSubCategories = subCategories?.find(
        (res) => res.categoryId === category.id
      )?.subCategories;
    }

    if (filteredSubCategories?.length > 0 && products?.length > 0) {
      const subProducts: ICategoryProducts[] = products.filter((res) =>
        filteredSubCategories.some((val) => res.categoryId === val.id)
      );
      subProducts.map((item) => filteredProducts.push(...item?.products));
    }

    setProductsSection([...filteredSubCategories, ...filteredProducts]);
  }, [category, subCategories, products]);

  return (
    <View style={styles.frameView}>
      <View style={styles.fashionParent}>
        <Text style={styles.fashion1Typo}>{category.name}</Text>
        <TouchableOpacity onPress={() => onItemPressed(category, true)}>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lineView} />
      <View style={styles.frameParent1}>
        <View style={styles.frameWrapper}></View>
        {productsSections?.length === 0 && (
          <View style={styles.loader}>
            <Loader />
          </View>
        )}
        <ScrollView horizontal nestedScrollEnabled>
          <View style={styles.womenFashionWrapper}>
            {productsSections?.length > 0 && (
              <FlatList
                data={productsSections}
                horizontal
                keyExtractor={(item) => item.id}
                nestedScrollEnabled
                scrollEnabled={productsSections.length < 4}
                keyboardShouldPersistTaps="handled"
                ItemSeparatorComponent={() => (
                  <View style={{ paddingEnd: 6 }} />
                )}
                contentContainerStyle={{
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  paddingHorizontal: 16,
                }}
                renderItem={({ item }) => (
                  <ProductCategorySectionItem
                    key={`${item.id}}`}
                    {...item}
                    onPress={() => onItemPressed(item)}
                  />
                )}
                getItemLayout={(data, index) => ({
                  length: 84,
                  offset: 84 * index,
                  index,
                })}
              />
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default memo(ProductCategorySection);
