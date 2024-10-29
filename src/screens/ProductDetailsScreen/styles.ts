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
  container: {
    display: "flex",
  },
  contentContainer: {
    padding: Padding.p_base,
    gap: Gap.gap_xl
  },
  title: {
    fontSize: FontSize.size_base,
    color: Color.colorDimgray_100,
    fontWeight: "500",
  },
  offerContainer: {
    display: 'flex',
  },
  offerSectionItem: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Color.colorGray_100,
    padding: Padding.p_3xs,
    marginBottom: Padding.p_7xs,
    borderRadius: Border.br_5xs
  },
  offerText: {
    color: Color.colorDimgray_100,
    fontWeight: '500'
  },
  descriptionText: {
    color: Color.colorLightslategray,
    fontSize: FontSize.size_xs
  }
});
