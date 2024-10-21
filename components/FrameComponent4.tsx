import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily, Gap } from "../GlobalStyles";

export type FrameComponent4Type = {
  menFashion?: string;
};

const FrameComponent4 = ({ menFashion }: FrameComponent4Type) => {
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
      <View style={styles.menFashionWrapper}>
        <Text style={styles.menFashion}>{menFashion}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    borderRadius: Border.br_5xs,
    alignItems: "center",
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
    alignItems: "center",
    alignSelf: "stretch",
  },
  menFashion: {
    fontSize: FontSize.size_2xs,
    lineHeight: 12,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    textAlign: "center",
    alignSelf: "stretch",
  },
  menFashionWrapper: {
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
    width: 84,
    alignItems: "center",
    justifyContent: "center",
  },
  frameParent: {
    width: 95,
    gap: Gap.gap_lg,
    justifyContent: "center",
  },
});

export default FrameComponent4;
