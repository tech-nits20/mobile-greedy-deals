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
  },
  productsTitle : {
    color: Color.colorBlack,
    fontSize: FontSize.size_base
  },
  productWrapper : {
    gap: Gap.gap_xl,
    paddingTop: Padding.p_3xs
  },
  mapWrapper : {
    backgroundColor: Color.colorGray_100,
    height: 200,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  youtubeLinks : {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
  thumbnail: {
    width: 160,
    height: 150,
  },
  youtubeTitle: {
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
