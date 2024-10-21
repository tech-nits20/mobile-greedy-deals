import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import LocationUserBar from "../components/LocationUserBar";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import {
  FontFamily,
  Color,
  FontSize,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";

const MainApps1415Pro = () => {
  return (
    <View style={styles.mainApps1415Pro}>
      <View style={styles.locationUserBarParent}>
        <LocationUserBar />
        <View style={styles.midRow}>
          <FrameComponent8 />
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
                  adidasLogosvg1={require("../assets/adidas-logosvg-1.png")}
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
                        source={require("../assets/0-uwlrjr-aq9ti0pc-1.png")}
                      />
                    </View>
                    <View style={[styles.buy1Get1Parent, styles.parentFlexBox]}>
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
                  adidasLogosvg1={require("../assets/myntra1200x900-1.png")}
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
                    source={require("../assets/216373-plus-icon-1.png")}
                  />
                </View>
                <View style={[styles.frameInner, styles.frameLayout1]} />
              </View>
              <View
                style={[styles.discountsAndOffersParent, styles.parentFlexBox1]}
              >
                <Text style={[styles.discountsAndOffers, styles.minimumTypo1]}>
                  Discounts and Offers
                </Text>
                <View style={styles.frameChild} />
              </View>
              <View style={styles.frameParent2}>
                <View style={styles.frameParent3}>
                  <FrameComponent1
                    flipkartLogoFDAASeeklogoc={require("../assets/flipkartlogo3f33927daaseeklogocom-1.png")}
                    off="20% Off"
                    offers="1005 offers"
                  />
                  <Image
                    style={[styles.frameIcon, styles.frameLayout]}
                    resizeMode="cover"
                    source={require("../assets/frame-1068.png")}
                  />
                  <Image
                    style={[styles.frameChild1, styles.frameLayout]}
                    resizeMode="cover"
                    source={require("../assets/frame-1069.png")}
                  />
                </View>
                <View style={styles.frameParent3}>
                  <FrameComponent1
                    flipkartLogoFDAASeeklogoc={require("../assets/amazonlogoamazonicontransparentfreepng-1.png")}
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
                    source={require("../assets/frame-1068.png")}
                  />
                  <Image
                    style={[styles.frameChild1, styles.frameLayout]}
                    resizeMode="cover"
                    source={require("../assets/frame-1069.png")}
                  />
                </View>
                <View style={styles.frameParent3}>
                  <FrameComponent1
                    flipkartLogoFDAASeeklogoc={require("../assets/freenykaalogoicondownloadinsvgpnggiffileformatscosmeticsmakeupbeautyfashioncarebrandpacklogosicons2822953-1.png")}
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
                    source={require("../assets/frame-1068.png")}
                  />
                  <Image
                    style={[styles.frameChild1, styles.frameLayout]}
                    resizeMode="cover"
                    source={require("../assets/frame-1069.png")}
                  />
                </View>
                <View style={styles.frameParent3}>
                  <FrameComponent1
                    flipkartLogoFDAASeeklogoc={require("../assets/ajiologo-1.png")}
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
                    source={require("../assets/frame-1068.png")}
                  />
                  <Image
                    style={[styles.frameChild1, styles.frameLayout]}
                    resizeMode="cover"
                    source={require("../assets/frame-1069.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.frameGroup}>
              <View
                style={[styles.discountsAndOffersParent, styles.parentFlexBox1]}
              >
                <Text style={[styles.discountsAndOffers, styles.minimumTypo1]}>
                  Most Popular Deals
                </Text>
                <View style={styles.frameChild} />
              </View>
              <View style={styles.frameParent2}>
                <View style={styles.frameParent3}>
                  <View
                    style={[styles.frameWrapper1, styles.frameWrapper1Border]}
                  >
                    <View style={[styles.frameParent10, styles.parentFlexBox1]}>
                      <View
                        style={[
                          styles.adidasLogosvg1Parent,
                          styles.parentFlexBox1,
                        ]}
                      >
                        <Image
                          style={styles.adidasLogosvg1Icon}
                          resizeMode="cover"
                          source={require("../assets/adidas-logosvg-11.png")}
                        />
                        <Image
                          style={styles.zomatoLogosvg1Icon}
                          resizeMode="cover"
                          source={require("../assets/zomato-logosvg-1.png")}
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
                    source={require("../assets/frame-1068.png")}
                  />
                  <Image
                    style={[styles.frameChild1, styles.frameLayout]}
                    resizeMode="cover"
                    source={require("../assets/frame-1069.png")}
                  />
                </View>
                <View style={styles.frameParent3}>
                  <FrameComponent1
                    flipkartLogoFDAASeeklogoc={require("../assets/dominoslogo-1.png")}
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
                    source={require("../assets/frame-1068.png")}
                  />
                  <Image
                    style={[styles.frameChild1, styles.frameLayout]}
                    resizeMode="cover"
                    source={require("../assets/frame-1069.png")}
                  />
                </View>
                <View style={styles.frameParent3}>
                  <FrameComponent1
                    flipkartLogoFDAASeeklogoc={require("../assets/swiggylogo-1.png")}
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
                    source={require("../assets/frame-1068.png")}
                  />
                  <Image
                    style={[styles.frameChild1, styles.frameLayout]}
                    resizeMode="cover"
                    source={require("../assets/frame-1069.png")}
                  />
                </View>
                <View style={styles.frameParent3}>
                  <FrameComponent1
                    flipkartLogoFDAASeeklogoc={require("../assets/pngimgcom--kfc-png53-1.png")}
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
                    source={require("../assets/frame-1068.png")}
                  />
                  <Image
                    style={[styles.frameChild1, styles.frameLayout]}
                    resizeMode="cover"
                    source={require("../assets/frame-1069.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.frameGroup}>
              <View
                style={[styles.discountsAndOffersParent, styles.parentFlexBox1]}
              >
                <Text style={[styles.discountsAndOffers, styles.minimumTypo1]}>
                  Beauty Deals
                </Text>
                <View style={styles.frameChild} />
              </View>
              <View style={styles.frameParent2}>
                <View style={styles.frameParent3}>
                  <FrameComponent1
                    flipkartLogoFDAASeeklogoc={require("../assets/lakmelogo-1.png")}
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
                    source={require("../assets/frame-1068.png")}
                  />
                  <Image
                    style={[styles.frameChild1, styles.frameLayout]}
                    resizeMode="cover"
                    source={require("../assets/frame-1069.png")}
                  />
                </View>
                <View style={styles.frameParent3}>
                  <FrameComponent1
                    flipkartLogoFDAASeeklogoc={require("../assets/freenykaalogoicondownloadinsvgpnggiffileformatscosmeticsmakeupbeautyfashioncarebrandpacklogosicons2822953-1.png")}
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
                    source={require("../assets/frame-1068.png")}
                  />
                  <Image
                    style={[styles.frameChild1, styles.frameLayout]}
                    resizeMode="cover"
                    source={require("../assets/frame-1069.png")}
                  />
                </View>
                <View style={styles.frameParent3}>
                  <FrameComponent1
                    flipkartLogoFDAASeeklogoc={require("../assets/pondslogo2-1.png")}
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
                    source={require("../assets/frame-1068.png")}
                  />
                  <Image
                    style={[styles.frameChild1, styles.frameLayout]}
                    resizeMode="cover"
                    source={require("../assets/frame-1069.png")}
                  />
                </View>
                <View style={styles.frameParent3}>
                  <FrameComponent1
                    flipkartLogoFDAASeeklogoc={require("../assets/images-1.png")}
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
                    source={require("../assets/frame-1068.png")}
                  />
                  <Image
                    style={[styles.frameChild1, styles.frameLayout]}
                    resizeMode="cover"
                    source={require("../assets/frame-1069.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <FrameComponent2
        categoryVarietyRandomShu={require("../assets/7148740-category-variety-random-shuffle-icon-1.png")}
        bxsGiftIcon1={require("../assets/9055471-bxs-gift-icon-1.png")}
        giftboxGiftPresentIcon1={require("../assets/9133526-giftbox-gift-present-icon-1.png")}
        summerSaleDiscountOffer={require("../assets/8689197-summer-sale-discount-offer-time-icon-1.png")}
        buyCartDiscountPriceSal={require("../assets/5726995-buy-cart-discount-price-sale-icon-1.png")}
        boxMoneyIcon1={require("../assets/172507-box-money-icon-1.png")}
        boxMoneyIcon11={require("../assets/172507-box-money-icon-11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  minimumTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  offText: {
    textShadowRadius: 2,
    textShadowOffset: {
      width: 0,
      height: 3,
    },
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    color: Color.colorGold,
    textAlign: "left",
    position: "absolute",
  },
  bigBrandsFlexBox: {
    display: "flex",
    textAlign: "left",
    left: 0,
    position: "absolute",
    alignItems: "center",
  },
  trendingCategoriesTypo: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    color: Color.colorOrangered_100,
  },
  primeBrandsTypo: {
    fontSize: FontSize.size_lg,
    letterSpacing: 1,
  },
  parentFlexBox1: {
    justifyContent: "center",
    alignItems: "center",
  },
  parentFlexBox: {
    gap: Gap.gap_2xs,
    alignSelf: "stretch",
  },
  offTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  offersTypo: {
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    letterSpacing: 1,
    alignSelf: "stretch",
  },
  frameLayout1: {
    width: 121,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
  },
  frameWrapper1Border: {
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
  },
  minimumTypo1: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  frameLayout: {
    height: 16,
    width: 16,
    top: 72,
    position: "absolute",
  },
  minimum: {
    top: 0,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    left: 0,
    position: "absolute",
  },
  off: {
    left: 112,
    fontSize: 20,
    transform: [
      {
        rotate: "90deg",
      },
    ],
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: 25,
  },
  text: {
    top: 20,
    fontSize: 40,
    lineHeight: 40,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    left: 0,
  },
  minimumParent: {
    height: 62,
    width: 112,
  },
  component3: {
    top: 16,
    left: 273,
    height: 57,
    alignItems: "flex-end",
    justifyContent: "space-between",
    width: 112,
    position: "absolute",
  },
  onAmazing1: {
    color: Color.colorBlack,
  },
  text1: {
    color: Color.colorWhite,
  },
  onAmazing: {
    fontFamily: FontFamily.poppinsRegular,
  },
  dealsOffersCashback: {
    color: Color.colorOrangered_100,
  },
  onAmazingDealsContainer1: {
    width: "100%",
  },
  onAmazingDealsContainer: {
    top: 47,
    width: 371,
    letterSpacing: 1,
    fontSize: FontSize.size_lg,
  },
  bigBrands: {
    top: -6,
    fontSize: 36,
    width: 217,
    color: Color.colorOrangered_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  onAmazingDealsOffersCashParent: {
    left: 24,
    width: 359,
    height: 83,
    top: 25,
    position: "absolute",
  },
  component3Parent: {
    width: 408,
    height: 108,
  },
  primeBrands: {
    lineHeight: 20,
    color: Color.colorOrangered_100,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 1,
    textAlign: "left",
  },
  frameChild: {
    width: 411,
    height: 1,
    borderTopWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
  },
  primeBrandsParent: {
    gap: Gap.gap_lg,
    alignItems: "center",
  },
  uwlrjrAq9ti0pc1Icon: {
    width: 42,
    height: 6,
  },
  uwlrjrAq9ti0pc1Wrapper: {
    height: 64,
    width: 64,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
  },
  buy1Get: {
    lineHeight: 18,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
  },
  babySopa: {
    lineHeight: 12,
    textAlign: "left",
  },
  buy1Get1Parent: {
    paddingTop: Padding.p_9xs,
    flex: 1,
  },
  frameView: {
    gap: Gap.gap_md,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  frameWrapper: {
    backgroundColor: "rgba(129, 195, 65, 0.1)",
    width: 200,
    padding: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    overflow: "hidden",
  },
  frameContainer: {
    flexDirection: "row",
    gap: Gap.gap_lg,
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameGroup: {
    gap: Gap.gap_lg,
    alignSelf: "stretch",
  },
  frameItem: {
    borderColor: Color.colorGray_200,
    width: 121,
  },
  trendingCategories: {
    fontSize: FontSize.size_xs,
    color: Color.colorOrangered_100,
    textAlign: "left",
  },
  plusIcon1: {
    width: 12,
    height: 12,
    overflow: "hidden",
  },
  trendingCategoriesParent: {
    borderRadius: Border.br_81xl,
    paddingHorizontal: 12,
    paddingVertical: Padding.p_9xs,
    gap: Gap.gap_xs,
    borderColor: Color.colorGainsboro_200,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  frameInner: {
    borderColor: Color.colorGainsboro_200,
  },
  lineParent: {
    gap: 1,
    display: "none",
    flexDirection: "row",
    alignItems: "center",
  },
  discountsAndOffers: {
    lineHeight: 16,
    color: Color.colorOrangered_100,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 1,
    textAlign: "left",
  },
  discountsAndOffersParent: {
    gap: Gap.gap_lg,
  },
  frameIcon: {
    left: -8,
    zIndex: 1,
  },
  frameChild1: {
    left: 120,
    zIndex: 2,
  },
  frameParent3: {
    flexDirection: "row",
    gap: Gap.gap_lg,
    alignItems: "center",
  },
  frameParent2: {
    flexDirection: "row",
    gap: Gap.gap_lg,
    alignSelf: "stretch",
  },
  frameParent1: {
    gap: Gap.gap_lg,
    alignItems: "center",
    alignSelf: "stretch",
  },
  adidasLogosvg1Icon: {
    width: 43,
    height: 30,
    display: "none",
  },
  zomatoLogosvg1Icon: {
    width: 80,
    height: 17,
  },
  adidasLogosvg1Parent: {
    height: 64,
    width: 64,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    gap: Gap.gap_lg,
  },
  offers: {
    lineHeight: 14,
    textAlign: "center",
  },
  offParent: {
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    borderStyle: "dashed",
    borderRadius: 0.001,
    borderTopWidth: 0.5,
    height: 48,
    borderColor: Color.colorGainsboro_300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  frameParent10: {
    paddingTop: Padding.p_5xs,
    gap: Gap.gap_sm,
    alignSelf: "stretch",
    flex: 1,
  },
  frameWrapper1: {
    backgroundColor: "rgba(226, 55, 68, 0.1)",
    width: 128,
    height: 128,
    zIndex: 0,
    borderColor: Color.colorGainsboro_300,
    borderRadius: Border.br_5xs,
  },
  frameParent: {
    gap: Gap.gap_xl,
    marginTop: -25,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  midRow: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    marginTop: -1,
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  locationUserBarParent: {
    zIndex: 1,
    alignSelf: "stretch",
    flex: 1,
  },
  mainApps1415Pro: {
    height: 932,
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default MainApps1415Pro;
