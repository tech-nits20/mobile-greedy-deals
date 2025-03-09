import React, { useEffect, useMemo } from 'react';
import { Image, View, Text, ImageSourcePropType } from 'react-native';
import { styles } from './styles';
import {
  getCategorySubCatName,
  getExtraGDActiveOfferText,
  getFormattedExpiryDate,
  getOfferInfo,
  getProductOfferInfo,
  getRandomBGColor,
  getStyleValue,
  IOfferType,
} from '../../helper/Utils';
import {
  IDiscountsOffersItem,
  IOfferCategory,
  IOfferImages,
} from '../../redux/sagas/categories/categoriesTypes';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
} from 'react-native-reanimated';
import { OfferTypeEnum } from '../../types/listingTypes';
import { TouchableOpacity } from 'react-native-gesture-handler';

export type PremiumDealCardRowType = {
  className?: string;
  bgImage?: IOfferImages[];
  offerCategories?: IOfferCategory[];
  expiryDate?: string;
  offerType: IOfferType;
  offerPrice?: number;
  storeName?: string;
  onCTAClick?: () => void;
};

const PrimeBrandItem = (props: PremiumDealCardRowType) => {
  const gdDealsOffer = getExtraGDActiveOfferText(props?.offerType);
  const bounce = useSharedValue(0);
  const activeOffer = props?.offerType?.activeOffer;

  useEffect(() => {
    // bounce.value = withRepeat(
    //   withSpring(10, { damping: 2, stiffness: 100 }),
    //   -1,
    //   true
    // );
    bounce.value = withSpring(0, { damping: 2, stiffness: 100 });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: bounce.value }],
  }));

  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue('backgroundColor', getRandomBGColor()),
    };
  }, []);

  // const logoIconStyle = useMemo(() => {
  //   return {
  //     ...getStyleValue('width', width),
  //   };
  // }, [width]);

  return (
    <TouchableOpacity style={[styles.frameWrapper]} onPress={props.onCTAClick}>
      <View style={styles.frameParent}>
        <View style={styles.logoWrapper}>
          <Image
            style={[styles.logoIcon]}
            resizeMode="cover"
            source={
              require('../../../assets/default_image.png')
              // props?.bgImage.length > 0
              //   ? props.bgImage[0].url
              //   : require('../../../assets/adidas-logosvg-1.png')
            }
          />
        </View>
        <View style={styles.offParent}>
          {activeOffer !== OfferTypeEnum.NONE ? (
            activeOffer === OfferTypeEnum.ORIGINAL_PRICE ? (
              <View style={styles.originalPriceView}>
                <Text style={styles.originalPrice}>
                  {props?.offerType?.originalPrice?.value}
                </Text>
                <Text style={styles.offerPrice}>{props?.offerPrice}</Text>
              </View>
            ) : (
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.allTypeOf}
              >
                {getOfferInfo(props?.offerType)}
              </Text>
            )
          ) : null}
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.storeName}>
            {props?.storeName}
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.offerCategory}
          >
            {getCategorySubCatName(props?.offerCategories)}
          </Text>
          <Text style={styles.couponCode}>{'Get coupon code'}</Text>
          <View style={styles.expiredView}>
            <Text style={styles.expired}>{'Expired:'}</Text>
            <Text style={styles.expiryDate}>
              {getFormattedExpiryDate(props?.expiryDate)}
            </Text>
          </View>
        </View>
      </View>
      {gdDealsOffer?.title && (
        <Animated.Text style={[styles.gdOfferText, animatedStyle]}>
          {gdDealsOffer?.title}
        </Animated.Text>
      )}
    </TouchableOpacity>
  );
};

export default PrimeBrandItem;
