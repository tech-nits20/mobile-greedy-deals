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
    width: '100%'
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
 
  womenFashion: {
    lineHeight: 12,
    color: Color.colorBlack,
    fontSize: FontSize.size_2xs,
  },

  framePressable: {
    width: 95,
    justifyContent: "center",
    gap: Gap.gap_lg,
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
  sectionContainer: {
    paddingBottom: 24
  }
});
