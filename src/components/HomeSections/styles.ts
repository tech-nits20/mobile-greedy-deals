import { StyleSheet } from "react-native";
import {
  Color,
  Padding,
  Border,
  Gap,
  FontSize,
  FontFamily,
} from "../../../GlobalStyles";

export const styles = StyleSheet.create({
  wrapperFlexBox: {
    height: 120,
    backgroundColor: Color.colorWhite,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  component2Layout: {
    width: 410,
    alignItems: "center",
  },
  nameFlexBox: {
    paddingHorizontal: Padding.p_7xs,
    backgroundColor: Color.colorGray_300,
    borderRadius: Border.br_base,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    paddingVertical: 0,
  },
  subtractIcon: {
    height: 311,
    width: 430,
  },
  image122Icon: {
    flex: 1,
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  image122Wrapper: {
    flexDirection: "row",
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
  },
  component2Wrapper: {
    flexDirection: "row",
    borderRadius: Border.br_5xs,
  },
  frameParent: {
    paddingTop: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  mobileIcons: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  mobileIconsWrapper: {
    padding: Padding.p_7xs,
    flexDirection: "row",
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  frameContainer: {
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  name: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorWhite,
    textAlign: "left",
  },
  nameContainer: {
    height: 15,
    display: "none",
  },
  frameGroup: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  instanceParent: {
    paddingBottom: Padding.p_3xs,
    gap: Gap.gap_2xl,
    flexDirection: "row",
  },
  frameWrapper: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    paddingTop: Padding.p_5xs,
  },
  subtractParent: {
    height: 221,
    paddingHorizontal: Padding.p_3xs,
    gap: Gap.gap_lg,
    paddingVertical: 0,
    overflow: "hidden",
    width: 430,
  },
});
