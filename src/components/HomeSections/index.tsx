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
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Color, Padding } from '../../../GlobalStyles';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCategoriesAction,
  getAllCategories,
} from '../../redux/sagas/categories/categoryRedux';
import { useEffect } from 'react';
import { ICategory } from '../../redux/sagas/categories/categoriesTypes';
import { CustomIcon } from '../../helper/Icons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Loader from '../Loader';
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
    <Pressable style={styles.frameGroup} onPress={onPress}>
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
    </Pressable>
  );
};

const HomeSections = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const categoriesData = useSelector(getAllCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (categoriesData.length === 0) {
      dispatch(fetchCategoriesAction());
    }
  }, [categoriesData]);

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
                    onPress={() => navigation.navigate(LISTING_SCREEN)}
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
