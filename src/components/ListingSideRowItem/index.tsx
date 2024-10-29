import React, { FC, memo } from "react";
import { ImageSourcePropType, Pressable, StyleProp, Text, ViewStyle } from "react-native";
import { Image } from "react-native";
import { View } from "react-native";
import { styles } from "./styles";
import { Color } from "../../../GlobalStyles";

export interface ListingSideRowItemProps {
  id?: string | number;
  imgSrc: ImageSourcePropType;
  title: string;
  isSelected?: boolean;
  onSelected?: () => void;
}
const ListingSideRowItem: FC<ListingSideRowItemProps> = ({
  title,
  imgSrc,
  isSelected,
  onSelected,
  id
}) => {
  const borderColor = isSelected ? Color.colorOrangered_100 : Color.colorTransparent;
  const getSelectedStyle: StyleProp<ViewStyle> = {
    ...styles.frameContainer,
    borderColor: borderColor
  }

  return (
    <Pressable id={`${id}`} onPress={onSelected}>
      <View style={getSelectedStyle}>
        <View style={[styles.frameWrapper, styles.frameWrapperBg]}>
          <View
            style={[
              styles.productImageWrapper,
              styles.wrapperLayout,
            ]}
          >
            <Image
              style={styles.productImage}
              resizeMode="cover"
              source={imgSrc}
            />
          </View>
        </View>
        <View style={[styles.allWrapper, styles.frameViewPosition]}>
          <Text style={styles.all}>{title}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default memo(ListingSideRowItem);
