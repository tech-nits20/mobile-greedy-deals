import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Border, FontFamily, Color, FontSize, Gap } from "../GlobalStyles";

export type FrameComponent6Type = {
  uPTO?: string;
};

const FrameComponent6 = ({ uPTO }: FrameComponent6Type) => {
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
          source={require("../assets/rectangle-448.png")}
        />
        <Image
          style={[styles.frameItem, styles.framePosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-446.png")}
        />
        <Text style={styles.upto}>{uPTO}</Text>
        <Text style={[styles.text, styles.offTypo]}>20%</Text>
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
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
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
    top: 32,
    width: 5,
    height: 3,
  },
  frameItem: {
    top: 0,
    width: 61,
    height: 29,
  },
  upto: {
    top: 4,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    textAlign: "left",
    textTransform: "uppercase",
    color: Color.colorWhite,
    lineHeight: 10,
    fontSize: FontSize.size_xs,
    left: 10,
    position: "absolute",
  },
  text: {
    top: 14,
    color: Color.colorGold,
    lineHeight: 12,
    fontWeight: "700",
    fontSize: FontSize.size_xs,
    left: 10,
  },
  off: {
    top: 5,
    left: 52,
    fontSize: FontSize.size_4xs,
    transform: [
      {
        rotate: "90deg",
      },
    ],
    color: Color.colorWhite,
    lineHeight: 10,
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

export default FrameComponent6;
