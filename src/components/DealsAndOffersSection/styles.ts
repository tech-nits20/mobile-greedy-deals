import { StyleSheet } from "react-native";
import {
  FontFamily,
  Color,
  FontSize,
  Gap,
  Border,
  Padding,
} from "../../../GlobalStyles";

export const styles = StyleSheet.create({
    sectionParent: {
        gap: Gap.gap_lg,
        paddingTop: 16
      },
      parentFlexBox1: {
        justifyContent: "center",
        alignItems: "center",
      },
      sectionContainer: {
        lineHeight: 16,
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
      frameParent2: {
        flexDirection: "row",
        gap: Gap.gap_lg,
        alignSelf: "stretch",
      },
      frameParent3: {
        flexDirection: "row",
        gap: Gap.gap_2xl,
        alignItems: "center",
      },
      frameIcon: {
        left: -8,
        zIndex: 1,
      },
      frameChild1: {
        left: 120,
        zIndex: 2,
      },
      frameLayout: {
        height: 16,
        width: 16,
        top: 72,
        position: "absolute",
      },
      sectionTitle: {
        fontSize: FontSize.size_sm,
        textAlign: "left",
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
      parentFlexBox: {
        justifyContent: "center",
        alignItems: "center",
      },
      logoIcon: {
        minWidth: 30,
        minHeight: 30,
      },
      iconWrapper: {
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
});