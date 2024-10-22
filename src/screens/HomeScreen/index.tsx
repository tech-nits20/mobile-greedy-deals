import * as React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import FrameComponent8 from "../../components/FrameComponent8";
import FrameComponent from "../../components/FrameComponent";
import FrameComponent1 from "../../components/FrameComponent1";
import TopAppBar from "../../components/TopAppBar";
import BottomTabBar from "../../components/BottomTabBar";
import { styles } from "./styles";
import HomeSections from "../../components/HomeSections";

const HomeScreen = () => {
  return (
    <>
      <TopAppBar/>
      <ScrollView style={styles.mainApps1415Pro}>
        <View style={styles.locationUserBarParent}>
          <View style={styles.midRow}>
            {/* <FrameComponent8 /> */}
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
              <View style={styles.frameGroup}>
                <View style={styles.primeBrandsParent}>
                  <Text style={[styles.primeBrands, styles.primeBrandsTypo]}>
                    Prime Brands
                  </Text>
                  <View style={styles.frameChild} />
                </View>
                <View style={styles.frameContainer}>
                  <FrameComponent
                    adidasLogosvg1={require("../../../assets/adidas-logosvg-1.png")}
                    off="90% Off"
                    allTypeOfShoes="All type of Shoes"
                  />
                  <View style={styles.frameWrapper}>
                    <View style={styles.frameView}>
                      <View
                        style={[
                          styles.uwlrjrAq9ti0pc1Wrapper,
                          styles.parentFlexBox1,
                        ]}
                      >
                        <Image
                          style={styles.uwlrjrAq9ti0pc1Icon}
                          resizeMode="cover"
                          source={require("../../../assets/0-uwlrjr-aq9ti0pc-1.png")}
                        />
                      </View>
                      <View
                        style={[styles.buy1Get1Parent, styles.parentFlexBox]}
                      >
                        <Text style={[styles.buy1Get, styles.offTypo]}>
                          Buy 1 Get 1
                        </Text>
                        <Text
                          style={[styles.babySopa, styles.offersTypo]}
                        >{`Baby sopa & shampoo`}</Text>
                      </View>
                    </View>
                  </View>
                  <FrameComponent
                    adidasLogosvg1={require("../../../assets/myntra1200x900-1.png")}
                    off="30% Cashback"
                    allTypeOfShoes={`Baby sopa & shampoo`}
                    propBackgroundColor="rgba(255, 0, 151, 0.1)"
                    propWidth={40}
                  />
                </View>
              </View>
              <View style={styles.frameParent1}>
                <View style={styles.lineParent}>
                  <View style={[styles.frameItem, styles.frameLayout1]} />
                  <View
                    style={[
                      styles.trendingCategoriesParent,
                      styles.frameWrapper1Border,
                    ]}
                  >
                    <Text
                      style={[
                        styles.trendingCategories,
                        styles.trendingCategoriesTypo,
                      ]}
                    >
                      Trending Categories
                    </Text>
                    <Image
                      style={styles.plusIcon1}
                      resizeMode="cover"
                      source={require("../../../assets/216373-plus-icon-1.png")}
                    />
                  </View>
                  <View style={[styles.frameInner, styles.frameLayout1]} />
                </View>
                <View
                  style={[
                    styles.discountsAndOffersParent,
                    styles.parentFlexBox1,
                  ]}
                >
                  <Text
                    style={[styles.discountsAndOffers, styles.minimumTypo1]}
                  >
                    Discounts and Offers
                  </Text>
                  <View style={styles.frameChild} />
                </View>
                <View style={styles.frameParent2}>
                  <View style={styles.frameParent3}>
                    <FrameComponent1
                      flipkartLogoFDAASeeklogoc={require("../../../assets/flipkartlogo3f33927daaseeklogocom-1.png")}
                      off="20% Off"
                      offers="1005 offers"
                    />
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
                  <View style={styles.frameParent3}>
                    <FrameComponent1
                      flipkartLogoFDAASeeklogoc={require("../../../assets/amazonlogoamazonicontransparentfreepng-1.png")}
                      off="30% Off"
                      offers="1500 offers"
                      propBackgroundColor="rgba(248, 152, 29, 0.1)"
                      propWidth={87}
                      propHeight={30}
                      propFontSize={12}
                    />
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
                  <View style={styles.frameParent3}>
                    <FrameComponent1
                      flipkartLogoFDAASeeklogoc={require("../../../assets/freenykaalogoicondownloadinsvgpnggiffileformatscosmeticsmakeupbeautyfashioncarebrandpacklogosicons2822953-1.png")}
                      off="Buy 2 Get 3"
                      offers="1005 offers"
                      propBackgroundColor="rgba(252, 39, 121, 0.1)"
                      propWidth={69}
                      propHeight={30}
                      propFontSize={12}
                    />
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
                  <View style={styles.frameParent3}>
                    <FrameComponent1
                      flipkartLogoFDAASeeklogoc={require("../../../assets/ajiologo-1.png")}
                      off="500 Cashback"
                      offers="1005 offers"
                      propBackgroundColor="rgba(73, 89, 105, 0.1)"
                      propWidth={56}
                      propHeight={20}
                      propFontSize={12}
                    />
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
              </View>
              <View style={styles.frameGroup}>
                <View
                  style={[
                    styles.discountsAndOffersParent,
                    styles.parentFlexBox1,
                  ]}
                >
                  <Text
                    style={[styles.discountsAndOffers, styles.minimumTypo1]}
                  >
                    Most Popular Deals
                  </Text>
                  <View style={styles.frameChild} />
                </View>
                <View style={styles.frameParent2}>
                  <View style={styles.frameParent3}>
                    <View
                      style={[styles.frameWrapper1, styles.frameWrapper1Border]}
                    >
                      <View
                        style={[styles.frameParent10, styles.parentFlexBox1]}
                      >
                        <View
                          style={[
                            styles.adidasLogosvg1Parent,
                            styles.parentFlexBox1,
                          ]}
                        >
                          <Image
                            style={styles.adidasLogosvg1Icon}
                            resizeMode="cover"
                            source={require("../../../assets/adidas-logosvg-11.png")}
                          />
                          <Image
                            style={styles.zomatoLogosvg1Icon}
                            resizeMode="cover"
                            source={require("../../../assets/zomato-logosvg-1.png")}
                          />
                        </View>
                        <View style={[styles.offParent, styles.parentFlexBox]}>
                          <Text style={[styles.buy1Get, styles.offTypo]}>
                            90% Off
                          </Text>
                          <Text style={[styles.offers, styles.offersTypo]}>
                            1005 offers
                          </Text>
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
                  <View style={styles.frameParent3}>
                    <FrameComponent1
                      flipkartLogoFDAASeeklogoc={require("../../../assets/dominoslogo-1.png")}
                      off="Buy 2 at ₹400"
                      offers="1005 offers"
                      propBackgroundColor="rgba(1, 126, 180, 0.1)"
                      propWidth={53}
                      propHeight={30}
                      propFontSize={14}
                    />
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
                  <View style={styles.frameParent3}>
                    <FrameComponent1
                      flipkartLogoFDAASeeklogoc={require("../../../assets/swiggylogo-1.png")}
                      off="90% Off"
                      offers="1005 offers"
                      propBackgroundColor="rgba(255, 135, 2, 0.1)"
                      propWidth={53}
                      propHeight={30}
                      propFontSize={14}
                    />
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
                  <View style={styles.frameParent3}>
                    <FrameComponent1
                      flipkartLogoFDAASeeklogoc={require("../../../assets/pngimgcom--kfc-png53-1.png")}
                      off="₹300 Off"
                      offers="1005 offers"
                      propBackgroundColor="rgba(196, 18, 47, 0.1)"
                      propWidth={80}
                      propHeight={38}
                      propFontSize={14}
                    />
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
              </View>
              <View style={styles.frameGroup}>
                <View
                  style={[
                    styles.discountsAndOffersParent,
                    styles.parentFlexBox1,
                  ]}
                >
                  <Text
                    style={[styles.discountsAndOffers, styles.minimumTypo1]}
                  >
                    Beauty Deals
                  </Text>
                  <View style={styles.frameChild} />
                </View>
                <View style={styles.frameParent2}>
                  <View style={styles.frameParent3}>
                    <FrameComponent1
                      flipkartLogoFDAASeeklogoc={require("../../../assets/lakmelogo-1.png")}
                      off="90% Off"
                      offers="1005 offers"
                      propBackgroundColor="rgba(0, 0, 0, 0.1)"
                      propWidth={53}
                      propHeight={30}
                      propFontSize={14}
                    />
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
                  <View style={styles.frameParent3}>
                    <FrameComponent1
                      flipkartLogoFDAASeeklogoc={require("../../../assets/freenykaalogoicondownloadinsvgpnggiffileformatscosmeticsmakeupbeautyfashioncarebrandpacklogosicons2822953-1.png")}
                      off="Buy 2 at ₹400"
                      offers="1005 offers"
                      propBackgroundColor="rgba(252, 39, 122, 0.1)"
                      propWidth={69}
                      propHeight={30}
                      propFontSize={14}
                    />
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
                  <View style={styles.frameParent3}>
                    <FrameComponent1
                      flipkartLogoFDAASeeklogoc={require("../../../assets/pondslogo2-1.png")}
                      off="90% Off"
                      offers="1005 offers"
                      propBackgroundColor="rgba(236, 0, 140, 0.1)"
                      propWidth={74}
                      propHeight={30}
                      propFontSize={14}
                    />
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
                  <View style={styles.frameParent3}>
                    <FrameComponent1
                      flipkartLogoFDAASeeklogoc={require("../../../assets/images-1.png")}
                      off="₹300 Off"
                      offers="1005 offers"
                      propBackgroundColor="rgba(231, 0, 130, 0.1)"
                      propWidth={31}
                      propHeight={30}
                      propFontSize={14}
                    />
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
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomTabBar />
    </>
  );
};

export default HomeScreen;
