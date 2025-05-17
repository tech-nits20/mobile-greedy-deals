import * as React from 'react';
import { Image, View, Text, ActivityIndicator } from 'react-native';
import TopAppBar from '../../components/TopAppBar';
import { styles } from './styles';
import ProductCategorySection, {
  ProductCategorySectionProps,
} from '../../components/ProductCategorySection';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import CustomCarousel from '../../components/CustomCarousel';
import { CATEGORIES_SCREEN } from '../../routes/Routes';
import { memo, useEffect, useState } from 'react';
import { Color } from '../../../GlobalStyles';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCategoriesAction,
  getAllCategories,
  getAllSubCategories,
  getCategoryProducts,
} from '../../redux/sagas/categories/categoryRedux';
import Loader from '../../components/Loader';
import { mockCarouselData } from '../../helper/Constants';

const CategoriesScreen = ({ route }) => {
  const dispatch = useDispatch();
  const categoryData = useSelector(getAllCategories);
  const subCategories = useSelector(getAllSubCategories);
  const productsData = useSelector(getCategoryProducts);

  const screenTitle = route?.name === CATEGORIES_SCREEN ? 'Categories' : '';

  useEffect(() => {
    if (categoryData.length === 0) {
      dispatch(fetchCategoriesAction());
    }
  }, []);

  return (
    <View style={[styles.categories, styles.categoriesLayout]}>
      <Image
        style={styles.subtractIcon}
        resizeMode="cover"
        source={require('../../../assets/subtract2.png')}
      />
      <View style={styles.frameParent}>
        <TopAppBar title={screenTitle} />
        <ScrollView horizontal={false}>
          <View style={styles.frameGroup}>
            <CustomCarousel isFullWidth items={mockCarouselData} />
          </View>
          <View style={styles.midRow}>
            <View style={styles.categoriesPageParent}>
              <Text style={styles.categoriesPage}>Categories Page</Text>
              <Text
                style={[styles.loremIpsumIsSimply, styles.womenFashionTypo]}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
              </Text>
            </View>
            {categoryData.length === 0 ? (
              <Loader />
            ) : (
              <View style={styles.frameContainer}>
                <FlatList
                  data={categoryData}
                  keyExtractor={(item) => item.id}
                  nestedScrollEnabled
                  contentContainerStyle={{
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                  }}
                  renderItem={(item) => {
                    return (
                      <View style={styles.sectionContainer}>
                        <ProductCategorySection
                          key={item.index}
                          category={item?.item}
                          subCategories={subCategories}
                          products={productsData}
                        />
                      </View>
                    );
                  }}
                />
              </View>
            )}
          </View>
        </ScrollView>
      </View>
      <View style={styles.categoriesChild} />
    </View>
  );
};

export default memo(CategoriesScreen);
