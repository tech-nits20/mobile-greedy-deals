import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
} from "react-native";
import {
  Border,
  FontSize,
  FontFamily,
  Color,
  Gap,
  Padding,
} from "../../GlobalStyles";

export type FrameComponent1Type = {
  flipkartLogoFDAASeeklogoc?: ImageSourcePropType;
  off?: string;
  offers?: string;

  /** Style props */
  propBackgroundColor?: string;
  propWidth?: number | string;
  propHeight?: number | string;
  propFontSize?: number;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent1 = ({
  flipkartLogoFDAASeeklogoc,
  off,
  offers,
  propBackgroundColor,
  propWidth,
  propHeight,
  propFontSize,
}: FrameComponent1Type) => {
  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", propBackgroundColor),
    };
  }, [propBackgroundColor]);

  const flipkartLogo3F33927DAASeeklIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
      ...getStyleValue("height", propHeight),
    };
  }, [propWidth, propHeight]);

  const offStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", propFontSize),
    };
  }, [propFontSize]);

  return (
    <View style={[styles.frameWrapper, frameView1Style]}>
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <View
          style={[
            styles.flipkartLogo3f33927daaSeeklWrapper,
            styles.parentFlexBox,
          ]}
        >
          <Image
            style={[
              styles.flipkartLogo3f33927daaSeeklIcon,
              flipkartLogo3F33927DAASeeklIconStyle,
            ]}
            resizeMode="cover"
            source={flipkartLogoFDAASeeklogoc}
          />
        </View>
        <View style={[styles.offParent, styles.parentFlexBox]}>
          <Text style={[styles.off, offStyle]}>{off}</Text>
          <Text style={styles.offers}>{offers}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  flipkartLogo3f33927daaSeeklIcon: {
    width: 30,
    height: 30,
  },
  flipkartLogo3f33927daaSeeklWrapper: {
    width: 64,
    height: 64,
    borderRadius: Border.br_5xs,
  },
  off: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorBlack,
    textAlign: "left",
  },
  offers: {
    fontSize: FontSize.size_3xs,
    letterSpacing: 1,
    lineHeight: 14,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    color: Color.colorDimgray_100,
    textAlign: "center",
    alignSelf: "stretch",
  },
  offParent: {
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
    borderStyle: "dashed",
    borderRadius: 0.001,
    borderTopWidth: 0.5,
    height: 48,
    gap: Gap.gap_2xs,
    alignSelf: "stretch",
    borderColor: Color.colorGainsboro_300,
  },
  frameParent: {
    flex: 1,
    paddingTop: Padding.p_5xs,
    gap: Gap.gap_sm,
    alignSelf: "stretch",
  },
  frameWrapper: {
    backgroundColor: Color.colorCornflowerblue,
    borderStyle: "solid",
    borderWidth: 1,
    width: 128,
    height: 128,
    overflow: "hidden",
    zIndex: 0,
    borderColor: Color.colorGainsboro_300,
    borderRadius: Border.br_5xs,
  },
});

export default FrameComponent1;
