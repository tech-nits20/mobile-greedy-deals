import * as React from "react";
import { Image, View } from "react-native";
import { styles } from "./styles";
import TopAppBar from "../../components/TopAppBar";
import ListingSideRow from "../../components/ListingSideRow";
import FilterAndSort from "../../components/FilterAndSort";
import ListingProductSection, {
  ListingProductSectionProps,
} from "../../components/ListingProductSection";
import { Color } from "../../../GlobalStyles";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import CustomCarousel from "../../components/CustomCarousel";
import { useRoute } from "@react-navigation/native";

const mockListingSection: ListingProductSectionProps[] = [
  {
    title: "Sree Venkateswara sarees",
    imgSrc: require("../../../assets/image-1873881918.png"),
    offerTitle: "Buy 1",
    offerSubTitle: "Get 2",
    offerType: "Free",
    bgColor: Color.colorGainsboro_100,
  },
  {
    title: "Sree Venkateswara sarees",
    imgSrc: require("../../../assets/image-1873881918.png"),
    offerTitle: "Buy 1",
    offerSubTitle: "Get 2",
    offerType: "Free",
    bgColor: Color.colorGainsboro_100,
  },
  {
    title: "Sree Venkateswara sarees",
    imgSrc: require("../../../assets/image-1873881918.png"),
    offerTitle: "Buy 1",
    offerSubTitle: "Get 2",
    offerType: "Free",
    bgColor: Color.colorGainsboro_100,
  },
  {
    title: "Sree Venkateswara sarees",
    imgSrc: require("../../../assets/image-1873881918.png"),
    offerTitle: "Buy 1",
    offerSubTitle: "Get 2",
    offerType: "Free",
    bgColor: Color.colorGainsboro_100,
  },
  {
    title: "Summer Fashion",
    imgSrc: require("../../../assets/bodyshotofadarkskinnedfashionpng-11.png"),
    offerTitle: "upto",
    offerSubTitle: "20%",
    offerType: "Off",
  },
  {
    title: "Summer Fashion",
    imgSrc: require("../../../assets/bodyshotofadarkskinnedfashionpng-11.png"),
    offerTitle: "upto",
    offerSubTitle: "20%",
    offerType: "Off",
  },
  {
    title: "Summer Fashion",
    imgSrc: require("../../../assets/bodyshotofadarkskinnedfashionpng-11.png"),
    offerTitle: "upto",
    offerSubTitle: "20%",
    offerType: "Off",
  },
  {
    title: "Summer Fashion",
    imgSrc: require("../../../assets/bodyshotofadarkskinnedfashionpng-11.png"),
    offerTitle: "upto",
    offerSubTitle: "20%",
    offerType: "Off",
  },
  {
    title: "Summer Fashion",
    imgSrc: require("../../../assets/bodyshotofadarkskinnedfashionpng-11.png"),
    offerTitle: "flat",
    offerSubTitle: "20%",
    offerType: "Off",
  },
  {
    title: "Summer Fashion",
    imgSrc: require("../../../assets/bodyshotofadarkskinnedfashionpng-11.png"),
    offerTitle: "flat",
    offerSubTitle: "20%",
    offerType: "Off",
  },
  {
    title: "Summer Fashion",
    imgSrc: require("../../../assets/bodyshotofadarkskinnedfashionpng-11.png"),
    offerTitle: "flat",
    offerSubTitle: "20%",
    offerType: "Off",
  },
  {
    title: "Summer Fashion",
    imgSrc: require("../../../assets/bodyshotofadarkskinnedfashionpng-11.png"),
    offerTitle: "flat",
    offerSubTitle: "20%",
    offerType: "Off",
  },
];
const ListingScreen = () => {
  const route = useRoute();

  return (
    <View style={styles.listingPage}>
      <Image
        style={styles.subtractIcon}
        resizeMode="cover"
        source={require("../../../assets/subtract1.png")}
      />
      <TopAppBar title={route?.params?.title ?? ""} />
      <View style={[styles.midRow, styles.midRowSpaceBlock]}>
        <View style={styles.midRowInner}>
          <View style={[styles.frameParent, styles.frameParentFlexBox]}>
            <View style={styles.frameGroup}>
              <ListingSideRow />
            </View>
            <View style={[styles.frameParent9, styles.frameParentFlexBox]}>
              <View style={[styles.component2Wrapper, styles.wrapperLayout]}>
                <View style={styles.component2}>
                  <CustomCarousel />
                </View>
              </View>
              <View style={styles.frameWrapper10}>
                <FilterAndSort />
              </View>
              <View style={styles.frameFlexBox}>
                <FlatList
                  data={mockListingSection}
                  keyExtractor={(item) => item.title}
                  numColumns={2}
                  style={styles.flatlist}
                  columnWrapperStyle={{justifyContent: 'space-between'}}
                  renderItem={({ item }) => {
                    return <ListingProductSection {...item} />;
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ListingScreen;
