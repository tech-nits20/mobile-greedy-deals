import * as React from "react";
import { Image, View, Text } from "react-native";
import TopAppBar from "../../components/TopAppBar";
import { styles } from "./styles";
import ProductCategorySection, {
  ProductCategorySectionProps,
} from "../../components/ProductCategorySection";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import CustomCarousel from "../../components/CustomCarousel";
import { CATEGORIES_SCREEN } from "../../routes/Routes";

const mockCategoryData: ProductCategorySectionProps[] = [
  {
    sectionTitle: "Fashion",
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
  },
  {
    sectionTitle: "Hotels &  Dining",
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
  },
  {
    sectionTitle: "Hospital & Diagnosis",
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
  },
  {
    sectionTitle: "Electronics",
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
  },
  {
    sectionTitle: "Beauty & Spa",
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
  },
  {
    sectionTitle: "Golds",
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
  },
  {
    sectionTitle: "Real State",
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
  },
  {
    sectionTitle: "Automobile",
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
  },
  {
    sectionTitle: "Entertainment",
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
  },
  {
    sectionTitle: "Tour & Travels",
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
  },
];
const CategoriesScreen = ({ route }) => {
  const screenTitle = route?.name === CATEGORIES_SCREEN ? "Categories" : "";
  return (
    <View style={[styles.categories, styles.categoriesLayout]}>
      <Image
        style={styles.subtractIcon}
        resizeMode="cover"
        source={require("../../../assets/subtract2.png")}
      />
      <View style={styles.frameParent}>
        <TopAppBar title={screenTitle} />
        <ScrollView>
          <View style={styles.frameGroup}>
            <CustomCarousel isFullWidth />
          </View>
          <View style={styles.midRow}>
            <View style={styles.categoriesPageParent}>
              <Text style={styles.categoriesPage}>Categories Page</Text>
              <Text
                style={[styles.loremIpsumIsSimply, styles.womenFashionTypo]}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
              </Text>
            </View>
            <View style={styles.frameContainer}>
              <FlatList
                data={mockCategoryData}
                keyExtractor={(item) => item.sectionTitle}
                renderItem={(item) => {
                  return (
                    <View style={styles.sectionContainer}>
                      <ProductCategorySection key={item.index} {...item.item} />
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.categoriesChild} />
    </View>
  );
};

export default CategoriesScreen;
