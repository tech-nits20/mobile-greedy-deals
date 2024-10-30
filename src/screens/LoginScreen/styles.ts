import { StyleSheet } from "react-native";
import { Border, Color, FontSize, Gap, Padding } from "../../../GlobalStyles";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      padding: 20,
      width: '90%',
      gap: Gap.gap_lg,
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
      textAlign: "center",
      color: Color.colorBlack
    },
    input: {
      height: 40,
      borderColor: Color.colorLightslategray,
      borderWidth: 1,
      borderRadius: Border.br_3xs,
      marginBottom: 15,
      paddingHorizontal: 10,
      color: Color.colorBlack,
    },
    socialButtons: {
      marginTop: 30,
      gap: Gap.gap_lg,
    },
    button: {
        borderRadius: Border.br_3xs,
        backgroundColor: Color.colorOrangered_100,
        padding: Padding.p_3xs,
        alignItems: 'center'
    },
    buttonText: {
        fontSize: FontSize.size_base,
        fontWeight: '500',
        color: Color.colorWhite
    }
  });