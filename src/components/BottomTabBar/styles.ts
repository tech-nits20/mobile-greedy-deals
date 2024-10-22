import { Border, Color, FontFamily, FontSize, Gap, Padding } from "../../../GlobalStyles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    frameParentFlexBox: {
      justifyContent: "center",
      alignItems: "center",
    },
    parentFlexBox: {
      gap: Gap.gap_2xs,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    homeIconLayout: {
      height: 18,
      width: 18,
      overflow: "hidden",
    },
    home: {
      fontSize: FontSize.size_3xs,
      lineHeight: 10,
      fontFamily: FontFamily.poppinsRegular,
      color: Color.colorLightslategray,
      textAlign: "left",
    },
    homeMainRoomEstatePropertyIcon: {
      display: "none",
      overflow: "hidden",
    },
    buildingBusinessHomeHouseMIcon: {
      overflow: "hidden",
    },
    homeParent: {
      borderRadius: Border.br_81xl,
    },
    dealsParent: {
      display: "none",
    },
    buyCartDiscountPriceSaleIIcon: {
      width: 20,
      height: 20,
      overflow: "hidden",
    },
    frameParent: {
      alignSelf: "stretch",
      shadowColor: "rgba(0, 0, 0, 0.15)",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowRadius: 10,
      elevation: 10,
      shadowOpacity: 1,
      backgroundColor: Color.colorWhite,
      borderStyle: "solid",
      borderColor: Color.colorGainsboro_200,
      borderWidth: 1,
      height: 50,
      flexDirection: "row",
      paddingHorizontal: Padding.p_3xs,
      paddingVertical: 0,
      gap: Gap.gap_lg,
      borderRadius: Border.br_81xl,
    },
    mainApps1415ProInner: {
      width: 430,
      paddingHorizontal: Padding.p_base,
      paddingVertical: Padding.p_3xs,
      zIndex: 0,
    },
  });