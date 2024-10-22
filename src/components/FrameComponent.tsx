import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
} from "react-native";
import {
  Color,
  Border,
  FontSize,
  FontFamily,
  Padding,
  Gap,
} from "../../GlobalStyles";

export type FrameComponentType = {
  adidasLogosvg1?: ImageSourcePropType;
  off?: string;
  allTypeOfShoes?: string;

  /** Style props */
  propBackgroundColor?: string;
  propWidth?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent = ({
  adidasLogosvg1,
  off,
  allTypeOfShoes,
  propBackgroundColor,
  propWidth,
}: FrameComponentType) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  const adidasLogosvg1IconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  return (
    <View style={[styles.frameWrapper, frameViewStyle]}>
      <View style={styles.frameParent}>
        <View style={styles.adidasLogosvg1Wrapper}>
          <Image
            style={[styles.adidasLogosvg1Icon, adidasLogosvg1IconStyle]}
            resizeMode="cover"
            source={adidasLogosvg1}
          />
        </View>
        <View style={styles.offParent}>
          <Text style={styles.off}>{off}</Text>
          <Text style={styles.allTypeOf}>{allTypeOfShoes}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  adidasLogosvg1Icon: {
    width: 43,
    height: 30,
  },
  adidasLogosvg1Wrapper: {
    backgroundColor: Color.colorWhite,
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Border.br_5xs,
  },
  off: {
    fontSize: FontSize.size_sm,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorBlack,
    textAlign: "left",
  },
  allTypeOf: {
    fontSize: FontSize.size_3xs,
    letterSpacing: 1,
    lineHeight: 12,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    color: Color.colorDimgray_100,
    textAlign: "left",
    alignSelf: "stretch",
  },
  offParent: {
    flex: 1,
    paddingTop: Padding.p_9xs,
    gap: Gap.gap_2xs,
    alignSelf: "stretch",
  },
  frameParent: {
    flexDirection: "row",
    gap: Gap.gap_md,
    alignSelf: "stretch",
  },
  frameWrapper: {
    backgroundColor: Color.colorOrangered_200,
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderWidth: 1,
    width: 200,
    overflow: "hidden",
    padding: Padding.p_5xs,
    borderRadius: Border.br_5xs,
  },
});

export default FrameComponent;
