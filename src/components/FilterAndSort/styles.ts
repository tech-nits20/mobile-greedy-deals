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
      filterParent: {
        paddingHorizontal: Padding.p_9xs,
        borderColor: Color.colorLightslategray,
        height: 18,
        gap: Gap.gap_xs,
      },
      filterSelected: {
        borderColor: Color.colorOrangered_100,
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
      filterIcon: {
        width: 14,
        height: 14,
        overflow: "hidden",
      },
      filter: {
        color: Color.colorBlack,
      },
      filterTextSelected: {
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
      sortWrapperSelected: {
        borderColor: Color.colorOrangered_100,
      },
      filterTypo: {
        textAlign: "left",
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: "500",
        fontSize: FontSize.size_3xs,
      },
      sortText: {
        color: Color.colorOrangered_100
      }

})