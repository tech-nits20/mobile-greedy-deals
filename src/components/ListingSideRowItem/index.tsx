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
export interface ListingSideRowItemProps extends ICategory {
  isSelected?: boolean;
  onSelected?: () => void;
}
const ListingSideRowItem: FC<ListingSideRowItemProps> = ({
  name,
  cssClass,
  isSelected,
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
    <Pressable id={`${id}`} onPress={onSelected}>
      <View style={getSelectedStyle}>
        <View style={[styles.frameWrapper, styles.frameWrapperBg]}>
          <View style={[styles.productImageWrapper, styles.wrapperLayout]}>
            {cssClass ? (
              <View style={styles.productIcon}>
                <CustomIcon
                  name={cssClass}
                  size={20}
                  color={Color.colorOrangered_100}
                />
              </View>
            ) : (
              <Image
                style={styles.productImage}
                resizeMode="cover"
                source={defaultImage}
              />
            )}
          </View>
        </View>
        <View style={[styles.nameWrapper, styles.frameViewPosition]}>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default memo(ListingSideRowItem);
