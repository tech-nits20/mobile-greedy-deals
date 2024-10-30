import * as React from "react";
import { Text, View } from "react-native";
import TopAppBar from "../../components/TopAppBar";
import { styles } from "./styles";
import HomeSections from "../../components/HomeSections";
import PrimeBrands from "../../components/PrimeBrands";
import DealsAndOffersSection from "../../components/DealsAndOffersSection";
import { ScrollView } from "react-native-gesture-handler";

const mockHomeData = [
  {
    sectionTitle: "Discounts and Offers",
    items: [
      {
        title: "20% Off",
        subTitle: "1005 offers",
        imgSrc: require("../../../assets/flipkartlogo3f33927daaseeklogocom-1.png"),
      },
      {
        title: "30% Off",
        subTitle: "1500 offers",
        bgColor: "rgba(248, 152, 29, 0.1)",
        imgSrc: require("../../../assets/amazonlogoamazonicontransparentfreepng-1.png"),
      },
      {
        title: "Buy 2 Get 3",
        subTitle: "1005 offers",
        bgColor: "rgba(252, 39, 121, 0.1)",
        imgSrc: require("../../../assets/freenykaalogoicondownloadinsvgpnggiffileformatscosmeticsmakeupbeautyfashioncarebrandpacklogosicons2822953-1.png"),
      },
      {
        title: "500 Cashback",
        subTitle: "1005 offers",
        bgColor: "rgba(73, 89, 105, 0.1)",
        imgSrc: require("../../../assets/ajiologo-1.png"),
      },
    ],
  },
  {
    sectionTitle: "Most Popular Deals",
    items: [
      {
        title: "90% Off",
        subTitle: "1005 offers",
        imgSrc: require("../../../assets/zomato-logosvg-1.png"),
        bgColor: "rgba(252, 39, 121, 0.1)",
      },
      {
        title: "Buy 2 at ₹400",
        subTitle: "1500 offers",
        imgSrc: require("../../../assets/dominoslogo-1.png"),
        bgColor: "rgba(1, 126, 180, 0.1)",
      },
      {
        title: "₹300 Off",
        subTitle: "1005 offers",
        imgSrc: require("../../../assets/pngimgcom--kfc-png53-1.png"),
        bgColor: "rgba(196, 18, 47, 0.1)",
      },
      {
        title: "90% Off",
        subTitle: "1005 offers",
        imgSrc: require("../../../assets/zomato-logosvg-1.png"),
      },
    ],
  },
  {
    sectionTitle: "Beauty Deals",
    items: [
      {
        title: "90% Off",
        subTitle: "1005 offers",
        imgSrc: require("../../../assets/lakmelogo-1.png"),
        bgColor: "rgba(0, 0, 0, 0.1)",
      },
      {
        title: "Buy 2 at ₹400",
        subTitle: "1500 offers",
        imgSrc: require("../../../assets/freenykaalogoicondownloadinsvgpnggiffileformatscosmeticsmakeupbeautyfashioncarebrandpacklogosicons2822953-1.png"),
        bgColor: "rgba(252, 39, 122, 0.1)",
      },
      {
        title: "90% Off",
        subTitle: "1005 offers",
        imgSrc: require("../../../assets/pondslogo2-1.png"),
        bgColor: "rgba(236, 0, 140, 0.1)",
      },
      {
        title: "₹300 Off",
        subTitle: "1005 offers",
        imgSrc: require("../../../assets/images-1.png"),
        bgColor: "rgba(231, 0, 130, 0.1)",
      },
      {
        title: "90% Off",
        subTitle: "1005 offers",
        imgSrc: require("../../../assets/lakmelogo-1.png"),
        bgColor: "rgba(0, 0, 0, 0.1)",
      },
    ],
  },
];
const HomeScreen = () => {
  return (
    <>
      <TopAppBar />
      <ScrollView style={styles.mainApps1415Pro} bounces>
        <View style={styles.locationUserBarParent}>
          <View style={styles.midRow}>
            <HomeSections />
            <View style={styles.frameParent}>
              <View style={styles.component3Parent}>
                <View style={styles.component3}>
                  <View style={styles.minimumParent}>
                    <Text style={[styles.minimum, styles.minimumTypo]}>
                      Minimum
                    </Text>
                    <Text style={[styles.off, styles.offText]}>OFF</Text>
                    <Text style={[styles.text, styles.offText]}>20%</Text>
                  </View>
                </View>
                <View style={styles.onAmazingDealsOffersCashParent}>
                  <Text
                    style={[
                      styles.onAmazingDealsContainer,
                      styles.bigBrandsFlexBox,
                    ]}
                  >
                    <Text style={styles.onAmazingDealsContainer1}>
                      <Text style={styles.onAmazing}>
                        <Text style={styles.onAmazing1}>On Amazing</Text>
                        <Text style={styles.text1}>{` `}</Text>
                      </Text>
                      <Text
                        style={[
                          styles.dealsOffersCashback,
                          styles.trendingCategoriesTypo,
                        ]}
                      >
                        Deals, Offers, Cashback
                      </Text>
                    </Text>
                  </Text>
                  <Text style={[styles.bigBrands, styles.bigBrandsFlexBox]}>
                    Big Brands
                  </Text>
                </View>
              </View>
              <PrimeBrands />
              <View>
                {mockHomeData.map((item) => {
                  return (
                    <DealsAndOffersSection key={item.sectionTitle} {...item} />
                  );
                })}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;
