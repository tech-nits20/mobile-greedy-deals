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
    frameWrapper10: {
        borderRadius: 6,
        backgroundColor: "#f5f5f5",
        padding: Padding.p_7xs,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "stretch",
      },
      frameParent10: {
        flexDirection: "row",
        alignItems: "center",
      },
      frameParentFlexBox: {
        gap: Gap.gap_lg,
        flex: 1,
      },
      filterSettingsSlidersIcon1Parent: {
        paddingHorizontal: Padding.p_9xs,
        paddingVertical: Padding.p_11xs,
        borderColor: Color.colorOrangered_100,
        height: 18,
        gap: Gap.gap_xs,
      },
      sortByWrapperLayout: {
        height: 18,
        borderRadius: Border.br_9xs,
        justifyContent: "center",
        borderWidth: 1,
        borderStyle: "solid",
        flexDirection: "row",
        alignItems: "center",
      },
      filterSettingsSlidersIcon1: {
        width: 14,
        height: 14,
        overflow: "hidden",
      },
      filter: {
        color: Color.colorOrangered_100,
      },
    
      sortBy: {
        color: Color.colorBlack,
      },
      sortByWrapper: {
        backgroundColor: Color.colorWhitesmoke_100,
        borderColor: Color.colorLightslategray,
        paddingVertical: 0,
        paddingHorizontal: Padding.p_3xs,
      },
      filterTypo: {
        textAlign: "left",
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: "500",
        fontSize: FontSize.size_3xs,
      },
})