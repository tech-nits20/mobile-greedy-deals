import React, { FC, memo } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import ProductCategorySectionItem, {
  ProductCategoryItemType,
} from "../ProductCategorySectionItem";
import { ParamListBase, useNavigation } from "@react-navigation/core";
import { LISTING_SCREEN } from "../../routes/Routes";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView } from "react-native-gesture-handler";

export interface ProductCategorySectionProps {
  sectionTitle: string;
  items: ProductCategoryItemType[];
}
const ProductCategorySection: FC<ProductCategorySectionProps> = ({
  sectionTitle,
  items,
}) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  return (
    <View style={styles.frameView}>
      <View style={styles.fashionParent}>
        <Text style={styles.fashion1Typo}>{sectionTitle}</Text>
        <View style={styles.lineView} />
      </View>
      <View style={styles.frameParent1}>
        <View style={styles.frameWrapper}></View>
        <ScrollView horizontal>
          <View style={styles.womenFashionWrapper}>
            {items.map((item, index) => {
              return (
                <ProductCategorySectionItem
                  key={`${item.title}${index}`}
                  {...item}
                  onPress={() => navigation.navigate(LISTING_SCREEN, {title: sectionTitle})}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default memo(ProductCategorySection);
