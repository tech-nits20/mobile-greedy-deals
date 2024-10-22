import { StyleSheet } from "react-native";
import {
  Gap,
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
} from "../../../GlobalStyles";

export const styles = StyleSheet.create({
  locationFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationParentFlexBox: {
    justifyContent: "center",
    gap: Gap.gap_xs,
  },
  searchParentFlexBox: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  childLayout: {
    height: 24,
    width: 24,
    display: "none",
  },
  locationCrosshairsIcon1: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  eastDelhiDelhi: {
    fontSize: FontSize.size_3xs,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorWhite,
    textAlign: "left",
    flex: 1,
  },
  locationCrosshairsIcon1Parent: {
    width: 160,
    zIndex: 0,
    gap: Gap.gap_xs,
    alignItems: "center",
    flexDirection: "row",
  },
  searchFor: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  offers: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  deals: {
    fontSize: FontSize.size_sm,
    display: "none",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    textAlign: "left",
  },
  searchForParent: {
    gap: Gap.gap_xs,
  },
  searchStrongIcon1Parent: {
    gap: Gap.gap_xs,
    justifyContent: "center",
  },
  locationUserBar1: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
    height: 32,
    padding: Padding.p_5xs,
    gap: Gap.gap_sm,
  },
  frameChild: {
    borderRadius: Border.br_81xl,
  },
  menuLeftIcon1: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  menuLeftIcon1Wrapper: {
    alignSelf: "stretch",
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorGray_300,
    width: 24,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  locationUserBarParent: {
    zIndex: 1,
    gap: Gap.gap_xs,
    justifyContent: "center",
  },
  locationUserBarItem: {
    position: "absolute",
    top: 0,
    left: 386,
    zIndex: 2,
    alignItems: "center",
  },
  locationUserBar: {
    backgroundColor: Color.colorOrangered_100,
    width: 430,
    padding: Padding.p_3xs,
    gap: Gap.gap_sm,
    alignItems: "center",
  },
  backArrowIcon1Wrapper: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorGray_300,
    justifyContent: "center",
    width: 24,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  backArrowIcon1: {
    overflow: "hidden",
  },
  backArrowIcon1Layout: {
    height: 24,
    width: 24,
  },
});
