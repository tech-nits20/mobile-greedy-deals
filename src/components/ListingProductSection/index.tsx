import React, { FC, memo, useMemo } from 'react';
import { styles } from './styles';
import {
  View,
  Image,
  Text,
  ImageSourcePropType,
  Pressable,
} from 'react-native';
import { getImageURL, getStyleValue } from '../../helper/Utils';
import { ParamListBase, useNavigation } from '@react-navigation/core';
import { PRODUCT_DETAILS_SCREEN } from '../../routes/Routes';
import { StackNavigationProp } from '@react-navigation/stack';
import { IProductInfo } from '../../redux/sagas/products/productsTypes';

export interface ListingProductSectionProps {
  offerTitle?: string;
  offerSubTitle?: string;
  offerType?: string;
  imgSrc: ImageSourcePropType;
  title: string;
  bgColor?: string;
}
const ListingProductSection: FC<IProductInfo> = (props) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const onProductPressed = () => {
    navigation.navigate(PRODUCT_DETAILS_SCREEN, {});
  };

  return (
    <Pressable onPress={onProductPressed} style={styles.frameParent}>
      <View style={[styles.frameWrapper, styles.wrapperLayout]}>
        <View style={[styles.offerImageWrapper, styles.wrapperLayout]}>
          <Image
            style={styles.offerImage}
            resizeMode="cover"
            source={getImageURL(props.offerImages?.[0]?.url)}
          />
        </View>
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
        <Text style={styles.upto}>{offerTitle}</Text>
        <Text style={[styles.text, styles.offTypo]}>{offerSubTitle}</Text>
        <Text style={[styles.off, styles.offTypo]}>{offerType}</Text>
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default memo(ListingProductSection);
