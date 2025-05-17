import React, { useEffect, useMemo } from 'react';
import {
  Image,
  View,
  Text,
  ImageSourcePropType,
  Pressable,
} from 'react-native';
import { styles } from './styles';
import {
  getCategorySubCatName,
  getExtraGDActiveOfferText,
  getFormattedExpiryDate,
  getOfferInfo,
  getProductOfferInfo,
  getRandomBGColor,
  getStyleValue,
  getVendorLogoURL,
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
  withDelay,
  ReduceMotion,
} from 'react-native-reanimated';
import { OfferTypeEnum } from '../../types/listingTypes';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Color } from '../../../GlobalStyles';

export type PremiumDealCardRowType = {
  className?: string;
  bgImage?: string;
  offerCategories?: IOfferCategory[];
  expiryDate?: string;
  offerType: IOfferType;
  offerPrice?: number;
  storeName?: string;
  location?: string;
  onCTAClick?: () => void;
};

const PrimeBrandItem = (props: PremiumDealCardRowType) => {
  const gdDealsOffer = getExtraGDActiveOfferText(props?.offerType);
  const bounce = useSharedValue(0);
  const activeOffer = props?.offerType?.activeOffer;

  useEffect(() => {
    bounce.value = withDelay(
      2000,
      withSpring(10, { damping: 2, stiffness: 100 }),
      ReduceMotion.System
    );
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
    <Pressable
      style={({ pressed }) => [
        styles.frameWrapper,
        {
          backgroundColor: pressed
            ? Color.colorLightHover
            : Color.colorTransparent,
        },
      ]}
      onPress={props.onCTAClick}
    >
      <View style={styles.frameParent}>
        <View style={styles.logoWrapper}>
          <Image
            style={[styles.logoIcon]}
            resizeMode="cover"
            source={
              props?.bgImage
                ? { uri: getVendorLogoURL(props.bgImage) }
                : require('../../../assets/default_section.png')
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
            <Text style={styles.expired} numberOfLines={1} ellipsizeMode="tail">
              {props?.location}
            </Text>
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
    </Pressable>
  );
};

export default PrimeBrandItem;
