import React, { FC, memo } from "react";
import { ImageSourcePropType, Pressable, View } from "react-native";
import { styles } from "./styles";
import { Image } from "react-native";
import { Text } from "react-native";

export interface ProductCategoryItemType {
  imgSrc: ImageSourcePropType;
  title: string;
  onPress?: () => void;
}
const ProductCategorySectionItem: FC<ProductCategoryItemType> = ({
  title,
  imgSrc,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress} style={styles.frameParent}>
      <View style={[styles.frameWrapper, styles.wrapperLayout]}>
        <View
          style={[styles.imageWrapper, styles.wrapperLayout]}
        >
          <Image
            style={styles.imageIcon}
            resizeMode="cover"
            source={imgSrc}
          />
        </View>
      </View>
      <View style={styles.menFashionWrapper}>
        <Text style={styles.menFashion}>{title}</Text>
      </View>
    </Pressable>
  );
};


export default memo(ProductCategorySectionItem);
