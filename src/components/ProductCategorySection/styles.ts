import { StyleSheet } from 'react-native';
import {
  FontFamily,
  Color,
  FontSize,
  Gap,
  Border,
  Padding,
} from '../../../GlobalStyles';
import { screenWidth } from '../../helper/Utils';

export const styles = StyleSheet.create({
  frameView: {
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  fashionParent: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: Padding.p_3xs,
  },
  fashion1Typo: {
    color: Color.colorOrangered_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    lineHeight: 16,
    letterSpacing: 1,
    fontSize: FontSize.size_sm,
    textAlign: 'left',
  },
  lineView: {
    borderColor: Color.colorGray_100,
    borderTopWidth: 1,
    width: screenWidth,
    marginHorizontal: Padding.p_base,
    marginVertical: Padding.p_9xs,
  },
  frameParent1: {
    flexDirection: 'row',
    padding: Padding.p_3xs,
    display: 'flex',
    alignSelf: 'stretch',
  },
  frameWrapper: {
    backgroundColor: Color.colorMistyrose,
    height: 84,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: Border.br_5xs,
  },
  bodyShotOfADarkSkinnedFaWrapper: {
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Border.br_5xs,
  },
  bodyShotOfADarkSkinnedFaIcon: {
    width: 44,
    height: 70,
  },
  womenFashionWrapper: {
    borderRadius: Border.br_5xs,
    flexDirection: 'row',
    gap: Gap.gap_xl,
  },
  viewAll: {
    color: Color.colorDimgray_100,
  },
  loader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    alignSelf: 'center',
  },
});
