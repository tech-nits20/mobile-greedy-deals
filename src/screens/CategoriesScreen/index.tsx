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

const mockCategoryData: ProductCategorySectionProps[] = [
  {
    sectionTitle: 'Fashion',
    items: [
      {
        title: 'Women Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Men Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Kids Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Summer Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Women Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
    ],
  },
  {
    sectionTitle: 'Hotels &  Dining',
    items: [
      {
        title: 'Women Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Men Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Kids Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Summer Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Women Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
    ],
  },
  {
    sectionTitle: 'Hospital & Diagnosis',
    items: [
      {
        title: 'Women Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Men Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Kids Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Summer Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Women Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
    ],
  },
  {
    sectionTitle: 'Electronics',
    items: [
      {
        title: 'Women Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Men Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Kids Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Summer Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Women Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
    ],
  },
  {
    sectionTitle: 'Beauty & Spa',
    items: [
      {
        title: 'Women Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Men Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Kids Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Summer Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Women Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
    ],
  },
  {
    sectionTitle: 'Golds',
    items: [
      {
        title: 'Women Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Men Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Kids Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Summer Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Women Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
    ],
  },
  {
    sectionTitle: 'Real State',
    items: [
      {
        title: 'Women Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Men Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Kids Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Summer Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Women Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
    ],
  },
  {
    sectionTitle: 'Automobile',
    items: [
      {
        title: 'Women Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Men Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Kids Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Summer Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Women Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
    ],
  },
  {
    sectionTitle: 'Entertainment',
    items: [
      {
        title: 'Women Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Men Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Kids Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Summer Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Women Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
    ],
  },
  {
    sectionTitle: 'Tour & Travels',
    items: [
      {
        title: 'Women Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Men Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Kids Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Summer Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
      {
        title: 'Women Fashion',
        imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
        onPress: () => {},
      },
    ],
  },
];
const CategoriesScreen = ({ route }) => {
  // const [categoryData, setCategoryData] = useState(undefined);
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

  // useEffect(() => {
  //   if (apiCategory) {
  //     //     // @ts-ignore
  //     const data = apiCategory?.map((item: { name: string }) => {
  //       const itemData: ProductCategorySectionProps = {
  //         sectionTitle: item.name,
  //         items: mockCategoryData[0].items,
  //       };
  //       return itemData;
  //     });
  //     setCategoryData(data);
  //   }
  // }, [apiCategory]);

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
            <CustomCarousel isFullWidth />
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
