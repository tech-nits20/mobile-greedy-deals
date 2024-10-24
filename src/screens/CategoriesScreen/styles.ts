import { StyleSheet } from "react-native";
import {
  FontSize,
  FontFamily,
  Border,
  Color,
  Padding,
  Gap,
} from "../../../GlobalStyles";

export const styles = StyleSheet.create({
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
