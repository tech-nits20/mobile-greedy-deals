import React, { useMemo } from "react";
import { Image, View, Text, ImageSourcePropType } from "react-native";
import { styles } from "./styles";
import { getStyleValue } from "../../helper/Utils";

export type PrimeBrandItemType = {
  imgSrc?: ImageSourcePropType;
  subTitle?: string;
  title?: string;

  /** Style props */
  bgColor?: string;
  width?: number | string;
};

const PrimeBrandItem = ({
  bgColor,
  imgSrc,
  subTitle,
  title,
  width,
}: PrimeBrandItemType) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", bgColor),
    };
  }, [bgColor]);

  const logoIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", width),
    };
  }, [width]);

  return (
    <View style={[styles.frameWrapper, frameViewStyle]}>
      <View style={styles.frameParent}>
        <View style={styles.logoWrapper}>
          <Image
            style={[styles.logoIcon, logoIconStyle]}
            resizeMode="contain"
            source={imgSrc}
          />
        </View>
        <View style={styles.offParent}>
          <Text style={styles.off}>{title}</Text>
          <Text style={styles.allTypeOf}>{subTitle}</Text>
        </View>
      </View>
    </View>
  );
};

export default PrimeBrandItem;
