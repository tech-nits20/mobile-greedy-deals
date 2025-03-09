import React, { memo, useEffect, useState } from 'react';
import {
  View,
  Text,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import PrimeBrandItem from '../../components/PrimeBrandItem';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Color, Padding } from '../../../GlobalStyles';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPremiumBrandsOffersAction,
  getCurrentLocation,
  getPremiumBrandsOffers,
  getPremiumBrandsStatus,
} from '../../redux/sagas/categories/categoryRedux';
import {
  ICategory,
  IDiscountsOffersItem,
  ILatLongType,
} from '../../redux/sagas/categories/categoriesTypes';
import Loader from '../../components/Loader';
import { getOfferType } from '../../helper/Utils';
import { OfferTypeEnum } from '../../types/listingTypes';
import { ParamListBase, useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { LISTING_SCREEN, SEE_ALL_DEALS_SCREEN } from '../../routes/Routes';

interface PrimeBrandItemProps {
  title: string;
  subTitle: string;
  imgSrc: ImageSourcePropType;
  isBogo?: boolean;
  bgColor?: string;
}
const mockPrimeData: PrimeBrandItemProps[] = [
  {
    title: '90% Off',
    subTitle: 'All type of Shoes',
    imgSrc: require('../../../assets/adidas-logosvg-1.png'),
    isBogo: false,
  },
  {
    title: 'Buy 1 Get 1',
    subTitle: 'Baby sopa & shampoo',
    imgSrc: require('../../../assets/0-uwlrjr-aq9ti0pc-1.png'),
    isBogo: false,
    bgColor: 'rgba(129, 195, 65, 0.1)',
  },
  {
    title: '30% Cashback',
    subTitle: 'All type of Shoes',
    imgSrc: require('../../../assets/myntra1200x900-1.png'),
    isBogo: false,
    bgColor: 'rgba(255, 0, 151, 0.1)',
  },
];
const PrimeBrands = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const premiumBrandsOffers = useSelector(getPremiumBrandsOffers);
  const premiumBrandsStatus = useSelector(getPremiumBrandsStatus);
  const location = useSelector(getCurrentLocation);
  const [heights, setHeights] = useState({});

  const handleLayout = (
    event: { nativeEvent: { layout: { height: any } } },
    id: any
  ) => {
    const { height } = event.nativeEvent.layout;
    setHeights((prev) => ({ ...prev, [id]: height }));
  };

  useEffect(() => {
    if (premiumBrandsOffers.length === 0) {
      const req: ILatLongType = {
        lat: location.lat,
        lng: location.lng,
      };
      dispatch(fetchPremiumBrandsOffersAction(req));
    }
  }, [premiumBrandsOffers]);

  const onSeeAllDealsHandler = () => {
    navigation.navigate(SEE_ALL_DEALS_SCREEN, { items: premiumBrandsOffers });
  };

  const onCardPressed = (res: IDiscountsOffersItem) => {
    const item: ICategory = {
      name: res.offerCategories[res.offerCategories.length - 1]?.name,
      id: res.id,
    };
    navigation.navigate(LISTING_SCREEN, {
      subCategories: [item],
      category: item,
      selectedSubcategory: item,
    });
  };

  return (
    <View>
      <View style={styles.frameGroup}>
        <View style={styles.primeBrandsParent}>
          <Text style={[styles.primeBrands, styles.primeBrandsTypo]}>
            Prime Brands
          </Text>
          <TouchableOpacity onPress={onSeeAllDealsHandler}>
            <Text style={styles.frameChild}>{'See all Deals'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.frameContainer}>
          {premiumBrandsOffers.length === 0 ? (
            <Loader />
          ) : (
            <FlatList
              data={premiumBrandsOffers}
              nestedScrollEnabled
              horizontal
              scrollEnabled={premiumBrandsOffers.length > 2}
              bounces={false}
              extraData={heights}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => (
                <View style={{ paddingEnd: Padding.p_base }} />
              )}
              renderItem={({ item }) => {
                const offerType = getOfferType(item?.offerType);
                return (
                  <View onLayout={(event) => handleLayout(event, item.id)}>
                    <PrimeBrandItem
                      key={item.title}
                      bgImage={item.offerImages}
                      expiryDate={item.expiryDate}
                      offerPrice={
                        item.offerType?.selectedOfferType ===
                        OfferTypeEnum.ORIGINAL_PRICE
                          ? item.offerPrice
                          : -1
                      }
                      offerType={offerType}
                      offerCategories={item?.offerCategories}
                      storeName={item?.storeOffers?.[0].name}
                      onCTAClick={() => onCardPressed(item)}
                    />
                  </View>
                );
              }}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default memo(PrimeBrands);
