import { StyleSheet } from "react-native";
import {
  Color,
  Border,
  FontSize,
  FontFamily,
  Padding,
  Gap,
} from "../../../GlobalStyles";

export const styles = StyleSheet.create({
  logoIcon: {
    width: 43,
    height: 30,
  },
  logoWrapper: {
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
