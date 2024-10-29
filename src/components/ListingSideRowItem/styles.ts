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
  frameContainer: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    justifyContent: "center",
    overflow: "hidden",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorOrangered_100,
    borderBottomLeftRadius: Border.br_9xs,
    borderBottomRightRadius: Border.br_9xs,
    borderTopRightRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
  },
  frameView: {
    justifyContent: "center",
    borderTopRightRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_9xs,
  },
  frameViewPosition: {
    borderBottomLeftRadius: Border.br_9xs,
    borderBottomRightRadius: Border.br_9xs,
    justifyContent: "center",
    backgroundColor: Color.colorWhite,
  },
  frameWrapper: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorMistyrose,
  },
  frameWrapperBg: {
    backgroundColor: Color.colorMistyrose,
    padding: Padding.p_9xs,
    alignItems: "center",
  },
  productImageWrapper: {
    width: 40,
    alignItems: "center",
  },
  wrapperLayout: {
    borderRadius: Border.br_5xs,
    justifyContent: "center",
  },
  productImage: {
    width: 25,
    height: 40,
  },
  allWrapper: {
    width: 48,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_11xs,
    justifyContent: "center",
    alignItems: "center",
  },
  all: {
    fontSize: FontSize.size_4xs,
    letterSpacing: 1,
    lineHeight: 9,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
});
