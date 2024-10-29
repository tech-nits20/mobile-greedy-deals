import React, { FC, useMemo } from "react";
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
} from "react-native";
import { styles } from "./styles";
import { getStyleValue } from "../../helper/Utils";
import { ScrollView } from "react-native-gesture-handler";

export type SectionCategoryItemType = {
  imgSrc?: ImageSourcePropType;
  title?: string;
  subTitle?: string;
  bgColor?: string;
};

export interface DealsAndOffersSectionType {
  sectionTitle: string;
  items: SectionCategoryItemType[];
}

const CategorySectionItem: FC<SectionCategoryItemType> = ({
  title,
  bgColor,
  imgSrc,
  subTitle,
}) => {
  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", bgColor),
    };
  }, [bgColor]);
  return (
    <View style={styles.frameParent2}>
      <View style={styles.frameParent3}>
        <View style={[styles.frameWrapper, frameView1Style]}>
          <View style={[styles.frameParent, styles.parentFlexBox]}>
            <View style={[styles.iconWrapper, styles.parentFlexBox]}>
              <Image
                style={styles.logoIcon}
                resizeMode="contain"
                source={imgSrc}
              />
            </View>
            <View style={[styles.offParent, styles.parentFlexBox]}>
              <Text style={styles.off}>{title}</Text>
              <Text style={styles.offers}>{subTitle}</Text>
            </View>
          </View>
        </View>
        <Image
          style={[styles.frameIcon, styles.frameLayout]}
          resizeMode="cover"
          source={require("../../../assets/frame-1068.png")}
        />
        <Image
          style={[styles.frameChild1, styles.frameLayout]}
          resizeMode="cover"
          source={require("../../../assets/frame-1069.png")}
        />
      </View>
    </View>
  );
};

const DealsAndOffersSection: FC<DealsAndOffersSectionType> = ({
  sectionTitle,
  items,
}) => {
  return (
    <View style={[styles.sectionParent, styles.parentFlexBox1]}>
      <Text style={[styles.sectionContainer, styles.sectionTitle]}>
        {sectionTitle}
      </Text>
      <View style={styles.frameChild} />
      <ScrollView horizontal>
        <View style={styles.frameParent2}>
          <View style={styles.frameParent3}>
            {items.map((item, index) => {
              return (
                <CategorySectionItem key={`${item.title}${index}`} {...item} />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DealsAndOffersSection;
