import { Dimensions, StyleSheet } from "react-native";
import {
  Padding,
  Gap,
  Color,
  Border,
  FontFamily,
  FontSize,
} from "../../../GlobalStyles";

export const styles = StyleSheet.create({
  midRowSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_3xs,
  },

  frameFlexBox: {
    alignContent: "flex-start",
    flexDirection: "row",
    alignSelf: "stretch",
    marginBottom: 100,
    width: "100%",
  },
  frameListingFlex: {
    alignContent: "flex-start",
    flexWrap: "wrap",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    marginBottom: 100,
    width: Dimensions.get("screen").width,
    gap: 12,
  },
  subtractIcon: {
    width: 430,
    height: 54,
    display: "none",
  },
  wrapperLayout: {
    borderRadius: Border.br_5xs,
    justifyContent: "center",
  },
  frameWrapper2: {
    borderTopLeftRadius: Border.br_9xs,
    borderTopRightRadius: Border.br_9xs,
  },
  frameParent1: {
    justifyContent: "center",
  },
  frameGroup: {
    backgroundColor: "#f5f3f3",
    padding: Padding.p_9xs,
    borderRadius: Border.br_3xs,
    gap: Gap.gap_lg,
    alignSelf: "stretch",
  },
  image122Icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    alignSelf: "stretch",
    width: "100%",
    flex: 1,
  },
  image122Wrapper: {
    height: 120,
    overflow: "hidden",
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_5xs,
  },
  frameParentFlexBox: {
    gap: Gap.gap_lg,
    flex: 1,
  },
  frameWrapper10: {
    borderRadius: 6,
    backgroundColor: "#f5f5f5",
    padding: Padding.p_7xs,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameChild: {
    width: 8,
    height: 8,
  },
  ellipseParent: {
    backgroundColor: Color.colorOrangered_100,
    paddingHorizontal: Padding.p_5xs,
    marginTop: -4,
    borderRadius: Border.br_9xs,
    paddingVertical: Padding.p_11xs,
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.gap_xs,
  },
  component2: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  component2Wrapper: {
    overflow: "hidden",
    flexDirection: "row",
    alignSelf: "stretch",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_5xs,
  },

  frameParent11: {
    gap: Gap.gap_xl,
  },
  frameWrapper12: {
    alignItems: "center",
    flex: 1,
  },
  frameParent9: {
    borderBottomRightRadius: Border.br_19xl,
    borderBottomLeftRadius: Border.br_19xl,
  },
  frameParent: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  midRowInner: {
    alignSelf: "stretch",
    flex: 1,
  },
  midRow: {
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1,
  },
  listingPage: {
    height: 932,
    gap: Gap.gap_xs,
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  flatlist: {
    marginBottom: 100
  }
});
