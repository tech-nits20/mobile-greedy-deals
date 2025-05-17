import React, { memo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import {
  ICategory,
  ICategoryProducts,
} from '../../redux/sagas/categories/categoriesTypes';
import { useSelector } from 'react-redux';
import {
  getAllCategoriesList,
  getAllSubCategories,
  getCategoryProducts,
} from '../../redux/sagas/categories/categoryRedux';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Color, Gap, Padding } from '../../../GlobalStyles';
import { ParamListBase, useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { LISTING_SCREEN } from '../../routes/Routes';

const SearchScreen = () => {
  const allCategoriesList = useSelector(getAllCategoriesList);
  const subCategories = useSelector(getAllSubCategories);
  const productsData = useSelector(getCategoryProducts);
  const [filteredResult, setFilteredResult] = useState<ICategory[]>([]);
  const [query, setQuery] = useState('');
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleChange = (text: string) => {
    setQuery(text);
    if (text.length > 0) {
      const filteredItems = allCategoriesList.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResult(filteredItems);
    } else {
      setFilteredResult([]);
    }
  };

  const onItemClicked = (item: ICategory) => {
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
    navigation.navigate(LISTING_SCREEN, {
      subCategories: [],
      category: item,
      viewAll: true,
      selectedSubcategory: item,
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        clearButtonMode="always"
        style={styles.input}
        onChangeText={handleChange}
        value={query}
        placeholder="Search for 'Offers'"
        placeholderTextColor={Color.colorGray400}
      />
      {filteredResult.length > 0 && (
        <View style={styles.suggestionContainer}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <View>
              {filteredResult.map((item) => {
                return (
                  <Pressable
                    onPress={() => onItemClicked(item)}
                    style={({ pressed }) => [
                      styles.searchItem,
                      {
                        backgroundColor: pressed
                          ? Color.colorLightHover
                          : Color.colorTransparent,
                      },
                    ]}
                    key={item.id}
                  >
                    <Text style={styles.text}>{item.name}</Text>
                  </Pressable>
                );
              })}
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default memo(SearchScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Padding.p_base,
  },
  input: {
    borderWidth: 1,
    borderColor: Color.colorDarkGray,
    padding: Padding.p_3xs,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: Color.colorWhiteSmoke,
    color: Color.colorDarkGray,
  },
  suggestionContainer: {
    flex: 1,
    padding: Padding.p_3xs,
    gap: Gap.gap_3xl,
  },
  searchItem: {
    padding: Padding.p_3xs,
  },
  text: {
    color: Color.colorDarkGray,
  },
});
