import React, { FC, memo, useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';
import ProductCategorySectionItem, {
  ProductCategoryItemType,
} from '../ProductCategorySectionItem';
import { ParamListBase, useNavigation } from '@react-navigation/core';
import { LISTING_SCREEN } from '../../routes/Routes';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import {
  ICategory,
  ICategoryProducts,
  ISubCategory,
} from '../../redux/sagas/categories/categoriesTypes';
import Loader from '../Loader';

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

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const onItemPressed = (selectedCat: ICategory, viewAll?: boolean) => {
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
        <Pressable onPress={() => onItemPressed(category, true)}>
          <Text style={styles.viewAll}>View all</Text>
        </Pressable>
      </View>
      <View style={styles.lineView} />
      <View style={styles.frameParent1}>
        <View style={styles.frameWrapper}></View>
        {productsSections?.length === 0 && (
          <View style={styles.loader}>
            <Loader />
          </View>
        )}
        <ScrollView horizontal>
          <View style={styles.womenFashionWrapper}>
            {productsSections?.length > 0 &&
              productsSections.map((item, index) => {
                return (
                  <ProductCategorySectionItem
                    key={`${item.id}${index}`}
                    {...item}
                    onPress={() => onItemPressed(item)}
                  />
                );
              })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default memo(ProductCategorySection);
