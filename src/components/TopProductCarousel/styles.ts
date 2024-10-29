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
  },
  imageContainer: {
    borderRadius: Padding.p_5xs,
  },
  imageContainerFull: {
    borderRadius: 0,
    width: '100%'
  },
  pagination: {
    flexDirection: "row",
    marginTop: -30,
    borderRadius: 4,
    backgroundColor: Color.colorOrangered_100,
    gap: Gap.gap_xs,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_11xs,
    alignSelf: 'center'
  },
  paginationContainer: {
    display: "flex",
    backgroundColor: Color.colorTransparent,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "blue",
  },
  inactiveDot: {
    backgroundColor: "gray",
  },
  imageWrapper: {
    width: '100%'
  }
});
