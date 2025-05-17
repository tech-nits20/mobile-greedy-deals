import * as React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { styles } from './styles';
import { LISTING_SCREEN } from '../../routes/Routes';
import CustomCarousel from '../CustomCarousel';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Color } from '../../../GlobalStyles';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCategoriesAction,
  getAllCategories,
  getAllSubCategories,
  getCategoryProducts,
} from '../../redux/sagas/categories/categoryRedux';
import { useEffect } from 'react';
import {
  ICategory,
  ICategoryProducts,
} from '../../redux/sagas/categories/categoriesTypes';
import { CustomIcon, getIcons } from '../../helper/Icons';
import Loader from '../Loader';
import { setFilteredData } from '../../redux/sagas/products/productsRedux';
import { mockCarouselData } from '../../helper/Constants';

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
            {/* <CustomIcon name={cssClass} /> */}
            <Image
              source={getIcons(name.trim())}
              style={{
                width: 50,
                height: 50,
                borderRadius: 24,
              }}
            />
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
          <CustomCarousel items={mockCarouselData} />
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
                justifyContent: 'flex-start',
                paddingStart: 24,
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
