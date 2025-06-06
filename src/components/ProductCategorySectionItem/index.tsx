import React, { FC, memo } from 'react';
import { ImageSourcePropType, Pressable, View } from 'react-native';
import { styles } from './styles';
import { Image } from 'react-native';
import { Text } from 'react-native';
import { ICategory } from '../../redux/sagas/categories/categoriesTypes';
import defaultImage from '../../../assets/bodyshotofadarkskinnedfashionpng-11.png';
import { CustomIcon } from '../../helper/Icons';
import { Color } from '../../../GlobalStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface ProductCategoryItemType extends ICategory {
  onPress?: () => void;
}
const ProductCategorySectionItem: FC<ProductCategoryItemType> = ({
  id,
  name,
  cssClass,
  imageUrl,
  onPress,
}) => {
  return (
    <Pressable onPress={onPress} style={styles.frameParent}>
      <View style={[styles.frameWrapper, styles.wrapperLayout]}>
        <View style={[styles.imageWrapper, styles.wrapperLayout]}>
          <Image
            style={styles.imageIcon}
            resizeMode="stretch"
            source={imageUrl ? { uri: imageUrl } : defaultImage}
          />
        </View>
      </View>
      <View style={styles.menFashionWrapper}>
        <Text style={styles.menFashion}>{name}</Text>
      </View>
    </Pressable>
  );
};

export default memo(ProductCategorySectionItem);
