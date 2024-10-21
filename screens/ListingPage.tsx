import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent2 from "../components/FrameComponent2";
import {
  Padding,
  Gap,
  Color,
  Border,
  FontFamily,
  FontSize,
} from "../GlobalStyles";

const ListingPage = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.listingPage}>
      <Image
        style={styles.subtractIcon}
        resizeMode="cover"
        source={require("../assets/subtract1.png")}
      />
      <FrameComponent3
        fashion="Fashion"
        onFramePressablePress={() => navigation.navigate("Categories")}
      />
      <View style={[styles.midRow, styles.midRowSpaceBlock]}>
        <View style={styles.midRowInner}>
          <View style={[styles.frameParent, styles.frameParentFlexBox]}>
            <View style={styles.frameGroup}>
              <View style={styles.frameContainer}>
                <View style={[styles.frameWrapper, styles.frameWrapperBg]}>
                  <View
                    style={[
                      styles.bodyShotOfADarkSkinnedFaWrapper,
                      styles.wrapperLayout,
                    ]}
                  >
                    <Image
                      style={styles.bodyShotOfADarkSkinnedFaIcon}
                      resizeMode="cover"
                      source={require("../assets/bodyshotofadarkskinnedfashionpng-1.png")}
                    />
                  </View>
                </View>
                <View style={[styles.allWrapper, styles.frameViewPosition]}>
                  <Text style={styles.all}>All</Text>
                </View>
              </View>
              <View style={[styles.frameView, styles.frameViewPosition]}>
                <View style={[styles.frameWrapper, styles.frameWrapperBg]}>
                  <View
                    style={[
                      styles.bodyShotOfADarkSkinnedFaWrapper,
                      styles.wrapperLayout,
                    ]}
                  >
                    <Image
                      style={styles.bodyShotOfADarkSkinnedFaIcon}
                      resizeMode="cover"
                      source={require("../assets/bodyshotofadarkskinnedfashionpng-1.png")}
                    />
                  </View>
                </View>
                <View style={[styles.allWrapper, styles.frameViewPosition]}>
                  <Text style={styles.all}>Women</Text>
                </View>
              </View>
              <View style={styles.frameParent1}>
                <View style={[styles.frameWrapper2, styles.frameWrapperBg]}>
                  <View
                    style={[
                      styles.bodyShotOfADarkSkinnedFaWrapper,
                      styles.wrapperLayout,
                    ]}
                  >
                    <Image
                      style={styles.bodyShotOfADarkSkinnedFaIcon}
                      resizeMode="cover"
                      source={require("../assets/bodyshotofadarkskinnedfashionpng-1.png")}
                    />
                  </View>
                </View>
                <View style={[styles.allWrapper, styles.frameViewPosition]}>
                  <Text style={styles.all}>Men</Text>
                </View>
              </View>
              <View style={styles.frameParent1}>
                <View style={[styles.frameWrapper2, styles.frameWrapperBg]}>
                  <View
                    style={[
                      styles.bodyShotOfADarkSkinnedFaWrapper,
                      styles.wrapperLayout,
                    ]}
                  >
                    <Image
                      style={styles.bodyShotOfADarkSkinnedFaIcon}
                      resizeMode="cover"
                      source={require("../assets/bodyshotofadarkskinnedfashionpng-1.png")}
                    />
                  </View>
                </View>
                <View style={[styles.allWrapper, styles.frameViewPosition]}>
                  <Text style={styles.all}>Kids</Text>
                </View>
              </View>
              <View style={styles.frameParent1}>
                <View style={[styles.frameWrapper2, styles.frameWrapperBg]}>
                  <View
                    style={[
                      styles.bodyShotOfADarkSkinnedFaWrapper,
                      styles.wrapperLayout,
                    ]}
                  >
                    <Image
                      style={styles.bodyShotOfADarkSkinnedFaIcon}
                      resizeMode="cover"
                      source={require("../assets/bodyshotofadarkskinnedfashionpng-1.png")}
                    />
                  </View>
                </View>
                <View style={[styles.allWrapper, styles.frameViewPosition]}>
                  <Text style={styles.all}>Summer</Text>
                </View>
              </View>
              <View style={styles.frameParent1}>
                <View style={[styles.frameWrapper2, styles.frameWrapperBg]}>
                  <View
                    style={[
                      styles.bodyShotOfADarkSkinnedFaWrapper,
                      styles.wrapperLayout,
                    ]}
                  >
                    <Image
                      style={styles.bodyShotOfADarkSkinnedFaIcon}
                      resizeMode="cover"
                      source={require("../assets/bodyshotofadarkskinnedfashionpng-1.png")}
                    />
                  </View>
                </View>
                <View style={[styles.allWrapper, styles.frameViewPosition]}>
                  <Text style={styles.all}>Winter</Text>
                </View>
              </View>
              <View style={styles.frameParent1}>
                <View style={[styles.frameWrapper2, styles.frameWrapperBg]}>
                  <View
                    style={[
                      styles.bodyShotOfADarkSkinnedFaWrapper,
                      styles.wrapperLayout,
                    ]}
                  >
                    <Image
                      style={styles.bodyShotOfADarkSkinnedFaIcon}
                      resizeMode="cover"
                      source={require("../assets/bodyshotofadarkskinnedfashionpng-1.png")}
                    />
                  </View>
                </View>
                <View style={[styles.allWrapper, styles.frameViewPosition]}>
                  <Text style={styles.all}>Men</Text>
                </View>
              </View>
              <View style={styles.frameParent1}>
                <View style={[styles.frameWrapper2, styles.frameWrapperBg]}>
                  <View
                    style={[
                      styles.bodyShotOfADarkSkinnedFaWrapper,
                      styles.wrapperLayout,
                    ]}
                  >
                    <Image
                      style={styles.bodyShotOfADarkSkinnedFaIcon}
                      resizeMode="cover"
                      source={require("../assets/bodyshotofadarkskinnedfashionpng-1.png")}
                    />
                  </View>
                </View>
                <View style={[styles.allWrapper, styles.frameViewPosition]}>
                  <Text style={styles.all}>Kids</Text>
                </View>
              </View>
              <View style={styles.frameParent1}>
                <View style={[styles.frameWrapper2, styles.frameWrapperBg]}>
                  <View
                    style={[
                      styles.bodyShotOfADarkSkinnedFaWrapper,
                      styles.wrapperLayout,
                    ]}
                  >
                    <Image
                      style={styles.bodyShotOfADarkSkinnedFaIcon}
                      resizeMode="cover"
                      source={require("../assets/bodyshotofadarkskinnedfashionpng-1.png")}
                    />
                  </View>
                </View>
                <View style={[styles.allWrapper, styles.frameViewPosition]}>
                  <Text style={styles.all}>Summer</Text>
                </View>
              </View>
              <View style={styles.frameParent1}>
                <View style={[styles.frameWrapper2, styles.frameWrapperBg]}>
                  <View
                    style={[
                      styles.bodyShotOfADarkSkinnedFaWrapper,
                      styles.wrapperLayout,
                    ]}
                  >
                    <Image
                      style={styles.bodyShotOfADarkSkinnedFaIcon}
                      resizeMode="cover"
                      source={require("../assets/bodyshotofadarkskinnedfashionpng-1.png")}
                    />
                  </View>
                </View>
                <View style={[styles.allWrapper, styles.frameViewPosition]}>
                  <Text style={styles.all}>Winter</Text>
                </View>
              </View>
            </View>
            <View style={[styles.frameParent9, styles.frameParentFlexBox]}>
              <View style={[styles.component2Wrapper, styles.wrapperLayout]}>
                <View style={styles.component2}>
                  <View style={[styles.image122Wrapper, styles.wrapperLayout]}>
                    <Image
                      style={styles.image122Icon}
                      resizeMode="cover"
                      source={require("../assets/image-1221.png")}
                    />
                  </View>
                  <View style={styles.ellipseParent}>
                    <Image
                      style={styles.frameChild}
                      resizeMode="cover"
                      source={require("../assets/ellipse-1.png")}
                    />
                    <Image
                      style={styles.frameChild}
                      resizeMode="cover"
                      source={require("../assets/ellipse-3.png")}
                    />
                    <Image
                      style={styles.frameChild}
                      resizeMode="cover"
                      source={require("../assets/ellipse-3.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.frameWrapper10}>
                <View style={[styles.frameParent10, styles.frameParentFlexBox]}>
                  <View
                    style={[
                      styles.filterSettingsSlidersIcon1Parent,
                      styles.sortByWrapperLayout,
                    ]}
                  >
                    <Image
                      style={styles.filterSettingsSlidersIcon1}
                      resizeMode="cover"
                      source={require("../assets/2738302-filter-settings-sliders-icon-1.png")}
                    />
                    <Text style={[styles.filter, styles.filterTypo]}>
                      Filter
                    </Text>
                  </View>
                  <View
                    style={[styles.sortByWrapper, styles.sortByWrapperLayout]}
                  >
                    <Text style={[styles.sortBy, styles.filterTypo]}>
                      Sort By
                    </Text>
                  </View>
                  <View
                    style={[styles.sortByWrapper, styles.sortByWrapperLayout]}
                  >
                    <Text style={[styles.sortBy, styles.filterTypo]}>
                      Brands
                    </Text>
                  </View>
                  <View
                    style={[styles.sortByWrapper, styles.sortByWrapperLayout]}
                  >
                    <Text style={[styles.sortBy, styles.filterTypo]}>
                      Local But Popular
                    </Text>
                  </View>
                  <View
                    style={[styles.sortByWrapper, styles.sortByWrapperLayout]}
                  >
                    <Text style={[styles.sortBy, styles.filterTypo]}>
                      GD Extra Discount
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.frameFlexBox}>
                <View style={styles.frameWrapper12}>
                  <View style={[styles.frameParent11, styles.frameFlexBox]}>
                    <FrameComponent5 />
                    <FrameComponent5 />
                    <FrameComponent5 />
                    <FrameComponent5 />
                    <FrameComponent6 uPTO="UPTO" />
                    <FrameComponent6 uPTO="UPTO" />
                    <FrameComponent6 uPTO="UPTO" />
                    <FrameComponent6 uPTO="UPTO" />
                    <FrameComponent6 uPTO="Flat" />
                    <FrameComponent6 uPTO="Flat" />
                    <FrameComponent6 uPTO="Flat" />
                    <FrameComponent6 uPTO="Flat" />
                    <FrameComponent7 />
                    <FrameComponent7 />
                    <FrameComponent7 />
                    <FrameComponent7 />
                  </View>
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
        summerSaleDiscountOffer={require("../assets/8689197-summer-sale-discount-offer-time-icon-11.png")}
        buyCartDiscountPriceSal={require("../assets/5726995-buy-cart-discount-price-sale-icon-1.png")}
        boxMoneyIcon1={require("../assets/172507-box-money-icon-12.png")}
        boxMoneyIcon11={require("../assets/172507-box-money-icon-13.png")}
        propFlex={1}
        propWidth="unset"
        propFlex1={1}
        propWidth1="unset"
        propFlex2={1}
        propWidth2="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  midRowSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xs,
  },
  frameParentFlexBox: {
    gap: Gap.gap_lg,
    flex: 1,
  },
  frameWrapperBg: {
    backgroundColor: Color.colorMistyrose,
    padding: Padding.p_9xs,
    alignItems: "center",
  },
  wrapperLayout: {
    borderRadius: Border.br_5xs,
    justifyContent: "center",
  },
  frameViewPosition: {
    borderBottomLeftRadius: Border.br_9xs,
    borderBottomRightRadius: Border.br_9xs,
    justifyContent: "center",
    backgroundColor: Color.colorWhite,
  },
  sortByWrapperLayout: {
    height: 18,
    borderRadius: Border.br_9xs,
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
  },
  filterTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_3xs,
  },
  frameFlexBox: {
    alignContent: "flex-start",
    flexWrap: "wrap",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  subtractIcon: {
    width: 430,
    height: 54,
    display: "none",
  },
  bodyShotOfADarkSkinnedFaIcon: {
    width: 25,
    height: 40,
  },
  bodyShotOfADarkSkinnedFaWrapper: {
    width: 40,
    alignItems: "center",
  },
  frameWrapper: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorMistyrose,
  },
  all: {
    fontSize: FontSize.size_4xs,
    letterSpacing: 1,
    lineHeight: 9,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  allWrapper: {
    width: 48,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_11xs,
    justifyContent: "center",
    alignItems: "center",
  },
  frameContainer: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    justifyContent: "center",
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorOrangered_100,
    borderBottomLeftRadius: Border.br_9xs,
    borderBottomRightRadius: Border.br_9xs,
    borderTopRightRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
  },
  frameView: {
    justifyContent: "center",
    borderTopRightRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_9xs,
  },
  frameWrapper2: {
    borderTopLeftRadius: Border.br_9xs,
    borderTopRightRadius: Border.br_9xs,
  },
  frameParent1: {
    justifyContent: "center",
  },
  frameGroup: {
    backgroundColor: "#f5f3f3",
    padding: Padding.p_9xs,
    borderRadius: Border.br_3xs,
    gap: Gap.gap_lg,
    alignSelf: "stretch",
  },
  image122Icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    alignSelf: "stretch",
    width: "100%",
    flex: 1,
  },
  image122Wrapper: {
    height: 120,
    overflow: "hidden",
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_5xs,
  },
  frameChild: {
    width: 8,
    height: 8,
  },
  ellipseParent: {
    backgroundColor: Color.colorOrangered_100,
    paddingHorizontal: Padding.p_5xs,
    marginTop: -4,
    borderRadius: Border.br_9xs,
    paddingVertical: Padding.p_11xs,
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.gap_xs,
  },
  component2: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  component2Wrapper: {
    overflow: "hidden",
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_5xs,
  },
  filterSettingsSlidersIcon1: {
    width: 14,
    height: 14,
    overflow: "hidden",
  },
  filter: {
    color: Color.colorOrangered_100,
  },
  filterSettingsSlidersIcon1Parent: {
    paddingHorizontal: Padding.p_9xs,
    paddingVertical: Padding.p_11xs,
    borderColor: Color.colorOrangered_100,
    height: 18,
    gap: Gap.gap_xs,
  },
  sortBy: {
    color: Color.colorBlack,
  },
  sortByWrapper: {
    backgroundColor: Color.colorWhitesmoke_100,
    borderColor: Color.colorLightslategray,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xs,
  },
  frameParent10: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameWrapper10: {
    borderRadius: 6,
    backgroundColor: "#f5f5f5",
    padding: Padding.p_7xs,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameParent11: {
    gap: Gap.gap_xl,
  },
  frameWrapper12: {
    alignItems: "center",
    flex: 1,
  },
  frameParent9: {
    borderBottomRightRadius: Border.br_19xl,
    borderBottomLeftRadius: Border.br_19xl,
  },
  frameParent: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  midRowInner: {
    alignSelf: "stretch",
    flex: 1,
  },
  midRow: {
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  listingPage: {
    height: 932,
    gap: Gap.gap_xs,
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default ListingPage;
