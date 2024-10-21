import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Border, FontFamily, Color, FontSize, Gap } from "../GlobalStyles";

const FrameComponent7 = () => {
  return (
    <View style={styles.frameParent}>
      <View style={[styles.frameWrapper, styles.wrapperLayout]}>
        <View
          style={[styles.bodyShotOfADarkSkinnedFaWrapper, styles.wrapperLayout]}
        >
          <Image
            style={styles.bodyShotOfADarkSkinnedFaIcon}
            resizeMode="cover"
            source={require("../assets/bodyshotofadarkskinnedfashionpng-11.png")}
          />
        </View>
      </View>
      <View style={styles.vectorParent}>
        <Image
          style={[styles.frameChild, styles.framePosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-446.png")}
        />
        <Text style={[styles.buy4000, styles.offTypo]}>BUY4000</Text>
        <Text style={[styles.text, styles.offTypo]}>1000</Text>
        <Image
          style={[styles.frameItem, styles.framePosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-448.png")}
        />
        <Text style={[styles.off, styles.offTypo]}>Off</Text>
      </View>
      <View style={styles.summerFashionWrapper}>
        <Text style={styles.summerFashion}>Summer Fashion</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    borderRadius: Border.br_5xs,
    alignItems: "center",
  },
  framePosition: {
    left: 5,
    position: "absolute",
  },
  offTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textTransform: "uppercase",
    position: "absolute",
  },
  bodyShotOfADarkSkinnedFaIcon: {
    width: 44,
    height: 70,
  },
  bodyShotOfADarkSkinnedFaWrapper: {
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  frameWrapper: {
    backgroundColor: Color.colorMistyrose,
    height: 84,
    justifyContent: "space-between",
    zIndex: 0,
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameChild: {
    top: 0,
    width: 61,
    height: 29,
  },
  buy4000: {
    top: 4,
    fontSize: FontSize.size_5xs,
    color: Color.colorWhite,
    lineHeight: 10,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textTransform: "uppercase",
    left: 10,
  },
  text: {
    top: 14,
    fontSize: FontSize.size_xs,
    color: Color.colorGold,
    lineHeight: 12,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textTransform: "uppercase",
    left: 10,
  },
  frameItem: {
    top: 32,
    width: 5,
    height: 3,
  },
  off: {
    top: 5,
    left: 57,
    fontSize: FontSize.size_4xs,
    transform: [
      {
        rotate: "90deg",
      },
    ],
    color: Color.colorWhite,
    lineHeight: 10,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  vectorParent: {
    top: 9,
    left: -10,
    width: 64,
    zIndex: 1,
    height: 29,
    position: "absolute",
  },
  summerFashion: {
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    textAlign: "center",
    lineHeight: 12,
    alignSelf: "stretch",
  },
  summerFashionWrapper: {
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
    zIndex: 2,
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "center",
  },
  frameParent: {
    width: 163,
    gap: Gap.gap_lg,
    justifyContent: "center",
  },
});

export default FrameComponent7;
