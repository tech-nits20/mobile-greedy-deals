import { StyleSheet } from 'react-native';
import {
  Border,
  FontFamily,
  Color,
  FontSize,
  Gap,
  Padding,
} from '../../../GlobalStyles';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
  },
  midContainer: {
    flexDirection: 'row',
  },
  leftContainer: {
    height: '100%',
    width: 130,
    flexWrap: 'wrap',
    display: 'flex',
    flexDirection: 'column',
  },
  rightContainer: {
    width: '100%',
    backgroundColor: Color.colorWhite,
  },
  footerButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: Gap.gap_xl,
    right: Padding.p_base,
  },
  bottomBar: {
    bottom: 20,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  resultText: {
    color: Color.colorDarkGray,
    paddingStart: Padding.p_base,
    fontWeight: 'bold',
  },
  filterItem: {
    padding: Padding.p_5xs,
    borderColor: Color.colorGray_100,
    borderWidth: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
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
    transform: [{ rotate: '90deg' }],
    position: 'absolute',
    right: -17,
  },
  selectedFilterItem: {},
  sideItem: {
    padding: Padding.p_3xs,
    marginStart: Padding.p_7xs,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: Gap.gap_sm,
  },
});
