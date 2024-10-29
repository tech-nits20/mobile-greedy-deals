import React, { FC, memo, useMemo } from "react";
import { styles } from "./styles";
import {
  View,
  Image,
  Text,
  ImageSourcePropType,
  Pressable,
} from "react-native";
import { getStyleValue } from "../../helper/Utils";
import { ParamListBase, useNavigation } from "@react-navigation/core";
import { PRODUCT_DETAILS_SCREEN } from "../../routes/Routes";
import { StackNavigationProp } from "@react-navigation/stack";

export interface ListingProductSectionProps {
  offerTitle?: string;
  offerSubTitle?: string;
  offerType?: string;
  imgSrc: ImageSourcePropType;
  title: string;
  bgColor?: string;
}
const ListingProductSection: FC<ListingProductSectionProps> = ({
  imgSrc,
  title,
  offerSubTitle,
  offerTitle,
  offerType,
  bgColor,
}) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", bgColor),
    };
  }, [bgColor]);

  const onProductPressed = () => {
    navigation.navigate(PRODUCT_DETAILS_SCREEN, {title, offerTitle,  offerSubTitle});
  };

  return (
    <Pressable onPress={onProductPressed} style={styles.frameParent}>
      <View style={[styles.frameWrapper, styles.wrapperLayout, frameViewStyle]}>
        <View
          style={[styles.bodyShotOfADarkSkinnedFaWrapper, styles.wrapperLayout]}
        >
          <Image
            style={styles.bodyShotOfADarkSkinnedFaIcon}
            resizeMode="cover"
            source={imgSrc}
          />
        </View>
      </View>
      <View style={styles.vectorParent}>
        <Image
          style={[styles.frameChild, styles.framePosition]}
          resizeMode="cover"
          source={require("../../../assets/rectangle-448.png")}
        />
        <Image
          style={[styles.frameItem, styles.framePosition]}
          resizeMode="cover"
          source={require("../../../assets/rectangle-446.png")}
        />
        <Text style={styles.upto}>{offerTitle}</Text>
        <Text style={[styles.text, styles.offTypo]}>{offerSubTitle}</Text>
        <Text style={[styles.off, styles.offTypo]}>{offerType}</Text>
      </View>
      <View style={styles.summerFashionWrapper}>
        <Text style={styles.summerFashion}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default memo(ListingProductSection);
