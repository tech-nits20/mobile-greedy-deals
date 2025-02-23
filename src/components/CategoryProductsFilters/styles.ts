import { StyleSheet } from "react-native";
import {
  Border,
  FontFamily,
  Color,
  FontSize,
  Gap,
  Padding,
} from "../../../GlobalStyles";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
  },
  midContainer: {
    flexDirection: 'row',
  },
  leftContainer: {
    height: "100%",
    maxWidth: 120,
    flexWrap: "wrap",
  },
  rightContainer: {
    width: "100%",
  },
  footerButton : {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: Gap.gap_xl,
    bottom: 20,
    position: 'absolute',
    right: Padding.p_base
  },
  filterItem: {
    padding: Padding.p_5xs,
    borderColor: Color.colorGray_100,
    borderWidth: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    flex: 1
  },
  innerItem: {
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: Color.colorOrangered_100,
    transform: [{ rotate: "90deg" }],
    position: 'absolute',
    right: -18
  },
  selectedFilterItem : {
  
  },
  sideItem : {
    padding: Padding.p_3xs,
    marginStart: Padding.p_7xs,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: Gap.gap_sm
  }
});
