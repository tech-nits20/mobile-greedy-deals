import React, { FC, memo } from 'react';
import {
  ImageSourcePropType,
  Pressable,
  StyleProp,
  Text,
  ViewStyle,
} from 'react-native';
import { Image } from 'react-native';
import { View } from 'react-native';
import { styles } from './styles';
import { Color } from '../../../GlobalStyles';
import { ICategory } from '../../redux/sagas/categories/categoriesTypes';
import { CustomIcon } from '../../helper/Icons';
import defaultImage from '../../../assets/bodyshotofadarkskinnedfashionpng-1.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
export interface ListingSideRowItemProps extends ICategory {
  isSelected?: boolean;
  onSelected?: () => void;
}
const ListingSideRowItem: FC<ListingSideRowItemProps> = ({
  name,
  cssClass,
  isSelected,
  imageUrl,
  onSelected,
  id,
}) => {
  const borderColor = isSelected
    ? Color.colorOrangered_100
    : Color.colorTransparent;
  const getSelectedStyle: StyleProp<ViewStyle> = {
    ...styles.frameContainer,
    borderColor: borderColor,
  };

  return (
    <TouchableOpacity id={`${id}`} onPress={onSelected}>
      <View style={getSelectedStyle}>
        <View style={[styles.frameWrapper, styles.frameWrapperBg]}>
          <View style={[styles.productImageWrapper, styles.wrapperLayout]}>
            <Image
              style={styles.productImage}
              resizeMode="stretch"
              source={imageUrl ? { uri: imageUrl } : defaultImage}
            />
          </View>
        </View>
        <View style={[styles.nameWrapper, styles.frameViewPosition]}>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(ListingSideRowItem);
