import * as React from 'react';
import { Image, View } from 'react-native';
import { styles } from './styles';
import TopAppBar from '../../components/TopAppBar';
import ListingSideRow from '../../components/ListingSideRow';
import FilterAndSort from '../../components/FilterAndSort';
import ListingProductSection, {
  ListingProductSectionProps,
} from '../../components/ListingProductSection';
import { Color, Padding } from '../../../GlobalStyles';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import CustomCarousel from '../../components/CustomCarousel';
import {
  ParamListBase,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { CATEGORY_PRODUCTS_FILTER_SCREEN } from '../../routes/Routes';
import { ICategory } from '../../redux/sagas/categories/categoriesTypes';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchFilteredProductAction,
  getFilteredProducts,
} from '../../redux/sagas/products/productsRedux';
import { IListingFilters } from '../../types/FilterTypes';
import { getCurrentLocation } from '../../redux/sagas/categories/categoryRedux';
import Loader from '../../components/Loader';

const mockListingSection: ListingProductSectionProps[] = [
  {
    title: 'Sree Venkateswara sarees',
    imgSrc: require('../../../assets/image-1873881918.png'),
    offerTitle: 'Buy 1',
    offerSubTitle: 'Get 2',
    offerType: 'Free',
    bgColor: Color.colorGainsboro_100,
  },
  {
    title: 'Sree Venkateswara sarees1',
    imgSrc: require('../../../assets/image-1873881918.png'),
    offerTitle: 'Buy 1',
    offerSubTitle: 'Get 2',
    offerType: 'Free',
    bgColor: Color.colorGainsboro_100,
  },
  {
    title: 'Sree Venkateswara sarees2',
    imgSrc: require('../../../assets/image-1873881918.png'),
    offerTitle: 'Buy 1',
    offerSubTitle: 'Get 2',
    offerType: 'Free',
    bgColor: Color.colorGainsboro_100,
  },
  {
    title: 'Sree Venkateswara sarees3',
    imgSrc: require('../../../assets/image-1873881918.png'),
    offerTitle: 'Buy 1',
    offerSubTitle: 'Get 2',
    offerType: 'Free',
    bgColor: Color.colorGainsboro_100,
  },
  {
    title: 'Summer Fashion',
    imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
    offerTitle: 'upto',
    offerSubTitle: '20%',
    offerType: 'Off',
  },
  {
    title: 'Summer Fashion1',
    imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
    offerTitle: 'upto',
    offerSubTitle: '20%',
    offerType: 'Off',
  },
  {
    title: 'Summer Fashion2',
    imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
    offerTitle: 'upto',
    offerSubTitle: '20%',
    offerType: 'Off',
  },
  {
    title: 'Summer Fashion3',
    imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
    offerTitle: 'upto',
    offerSubTitle: '20%',
    offerType: 'Off',
  },
  {
    title: 'Summer Fashion5',
    imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
    offerTitle: 'flat',
    offerSubTitle: '20%',
    offerType: 'Off',
  },
  {
    title: 'Summer Fashion6',
    imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
    offerTitle: 'flat',
    offerSubTitle: '20%',
    offerType: 'Off',
  },
  {
    title: 'Summer Fashion7',
    imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
    offerTitle: 'flat',
    offerSubTitle: '20%',
    offerType: 'Off',
  },
  {
    title: 'Summer Fashion8',
    imgSrc: require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png'),
    offerTitle: 'flat',
    offerSubTitle: '20%',
    offerType: 'Off',
  },
];
const ListingScreen = () => {
  const route = useRoute();
  const params = route?.params as {
    subCategories: ICategory[];
    category: ICategory;
    selectedSubcategory: ICategory;
    viewAll?: boolean;
  };
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const dispatch = useDispatch();
  const location = useSelector(getCurrentLocation);
  const filteredResult = useSelector(getFilteredProducts);
  const [updateSubCategories, setUpdateSubCategories] = useState<ICategory[]>(
    []
  );
  const [activeCategory, setActiveCategory] = useState<ICategory>(
    params.selectedSubcategory
  );

  const onFilterSelection = () => {
    navigation.navigate(CATEGORY_PRODUCTS_FILTER_SCREEN);
  };

  const onItemSelected = (item: ICategory) => {
    setActiveCategory(item);
  };

  useEffect(() => {
    const mappedData = [...params.subCategories];

    if (params?.viewAll) {
      const data: ICategory = {
        id: params.category.id,
        cssClass: params.category?.cssClass,
        name: 'All',
      };
      if (
        !updateSubCategories.includes({ name: 'All', id: params.category.id })
      ) {
        mappedData.unshift(data);
        setActiveCategory(data);
        setUpdateSubCategories(mappedData);
      }
    } else {
      setUpdateSubCategories([
        params.subCategories.find(
          (item) => item.id === params.selectedSubcategory.id
        ),
      ]);
    }
  }, [params.category]);

  useEffect(() => {
    if (filteredResult.data.length === 0 && !filteredResult.error) {
      const req: IListingFilters = {
        filters: {
          // lat: location.lat,
          // lng: location.lng,
          categoryId: activeCategory.id,
        },
      };
      // dispatch(fetchFilteredProductAction(req));
    }
  }, [filteredResult.data, filteredResult.error]);

  useEffect(() => {
    const req: IListingFilters = {
      filters: {
        // lat: location.lat,
        // lng: location.lng,
        categoryId: activeCategory.id,
      },
    };
    dispatch(fetchFilteredProductAction(req));
  }, [activeCategory]);

  return (
    <View style={styles.listingPage}>
      <Image
        style={styles.subtractIcon}
        resizeMode="cover"
        source={require('../../../assets/subtract1.png')}
      />
      <TopAppBar title={params.category.name ?? ''} />
      <View style={[styles.midRow, styles.midRowSpaceBlock]}>
        <View style={styles.midRowInner}>
          <View style={[styles.frameParent, styles.frameParentFlexBox]}>
            <View style={styles.frameGroup}>
              <ListingSideRow
                subCategories={updateSubCategories}
                selectedCat={activeCategory}
                onSelectedItem={onItemSelected}
              />
            </View>
            <View style={[styles.frameParent9, styles.frameParentFlexBox]}>
              <View style={[styles.component2Wrapper, styles.wrapperLayout]}>
                <View style={styles.component2}>
                  <CustomCarousel />
                </View>
              </View>
              <View style={styles.frameWrapper10}>
                <FilterAndSort onFilterSelected={onFilterSelection} />
              </View>
              <View style={styles.frameFlexBox}>
                {filteredResult.loading ? (
                  <View style={styles.loader}>
                    <Loader />
                  </View>
                ) : (
                  <FlatList
                    data={filteredResult.data}
                    keyExtractor={(item) => item.title}
                    numColumns={2}
                    style={styles.flatlist}
                    columnWrapperStyle={{
                      justifyContent: 'space-between',
                      paddingBottom: Padding.p_xl,
                    }}
                    renderItem={({ item }) => {
                      return <ListingProductSection {...item} />;
                    }}
                  />
                )}
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ListingScreen;
