import React from "react";
import { View, Text, ImageSourcePropType } from "react-native";
import { styles } from "./styles";
import PrimeBrandItem from "../PrimeBrandItem";
import { ScrollView } from "react-native-gesture-handler";

interface PrimeBrandItemProps {
  title: string;
  subTitle: string;
  imgSrc: ImageSourcePropType;
  isBogo?: boolean;
  bgColor?: string;
}
const mockPrimeData: PrimeBrandItemProps[] = [
  {
    title: "90% Off",
    subTitle: "All type of Shoes",
    imgSrc: require("../../../assets/adidas-logosvg-1.png"),
    isBogo: false,
  },
  {
    title: "Buy 1 Get 1",
    subTitle: "Baby sopa & shampoo",
    imgSrc: require("../../../assets/0-uwlrjr-aq9ti0pc-1.png"),
    isBogo: false,
    bgColor: 'rgba(129, 195, 65, 0.1)'
  },
  {
    title: "30% Cashback",
    subTitle: "All type of Shoes",
    imgSrc: require("../../../assets/myntra1200x900-1.png"),
    isBogo: false,
    bgColor: 'rgba(255, 0, 151, 0.1)'
  },
];
const PrimeBrands = () => {
  return (
    <View>
      <View style={styles.frameGroup}>
        <View style={styles.primeBrandsParent}>
          <Text style={[styles.primeBrands, styles.primeBrandsTypo]}>
            Prime Brands
          </Text>
          <View style={styles.frameChild} />
        </View>
        <ScrollView horizontal>
          <View style={styles.frameContainer}>
            {mockPrimeData.map((item) => {
              return <PrimeBrandItem key={item.title} {...item} />;
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default PrimeBrands;
