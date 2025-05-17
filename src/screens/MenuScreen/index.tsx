import React, { FC, memo, useEffect, useState } from 'react';
import { ActivityIndicator, Image, Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import TopAppBar from '../../components/TopAppBar';
import { ScrollView } from 'react-native-gesture-handler';
import { ParamListBase, useNavigation, useRoute } from '@react-navigation/core';
import { LISTING_SCREEN, MENU_SCREEN } from '../../routes/Routes';
import { StackNavigationProp } from '@react-navigation/stack';
import { Color } from '../../../GlobalStyles';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCategoriesAction,
  getAllCategories,
  getAllSubCategories,
  getCategoryProducts,
  getCategoryStatus,
} from '../../redux/sagas/categories/categoryRedux';
import Loader from '../../components/Loader';
import {
  ICategory,
  ICategoryProducts,
} from '../../redux/sagas/categories/categoriesTypes';
import { setFilteredData } from '../../redux/sagas/products/productsRedux';
import { getIcons } from '../../helper/Icons';

const MenuScreenItem = ({ item, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.menuItemParent}>
      {({ pressed }) => (
        <View
          style={[styles.itemContainer, pressed && styles.itemContainerHover]}
        >
          <Text numberOfLines={1} style={styles.menuItemTitle}>
            {item.name}
          </Text>
          <Image
            source={getIcons(item.name.trim())}
            style={{ height: 80, width: 80, borderRadius: 12 }}
          />
        </View>
      )}
    </Pressable>
  );
};
const MenuScreen: FC = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const categoriesData = useSelector(getAllCategories);
  const categoryStatus = useSelector(getCategoryStatus);
  const subCategories = useSelector(getAllSubCategories);
  const productsData = useSelector(getCategoryProducts);
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  useEffect(() => {
    if (categoriesData.length === 0 && !categoryStatus.categoryLoading) {
      dispatch(fetchCategoriesAction());
    }
  }, []);

  const onItemPressed = (item: ICategory) => {
    let filteredProducts: ICategory[] = [];
    let filteredSubCategories: ICategory[] = [];

    if (subCategories?.length > 0) {
      filteredSubCategories = subCategories?.find(
        (res) => res.categoryId === item.id
      )?.subCategories;
    }

    if (filteredSubCategories?.length > 0 && productsData?.length > 0) {
      const subProducts: ICategoryProducts[] = productsData.filter((res) =>
        filteredSubCategories.some((val) => res.categoryId === val.id)
      );
      subProducts.map((item) => filteredProducts.push(...item?.products));
    }
    const productSections = [...filteredSubCategories, ...filteredProducts];
    dispatch(setFilteredData({ data: [], error: undefined, loading: false }));
    navigation.navigate(LISTING_SCREEN, {
      subCategories: productSections,
      category: item,
      viewAll: true,
      selectedSubcategory: item,
    });
  };

  return (
    <View style={styles.container}>
      <TopAppBar title={route?.name === MENU_SCREEN && 'Menu'} />
      {categoryStatus.categoryLoading ? (
        <Loader />
      ) : (
        <ScrollView>
          <View style={styles.menuGrid}>
            {categoriesData?.map((item) => {
              return (
                <MenuScreenItem
                  key={item.id}
                  item={item}
                  onPress={() => onItemPressed(item)}
                />
              );
            })}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default memo(MenuScreen);
