import { StyleSheet } from 'react-native';
import {
  Border,
  FontFamily,
  Color,
  FontSize,
  Gap,
} from '../../../GlobalStyles';

export const styles = StyleSheet.create({
  wrapperLayout: {
    borderRadius: Border.br_5xs,
    alignItems: 'center',
    justifyContent: 'center',
  },
  framePosition: {
    left: 5,
    position: 'absolute',
  },
  offTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: '700',
    textAlign: 'left',
    textTransform: 'uppercase',
    position: 'absolute',
  },
  offerImage: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  offerImageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  frameWrapper: {
    backgroundColor: Color.colorMistyrose,
    height: 84,
    justifyContent: 'space-between',
    zIndex: 0,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  frameChild: {
    top: 29,
    width: 5,
    height: 3,
  },
  frameItem: {
    top: -0,
    width: 61,
    height: 29,
  },
  upto: {
    top: 3,
    fontWeight: '500',
    fontFamily: FontFamily.poppinsMedium,
    textAlign: 'left',
    textTransform: 'uppercase',
    color: Color.colorWhite,
    lineHeight: 11,
    fontSize: FontSize.size_xs,
    left: 10,
    position: 'absolute',
  },
  text: {
    top: 14,
    color: Color.colorGold,
    lineHeight: 12,
    fontWeight: '700',
    fontSize: FontSize.size_xs,
    left: 10,
  },
  off: {
    top: 8,
    left: 39,
    fontSize: FontSize.size_4xs,
    transform: [
      {
        rotate: '90deg',
      },
    ],
    color: Color.colorWhite,
    lineHeight: 10,
    fontWeight: '700',
  },
  vectorParent: {
    top: 9,
    left: -10,
    width: 64,
    zIndex: 1,
    height: 32,
    position: 'absolute',
  },
  titleText: {
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    textAlign: 'center',
    lineHeight: 12,
    alignSelf: 'stretch',
  },
  titleWrapper: {
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
    zIndex: 2,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  frameParent: {
    maxWidth: 163,
    width: '100%',
    gap: Gap.gap_lg,
    justifyContent: 'space-between',
  },
});
