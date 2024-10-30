import React, { FC, memo } from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./styles";
import TopAppBar from "../../components/TopAppBar";
import CustomCarousel from "../../components/CustomCarousel";
import { ListingProductSectionProps } from "../../components/ListingProductSection";
import { useRoute } from "@react-navigation/core";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import ProductCategorySectionItem from "../../components/ProductCategorySectionItem";

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
const mockProducts = {
  items: [
    {
      title: "Women Fashion",
      imgSrc: require("../../../assets/bodyshotofadarkskinnedfashionpng-11.png"),
      onPress: () => {},
    },
    {
      title: "Men Fashion",
      imgSrc: require("../../../assets/bodyshotofadarkskinnedfashionpng-11.png"),
      onPress: () => {},
    },
    {
      title: "Kids Fashion",
      imgSrc: require("../../../assets/bodyshotofadarkskinnedfashionpng-11.png"),
      onPress: () => {},
    },
    {
      title: "Summer Fashion",
      imgSrc: require("../../../assets/bodyshotofadarkskinnedfashionpng-11.png"),
      onPress: () => {},
    },
    {
      title: "Women Fashion",
      imgSrc: require("../../../assets/bodyshotofadarkskinnedfashionpng-11.png"),
      onPress: () => {},
    },
  ],
};
const VIDEO_DATA = [
  { id: "1", title: "Video 1", thumbnail: "https://via.placeholder.com/150" },
  { id: "2", title: "Video 2", thumbnail: "https://via.placeholder.com/150" },
  { id: "3", title: "Video 3", thumbnail: "https://via.placeholder.com/150" },
  { id: "4", title: "Video 4", thumbnail: "https://via.placeholder.com/150" },
  { id: "5", title: "Video 5", thumbnail: "https://via.placeholder.com/150" },
  { id: "6", title: "Video 6", thumbnail: "https://via.placeholder.com/150" },
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

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <TopAppBar title="Product Details" />
        </View>
        <View>
          <CustomCarousel isFullWidth />
        </View>
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.title}>{title ?? ""}</Text>
          </View>
          <View>
            <CustomCarousel carouselMargin={32} autoPlay={false} />
          </View>
          <View>
            <ProductOfferSection />
          </View>

          <View>
            <Text style={styles.productsTitle}>Products</Text>
            <View style={styles.productWrapper}>
              <FlatList
                data={mockProducts.items}
                horizontal
                ItemSeparatorComponent={() => <View style={{paddingRight: 16}}/>}
                renderItem={({ item, index }) => {
                  return (
                    <ProductCategorySectionItem
                      key={`${item.title}${index}`}
                      {...item}
                    />
                  );
                }}
              />
            </View>
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
          <View style={styles.mapWrapper}>
            <Text style={{ color: "black" }}>Google Map</Text>
          </View>
          <View style={styles.youtubeLinks}>
            <Text style={{ color: "black" }}>Youtube links</Text>
          </View>
          <View style={styles.container}>
            <FlatList
              data={VIDEO_DATA}
              renderItem={renderItem}
              horizontal
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default memo(ProductDetailsScreen);
