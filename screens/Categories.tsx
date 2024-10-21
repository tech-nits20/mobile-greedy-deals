import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent2 from "../components/FrameComponent2";
import {
  FontSize,
  FontFamily,
  Border,
  Color,
  Padding,
  Gap,
} from "../GlobalStyles";

const Categories = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.categories, styles.categoriesLayout]}>
      <Image
        style={styles.subtractIcon}
        resizeMode="cover"
        source={require("../assets/subtract2.png")}
      />
      <View style={styles.frameParent}>
        <FrameComponent3
          fashion="Categories"
          onFramePressablePress={() => navigation.navigate("MainApps1415Pro")}
        />
        <View style={styles.midRow}>
          <View style={styles.frameGroup}>
            <View style={styles.component2Wrapper}>
              <View style={styles.component2}>
                <View style={styles.component2Wrapper}>
                  <Image
                    style={[styles.image122Icon, styles.categoriesLayout]}
                    resizeMode="cover"
                    source={require("../assets/image-1222.png")}
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
          <View style={styles.categoriesPageParent}>
            <Text style={styles.categoriesPage}>Categories Page</Text>
            <Text style={[styles.loremIpsumIsSimply, styles.womenFashionTypo]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.
            </Text>
          </View>
          <View style={styles.frameContainer}>
            <View style={styles.frameView}>
              <View style={styles.fashionParent}>
                <Pressable onPress={() => navigation.navigate("ListingPage")}>
                  <Text style={styles.fashion1Typo}>Fashion</Text>
                </Pressable>
                <View style={styles.lineView} />
              </View>
              <View style={styles.frameParent1}>
                <Pressable
                  style={styles.framePressable}
                  onPress={() => navigation.navigate("ListingPage")}
                >
                  <View style={styles.frameWrapper}>
                    <View style={styles.bodyShotOfADarkSkinnedFaWrapper}>
                      <Image
                        style={styles.bodyShotOfADarkSkinnedFaIcon}
                        resizeMode="cover"
                        source={require("../assets/bodyshotofadarkskinnedfashionpng-11.png")}
                      />
                    </View>
                  </View>
                  <View style={styles.womenFashionWrapper}>
                    <Text
                      style={[styles.womenFashion, styles.womenFashionTypo]}
                    >{`Women
Fashion`}</Text>
                  </View>
                </Pressable>
                <FrameComponent4
                  menFashion={`Men
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Kids
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Su
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Summer
Fashion`}
                />
              </View>
            </View>
            <View style={styles.frameView}>
              <View style={styles.fashionParent}>
                <Text style={styles.fashion1Typo}>{`Hotels &  Dining`}</Text>
                <View style={styles.lineView} />
              </View>
              <View style={styles.frameParent1}>
                <FrameComponent4
                  menFashion={`Women
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Men
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Kids
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Su
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Summer
Fashion`}
                />
              </View>
            </View>
            <View style={styles.frameView}>
              <View style={styles.fashionParent}>
                <Text
                  style={styles.fashion1Typo}
                >{`Hospital & Diagnosis`}</Text>
                <View style={styles.lineView} />
              </View>
              <View style={styles.frameParent1}>
                <FrameComponent4
                  menFashion={`Women
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Men
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Kids
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Su
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Summer
Fashion`}
                />
              </View>
            </View>
            <View style={styles.frameView}>
              <View style={styles.fashionParent}>
                <Text style={styles.fashion1Typo}>Electronics</Text>
                <View style={styles.lineView} />
              </View>
              <View style={styles.frameParent1}>
                <FrameComponent4
                  menFashion={`Women
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Men
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Kids
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Su
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Summer
Fashion`}
                />
              </View>
            </View>
            <View style={styles.frameView}>
              <View style={styles.fashionParent}>
                <Text style={styles.fashion1Typo}>{`Beauty & Spa`}</Text>
                <View style={styles.lineView} />
              </View>
              <View style={styles.frameParent1}>
                <FrameComponent4
                  menFashion={`Women
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Men
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Kids
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Su
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Summer
Fashion`}
                />
              </View>
            </View>
            <View style={styles.frameView}>
              <View style={styles.fashionParent}>
                <Text style={styles.fashion1Typo}>Golds</Text>
                <View style={styles.lineView} />
              </View>
              <View style={styles.frameParent1}>
                <FrameComponent4
                  menFashion={`Women
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Men
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Kids
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Su
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Summer
Fashion`}
                />
              </View>
            </View>
            <View style={styles.frameView}>
              <View style={styles.fashionParent}>
                <Text style={styles.fashion1Typo}>Real State</Text>
                <View style={styles.lineView} />
              </View>
              <View style={styles.frameParent1}>
                <FrameComponent4
                  menFashion={`Women
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Men
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Kids
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Su
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Summer
Fashion`}
                />
              </View>
            </View>
            <View style={styles.frameView}>
              <View style={styles.fashionParent}>
                <Text style={styles.fashion1Typo}>Automobile</Text>
                <View style={styles.lineView} />
              </View>
              <View style={styles.frameParent1}>
                <FrameComponent4
                  menFashion={`Women
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Men
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Kids
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Su
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Summer
Fashion`}
                />
              </View>
            </View>
            <View style={styles.frameView}>
              <View style={styles.fashionParent}>
                <Text style={styles.fashion1Typo}>Entertainment</Text>
                <View style={styles.lineView} />
              </View>
              <View style={styles.frameParent1}>
                <FrameComponent4
                  menFashion={`Women
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Men
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Kids
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Su
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Summer
Fashion`}
                />
              </View>
            </View>
            <View style={styles.frameView}>
              <View style={styles.fashionParent}>
                <Text style={styles.fashion1Typo}>{`Tour & Travels`}</Text>
                <View style={styles.lineView} />
              </View>
              <View style={styles.frameParent1}>
                <FrameComponent4
                  menFashion={`Women
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Men
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Kids
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Su
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Summer
Fashion`}
                />
              </View>
            </View>
            <View style={styles.frameView}>
              <View style={styles.fashionParent}>
                <Text
                  style={styles.fashion1Typo}
                >{`Education & Training`}</Text>
                <View style={styles.lineView} />
              </View>
              <View style={styles.frameParent1}>
                <FrameComponent4
                  menFashion={`Women
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Men
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Kids
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Su
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Summer
Fashion`}
                />
              </View>
            </View>
            <View style={styles.frameView}>
              <View style={styles.fashionParent}>
                <Text style={styles.fashion1Typo}>Others</Text>
                <View style={styles.lineView} />
              </View>
              <View style={styles.frameParent1}>
                <FrameComponent4
                  menFashion={`Women
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Men
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Kids
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Su
Fashion`}
                />
                <FrameComponent4
                  menFashion={`Summer
Fashion`}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <FrameComponent2
        categoryVarietyRandomShu={require("../assets/7148740-category-variety-random-shuffle-icon-11.png")}
        bxsGiftIcon1={require("../assets/9055471-bxs-gift-icon-11.png")}
        giftboxGiftPresentIcon1={require("../assets/9133526-giftbox-gift-present-icon-11.png")}
        summerSaleDiscountOffer={require("../assets/8689197-summer-sale-discount-offer-time-icon-12.png")}
        buyCartDiscountPriceSal={require("../assets/5726995-buy-cart-discount-price-sale-icon-11.png")}
        boxMoneyIcon1={require("../assets/172507-box-money-icon-12.png")}
        boxMoneyIcon11={require("../assets/172507-box-money-icon-13.png")}
        propWidth={55}
        propWidth1={68}
        propWidth2={87}
      />
      <View style={styles.categoriesChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesLayout: {
    width: "100%",
    flex: 1,
  },
  womenFashionTypo: {
    textAlign: "center",
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.poppinsRegular,
    alignSelf: "stretch",
  },
  subtractIcon: {
    width: 430,
    height: 182,
    display: "none",
    borderRadius: Border.br_5xs,
  },
  image122Icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    alignSelf: "stretch",
  },
  component2Wrapper: {
    height: 120,
    flexDirection: "row",
    overflow: "hidden",
    justifyContent: "center",
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
  },
  frameChild: {
    width: 8,
    height: 8,
  },
  ellipseParent: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorOrangered_100,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_11xs,
    gap: Gap.gap_xs,
    marginTop: -4,
    flexDirection: "row",
    alignItems: "center",
  },
  component2: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  frameGroup: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  categoriesPage: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
  },
  loremIpsumIsSimply: {
    lineHeight: 18,
    color: Color.colorDimgray_100,
  },
  categoriesPageParent: {
    padding: Padding.p_3xs,
    overflow: "hidden",
    gap: Gap.gap_lg,
    alignItems: "center",
    alignSelf: "stretch",
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
  },
  fashion1Typo: {
    color: Color.colorOrangered_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  lineView: {
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderTopWidth: 1,
    width: 411,
    height: 1,
  },
  fashionParent: {
    gap: Gap.gap_2xs,
    justifyContent: "center",
    alignItems: "center",
  },
  bodyShotOfADarkSkinnedFaIcon: {
    width: 44,
    height: 70,
  },
  bodyShotOfADarkSkinnedFaWrapper: {
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_5xs,
  },
  frameWrapper: {
    backgroundColor: Color.colorMistyrose,
    height: 84,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    borderRadius: Border.br_5xs,
  },
  womenFashion: {
    lineHeight: 12,
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
  },
  womenFashionWrapper: {
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    width: 84,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
  },
  framePressable: {
    width: 95,
    justifyContent: "center",
    gap: Gap.gap_lg,
  },
  frameParent1: {
    flexDirection: "row",
    gap: Gap.gap_lg,
    alignSelf: "stretch",
  },
  frameView: {
    gap: Gap.gap_xl,
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameContainer: {
    width: 410,
    gap: 32,
    overflow: "hidden",
  },
  midRow: {
    zIndex: 0,
    gap: Gap.gap_lg,
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  frameParent: {
    alignSelf: "stretch",
    flex: 1,
  },
  categoriesChild: {
    alignSelf: "stretch",
    display: "none",
    flex: 1,
  },
  categories: {
    height: 932,
    backgroundColor: Color.colorWhite,
  },
});

export default Categories;
