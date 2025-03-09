import * as React from 'react';
import {
  Image,
  View,
  Text,
  Pressable,
  ImageBackground,
  ImageSourcePropType,
  ActivityIndicator,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { styles } from './styles';
import { LISTING_SCREEN } from '../../routes/Routes';
import CustomCarousel from '../CustomCarousel';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { Color, Padding } from '../../../GlobalStyles';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCategoriesAction,
  getAllCategories,
  getAllSubCategories,
  getCategoryProducts,
} from '../../redux/sagas/categories/categoryRedux';
import { useEffect, useState } from 'react';
import {
  ICategory,
  ICategoryProducts,
} from '../../redux/sagas/categories/categoriesTypes';
import { CustomIcon } from '../../helper/Icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Loader from '../Loader';
import { setFilteredData } from '../../redux/sagas/products/productsRedux';
const mockSectionData = [
  {
    title: 'clothes',
    src: require('../../../assets/mobile-icons.png'),
  },
  {
    title: 'Restaurants',
    src: require('../../../assets/mobile-icons1.png'),
  },
  {
    title: 'Hospital',
    src: require('../../../assets/mobile-icons2.png'),
  },
  {
    title: 'Hotel',
    src: require('../../../assets/mobile-icons3.png'),
  },
  {
    title: 'Real State',
    src: require('../../../assets/mobile-icons4.png'),
  },
  {
    title: 'Entertainment',
    src: require('../../../assets/mobile-icons5.png'),
  },
  {
    title: 'Automobiles',
    src: require('../../../assets/mobile-icons6.png'),
  },
  {
    title: 'Gold',
    src: require('../../../assets/mobile-icons7.png'),
  },
  {
    title: 'Food',
    src: require('../../../assets/mobile-icons8.png'),
  },
  {
    title: 'Diagnostics',
    src: require('../../../assets/mobile-icons9.png'),
  },
];
export interface HomeSectionItemProps extends ICategory {
  onPress?: () => void;
}
const HomeSectionItem: React.FC<HomeSectionItemProps> = ({
  onPress,
  id,
  name,
  cssClass,
}) => {
  return (
    <TouchableOpacity style={styles.frameGroup} onPress={onPress}>
      <View style={styles.frameContainer}>
        <View style={styles.mobileIconsWrapper}>
          <View style={styles.mobileIcons}>
            <CustomIcon name={cssClass} />
          </View>
        </View>
        <View style={styles.nameFlexBox}>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const HomeSections = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const categoriesData = useSelector(getAllCategories);
  const subCategories = useSelector(getAllSubCategories);
  const productsData = useSelector(getCategoryProducts);

  useEffect(() => {
    if (categoriesData.length === 0) {
      dispatch(fetchCategoriesAction());
    }
  }, [categoriesData]);

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
    <ImageBackground
      style={styles.subtractIcon}
      resizeMode="cover"
      source={require('../../../assets/subtract.png')}
    >
      <View style={styles.subtractParent}>
        <View style={styles.frameParent}>
          <CustomCarousel />
        </View>
        <View style={styles.frameWrapper}>
          {categoriesData.length === 0 ? (
            <Loader color={Color.colorWhite} />
          ) : (
            <FlatList
              data={categoriesData}
              horizontal
              contentContainerStyle={{
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'baseline',
              }}
              renderItem={({ item, index }) => {
                return (
                  <HomeSectionItem
                    key={index}
                    {...item}
                    onPress={() => onItemPressed(item)}
                  />
                );
              }}
            />
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeSections;
