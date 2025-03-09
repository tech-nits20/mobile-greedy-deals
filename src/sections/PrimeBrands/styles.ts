import { StyleSheet } from 'react-native';
import {
  FontFamily,
  Color,
  FontSize,
  Gap,
  Border,
  Padding,
} from '../../../GlobalStyles';

export const styles = StyleSheet.create({
  frameGroup: {
    gap: Gap.gap_lg,
    alignSelf: 'stretch',
  },
  primeBrandsParent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Gap.gap_lg,
    alignItems: 'center',
  },
  primeBrands: {
    lineHeight: 20,
    color: Color.colorOrangered_100,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 1,
    textAlign: 'left',
  },
  primeBrandsTypo: {
    fontSize: FontSize.size_lg,
    letterSpacing: 1,
  },
  frameChild: {
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xs,
  },
  frameContainer: {
    display: 'flex',
  },
  frameWrapper: {
    backgroundColor: 'rgba(129, 195, 65, 0.1)',
    width: 200,
    padding: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    overflow: 'hidden',
  },
  frameView: {
    gap: Gap.gap_md,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  uwlrjrAq9ti0pc1Wrapper: {
    height: 64,
    width: 64,
    justifyContent: 'center',
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
  },
  parentFlexBox1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  uwlrjrAq9ti0pc1Icon: {
    width: 42,
    height: 6,
  },
  buy1Get1Parent: {
    paddingTop: Padding.p_9xs,
    flex: 1,
  },
  parentFlexBox: {
    gap: Gap.gap_2xs,
    alignSelf: 'stretch',
  },
  buy1Get: {
    lineHeight: 18,
    textAlign: 'left',
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
  },
  offTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: '600',
  },
  babySopa: {
    lineHeight: 12,
    textAlign: 'left',
  },
  offersTypo: {
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: '300',
    letterSpacing: 1,
    alignSelf: 'stretch',
  },
});
