import React, { FC, memo } from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import {
  getProductOfferInfo,
  getCategorySubCatName,
  getFormattedExpiryDate,
  getImageURL,
  getVendorLogoURL,
  screenWidth,
} from '../../helper/Utils';
import { styles } from './styles';
import {
  IOfferImages,
  IOfferCategory,
  IStoreOfferType,
} from '../../redux/sagas/categories/categoriesTypes';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Color } from '../../../GlobalStyles';

export type SectionCategoryItemType = {
  bgImage?: string;
  offerCategories?: IOfferCategory[];
  expiryDate?: string;
  offerType: IStoreOfferType;
  offerPrice?: number;
  storeName?: string;
  isSeeAll?: boolean;
  location: string;
  onCTAClick?: () => void;
};

const CategorySectionItem: FC<SectionCategoryItemType> = ({
  offerType,
  bgImage,
  expiryDate,
  offerCategories,
  offerPrice,
  onCTAClick,
  storeName,
  location,
  isSeeAll = false,
}) => {
  // const frameView1Style = useMemo(() => {
  //   return {
  //     ...getStyleValue('backgroundColor', bgColor),
  //   };
  // }, [bgColor]);
  const offerTypeInfo = getProductOfferInfo(offerType, offerPrice);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.frameParent3,
        {
          backgroundColor: pressed
            ? Color.colorLightHover
            : Color.colorTransparent,
        },
      ]}
      onPress={onCTAClick}
    >
      <View
        style={[
          styles.frameWrapper,
          {
            width: isSeeAll ? screenWidth * 0.42 : 150,
            height: isSeeAll ? 233 : 224,
          },
        ]}
      >
        <View style={[styles.frameParent]}>
          <View style={[styles.iconWrapper, { height: isSeeAll ? 140 : 130 }]}>
            <Image
              style={styles.logoIcon}
              resizeMode="stretch"
              source={
                bgImage
                  ? { uri: getVendorLogoURL(bgImage) }
                  : require('../../../assets/default_section.png')
              }
            />
            {offerTypeInfo?.gdDiscount?.title && (
              <View
                style={[
                  styles.gdDiscountContainer,
                  { bottom: isSeeAll ? 8 : 6 },
                ]}
              >
                <Image
                  style={styles.gdImage}
                  resizeMode="cover"
                  source={require('../../../assets/rectangle-446.png')}
                />
                <Text style={styles.gdText}>
                  {offerTypeInfo.gdDiscount.title}
                </Text>
              </View>
            )}
          </View>
          <View style={[styles.offParent]}>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={styles.storeName}
            >
              {storeName}
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.offerCategory}
            >
              {getCategorySubCatName(offerCategories)}
            </Text>
            <Text style={styles.couponCode}>{'Get coupon code'}</Text>
            <View style={styles.expiredView}>
              <Text
                style={styles.expired}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {location}
              </Text>
              <Text style={styles.expiryDate}>
                {getFormattedExpiryDate(expiryDate)}
              </Text>
            </View>
          </View>
          {offerTypeInfo && (
            <View style={styles.vectorParent}>
              <Image
                style={[styles.frameChildVector, styles.framePosition]}
                resizeMode="cover"
                source={require('../../../assets/rectangle-448.png')}
              />
              <Image
                style={[styles.frameItem, styles.framePosition]}
                resizeMode="cover"
                source={require('../../../assets/rectangle-446.png')}
              />
              {offerTypeInfo?.title && (
                <Text
                  style={[
                    styles.upto,
                    {
                      textDecorationLine:
                        offerPrice > 0 ? 'line-through' : 'none',
                    },
                  ]}
                >
                  {offerTypeInfo.title}
                </Text>
              )}
              {offerTypeInfo?.subTitle && (
                <Text style={[styles.text, styles.offTypo]}>
                  {offerTypeInfo.subTitle}
                </Text>
              )}
              {offerTypeInfo?.sideText && (
                <Text style={[styles.off, styles.offTypo]}>
                  {offerTypeInfo.sideText}
                </Text>
              )}
            </View>
          )}
        </View>
      </View>
      <Image
        style={[
          styles.frameIcon,
          styles.frameLayout,
          { top: isSeeAll ? 132 : 124 },
        ]}
        resizeMode="cover"
        source={require('../../../assets/frame-1068.png')}
      />
      <Image
        style={[
          styles.frameChild1,
          styles.frameLayout,
          {
            left: isSeeAll ? screenWidth * 0.4 : 142,
            top: isSeeAll ? 132 : 124,
          },
        ]}
        resizeMode="cover"
        source={require('../../../assets/frame-1069.png')}
      />
    </Pressable>
  );
};

export default memo(CategorySectionItem);
