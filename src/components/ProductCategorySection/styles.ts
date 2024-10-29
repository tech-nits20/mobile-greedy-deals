import { StyleSheet } from "react-native";
import {
  FontFamily,
  Color,
  FontSize,
  Gap,
  Border,
} from "../../../GlobalStyles";

export const styles = StyleSheet.create({
  frameView: {
    gap: Gap.gap_xl,
    alignItems: "center",
    alignSelf: "stretch",
  },
  fashionParent: {
    gap: Gap.gap_2xs,
    justifyContent: "center",
    alignItems: "center",
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
  frameParent1: {
    flexDirection: "row",
    gap: Gap.gap_lg,
    display: "flex",
    alignSelf: "stretch",
  },
  frameWrapper: {
    backgroundColor: Color.colorMistyrose,
    height: 84,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    borderRadius: Border.br_5xs,
  },
  bodyShotOfADarkSkinnedFaWrapper: {
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Border.br_5xs,
  },
  bodyShotOfADarkSkinnedFaIcon: {
    width: 44,
    height: 70,
  },
  womenFashionWrapper: {
    borderRadius: Border.br_5xs,
    flexDirection: 'row',
    gap: Gap.gap_lg
  },
});
