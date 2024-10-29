import React, { FC, memo } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import TopAppBar from "../../components/TopAppBar";
import TopProductCarousel from "../../components/TopProductCarousel";
import { ListingProductSectionProps } from "../../components/ListingProductSection";
import { useRoute } from "@react-navigation/core";
import { ScrollView } from "react-native-gesture-handler";

export interface ProductDetailsProps {}

const mockSectionData = [
  {
    data: { title: "Valid Till", value: "20 Nov 2024" },
  },
  {
    data: { title: "Discount Offer", value: "Buy 1 Get 2 Free" },
  },
  {
    data: { title: "Time Duration", value: "10 am to 10 pm" },
  },
  {
    data: { title: "Test", value: "Test Data" },
  },
];
const ProductOfferSectionItem = ({ title, value }) => {
  return (
    <View style={styles.offerSectionItem}>
      <Text style={styles.offerText}>{title}</Text>
      <Text style={styles.offerText}>{value}</Text>
    </View>
  );
};
const ProductOfferSection = () => {
  return (
    <View>
      {mockSectionData.map((item, index) => {
        return <ProductOfferSectionItem key={index} {...item.data} />;
      })}
    </View>
  );
};

const ProductDetailsScreen: FC<ProductDetailsProps> = () => {
  const route = useRoute();
  const { title } = route?.params as ListingProductSectionProps;

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <TopAppBar title="Product Details" />
        </View>
        <View>
          <TopProductCarousel isFullWidth />
        </View>
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.title}>{title ?? ""}</Text>
          </View>
          <View>
            <TopProductCarousel carouselMargin={32} />
          </View>
          <View>
            <ProductOfferSection />
          </View>
          <View>
            <Text style={styles.descriptionText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default memo(ProductDetailsScreen);
