import { Border, Color, FontFamily, FontSize, Gap, Padding } from "../../../GlobalStyles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    homeIconLayout: {
      height: 18,
      width: 18,
      overflow: "hidden",
    },
    frameParent: {
      alignSelf: "stretch",
      shadowColor: Color.colorBlack,
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
      gap: Gap.gap_sm,
      borderRadius: Border.br_81xl,
      margin: Padding.p_base
    },
  });