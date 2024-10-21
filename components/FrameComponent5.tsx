import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Padding,
  Gap,
} from "../GlobalStyles";

const FrameComponent5 = () => {
  return (
    <View style={styles.frameParent}>
      <View style={[styles.frameWrapper, styles.wrapperLayout]}>
        <View style={[styles.image1873881918Wrapper, styles.wrapperLayout]}>
          <Image
            style={[
              styles.image1873881918Icon,
              styles.image1873881918IconFlexBox,
            ]}
            resizeMode="cover"
            source={require("../assets/image-1873881918.png")}
          />
        </View>
      </View>
      <View style={styles.vectorParent}>
        <Image
          style={[styles.frameChild, styles.framePosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-448.png")}
        />
        <Image
          style={[styles.frameItem, styles.framePosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-446.png")}
        />
        <Text style={[styles.buy1, styles.buy1Clr]}>Buy 1</Text>
        <Text style={[styles.get2, styles.get2Typo]}>Get 2</Text>
        <Text style={[styles.free, styles.get2Typo]}>Free</Text>
      </View>
      <View style={styles.sreeVenkateswaraSareesWrapper}>
        <Text
          style={[
            styles.sreeVenkateswaraSarees,
            styles.image1873881918IconFlexBox,
          ]}
          numberOfLines={1}
        >
          Sree Venkateswara sarees
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    borderRadius: Border.br_5xs,
    alignItems: "center",
  },
  image1873881918IconFlexBox: {
    overflow: "hidden",
    alignSelf: "stretch",
  },
  framePosition: {
    left: 5,
    position: "absolute",
  },
  buy1Clr: {
    color: Color.colorWhite,
    lineHeight: 10,
    top: 4,
  },
  get2Typo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    textTransform: "uppercase",
    position: "absolute",
  },
  image1873881918Icon: {
    maxWidth: "100%",
    height: 50,
    width: "100%",
  },
  image1873881918Wrapper: {
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  frameWrapper: {
    backgroundColor: Color.colorGainsboro_100,
    height: 84,
    justifyContent: "space-between",
    zIndex: 0,
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameChild: {
    top: 32,
    width: 5,
    height: 3,
  },
  frameItem: {
    top: 0,
    width: 61,
    height: 29,
  },
  buy1: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "left",
    textTransform: "uppercase",
    color: Color.colorWhite,
    lineHeight: 10,
    fontSize: FontSize.size_xs,
    left: 10,
    top: 4,
    position: "absolute",
  },
  get2: {
    top: 14,
    color: Color.colorGold,
    lineHeight: 12,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    left: 10,
  },
  free: {
    left: 52,
    fontSize: FontSize.size_4xs,
    transform: [
      {
        rotate: "90deg",
      },
    ],
    color: Color.colorWhite,
    lineHeight: 10,
    top: 4,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  vectorParent: {
    top: 9,
    left: -10,
    width: 64,
    zIndex: 1,
    height: 29,
    position: "absolute",
  },
  sreeVenkateswaraSarees: {
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    lineHeight: 12,
    textAlign: "left",
  },
  sreeVenkateswaraSareesWrapper: {
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
    paddingLeft: Padding.p_9xs,
    zIndex: 2,
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
  },
  frameParent: {
    width: 163,
    gap: Gap.gap_xs,
    justifyContent: "center",
  },
});

export default FrameComponent5;
