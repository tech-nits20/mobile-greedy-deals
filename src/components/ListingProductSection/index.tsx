import React, { FC, memo } from 'react';
import { styles } from './styles';
import { View, Image, Text, Pressable } from 'react-native';
import {
  getCategorySubCatName,
  getFormattedExpiryDate,
  getImageURL,
  getProductOfferInfo,
} from '../../helper/Utils';
import { ParamListBase, useNavigation } from '@react-navigation/core';
import { PRODUCT_DETAILS_SCREEN } from '../../routes/Routes';
import { StackNavigationProp } from '@react-navigation/stack';
import { IProductInfo } from '../../redux/sagas/products/productsTypes';
import { useDispatch } from 'react-redux';
import { setOfferCouponCode } from '../../redux/sagas/products/productsRedux';

const ListingProductSection: FC<IProductInfo> = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const offerType = getProductOfferInfo(props.offerType, props?.offerPrice);

  const onProductPressed = () => {
    dispatch(setOfferCouponCode(''));
    navigation.navigate(PRODUCT_DETAILS_SCREEN, { product: props });
  };

  return (
    <Pressable onPress={onProductPressed} style={styles.frameParent}>
      <View style={styles.innerWrapper}>
        <View style={[styles.frameWrapper, styles.wrapperLayout]}>
          <View style={[styles.offerImageWrapper, styles.wrapperLayout]}>
            <Image
              style={styles.offerImage}
              resizeMode="stretch"
              // source={getImageURL(props.offerImages?.[0]?.url)}
              source={require('../../../assets/default_image.png')}
            />
          </View>
          {offerType?.gdDiscount?.title && (
            <View style={styles.gdDiscountContainer}>
              <Image
                style={styles.gdImage}
                resizeMode="cover"
                source={require('../../../assets/rectangle-446.png')}
              />
              <Text style={styles.gdText}>{offerType.gdDiscount.title}</Text>
            </View>
          )}
        </View>
        <View style={styles.vectorParent}>
          <Image
            style={[styles.frameChild, styles.framePosition]}
            resizeMode="cover"
            source={require('../../../assets/rectangle-448.png')}
          />
          <Image
            style={[styles.frameItem, styles.framePosition]}
            resizeMode="cover"
            source={require('../../../assets/rectangle-446.png')}
          />
          {offerType?.title && (
            <Text style={styles.upto}>{offerType.title}</Text>
          )}
          {offerType?.subTitle && (
            <Text style={[styles.text, styles.offTypo]}>
              {offerType.subTitle}
            </Text>
          )}
          {offerType?.sideText && (
            <Text style={[styles.off, styles.offTypo]}>
              {offerType.sideText}
            </Text>
          )}
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText} numberOfLines={1} ellipsizeMode="tail">
            {props?.storeOffers?.[0]?.name}
          </Text>
        </View>
        <Text
          style={styles.subCategoryName}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {getCategorySubCatName(props?.offerCategories ?? [])}
        </Text>
        <View style={styles.expiredContainer}>
          <Text style={styles.expiryDate}>{'Expired'}</Text>
          <Text style={styles.expiryDate}>
            {getFormattedExpiryDate(props?.expiryDate)}
          </Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.couponText}>{'Get coupon code'}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default memo(ListingProductSection);
