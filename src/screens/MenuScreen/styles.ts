import { Dimensions, StyleSheet } from "react-native";
import {
  FontSize,
  FontFamily,
  Border,
  Color,
  Padding,
  Gap,
} from "../../../GlobalStyles";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  menuItemParent: {
    height: 160,
    maxWidth: 120,
    width: "100%",
    backgroundColor: Color.colorWhite,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.3,
    borderColor: Color.colorLightslategray,
    shadowColor: Color.colorBlack,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  menuGrid: {
    flexDirection: "row",
    gap: Gap.gap_xg,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: Padding.p_base,
    flexWrap: "wrap",
    marginTop: Padding.p_5xs,
    marginBottom: 40
  },
  itemContainer: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    width: '100%',
    paddingVertical: Padding.p_3xs,

    shadowOpacity: 1,
  },
  menuItemTitle: {
    color: Color.colorLightslategray,
    fontSize: FontSize.size_base,
  },
});
