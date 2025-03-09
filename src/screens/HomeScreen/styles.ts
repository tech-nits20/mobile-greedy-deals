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
  minimumTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
  },
  offText: {
    textShadowRadius: 1,
    textShadowOffset: {
      width: 0,
      height: 3,
    },
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    color: Color.colorGold,
    textAlign: 'left',
    position: 'absolute',
  },
  bigBrandsFlexBox: {
    display: 'flex',
    textAlign: 'left',
    left: 0,
    position: 'absolute',
    alignItems: 'center',
  },
  trendingCategoriesTypo: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: '300',
    color: Color.colorOrangered_100,
  },
  frameLayout1: {
    width: 121,
    height: 1,
    borderTopWidth: 1,
    borderStyle: 'solid',
  },
  frameWrapper1Border: {
    borderWidth: 1,
    borderStyle: 'solid',
    overflow: 'hidden',
  },
  minimum: {
    top: 0,
    textAlign: 'left',
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    left: 0,
    position: 'absolute',
  },
  parentFlexBox1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  frameGroup: {
    gap: Gap.gap_lg,
    alignSelf: 'stretch',
  },
  off: {
    left: 70,
    fontSize: 20,
    transform: [
      {
        rotate: '90deg',
      },
    ],
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: '600',
    top: 25,
  },
  text: {
    top: 20,
    fontSize: 40,
    lineHeight: 40,
    fontWeight: '700',
    fontFamily: FontFamily.poppinsBold,
    left: 0,
  },
  minimumParent: {
    height: 62,
    width: 112,
  },
  component3: {
    top: 16,
    left: 273,
    height: 57,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: 112,
    position: 'absolute',
  },
  onAmazing1: {
    color: Color.colorBlack,
  },
  text1: {
    color: Color.colorWhite,
  },
  onAmazing: {
    fontFamily: FontFamily.poppinsRegular,
  },
  dealsOffersCashback: {
    color: Color.colorOrangered_100,
  },
  onAmazingDealsContainer1: {
    width: '100%',
  },
  onAmazingDealsContainer: {
    top: 47,
    width: 371,
    letterSpacing: 1,
    fontSize: FontSize.size_lg,
  },
  bigBrands: {
    top: -6,
    fontSize: 36,
    width: 217,
    color: Color.colorOrangered_100,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
  },
  onAmazingDealsOffersCashParent: {
    left: 24,
    width: 359,
    height: 83,
    top: 25,
    position: 'absolute',
  },
  component3Parent: {
    width: 408,
    height: 108,
  },
  frameItem: {
    borderColor: Color.colorGray_200,
    width: 121,
  },
  trendingCategories: {
    fontSize: FontSize.size_xs,
    color: Color.colorOrangered_100,
    textAlign: 'left',
  },
  plusIcon1: {
    width: 12,
    height: 12,
    overflow: 'hidden',
  },
  trendingCategoriesParent: {
    borderRadius: Border.br_81xl,
    paddingHorizontal: 12,
    paddingVertical: Padding.p_9xs,
    gap: Gap.gap_xs,
    borderColor: Color.colorGainsboro_200,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  frameInner: {
    borderColor: Color.colorGainsboro_200,
  },
  lineParent: {
    gap: 1,
    display: 'none',
    flexDirection: 'row',
    alignItems: 'center',
  },
  frameParent1: {
    gap: Gap.gap_lg,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  adidasLogosvg1Icon: {
    width: 43,
    height: 30,
    display: 'none',
  },
  zomatoLogosvg1Icon: {
    width: 80,
    height: 17,
  },
  adidasLogosvg1Parent: {
    height: 64,
    width: 64,
    justifyContent: 'center',
    borderRadius: Border.br_5xs,
    gap: Gap.gap_lg,
  },
  offers: {
    lineHeight: 14,
    textAlign: 'center',
  },
  offParent: {
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    borderStyle: 'dashed',
    borderRadius: 0.001,
    borderTopWidth: 0.5,
    height: 48,
    borderColor: Color.colorGainsboro_300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.colorWhite,
  },
  frameParent10: {
    paddingTop: Padding.p_5xs,
    gap: Gap.gap_sm,
    alignSelf: 'stretch',
    flex: 1,
  },
  frameWrapper1: {
    backgroundColor: 'rgba(226, 55, 68, 0.1)',
    width: 128,
    height: 128,
    zIndex: 0,
    borderColor: Color.colorGainsboro_300,
    borderRadius: Border.br_5xs,
  },
  frameParent: {
    gap: Gap.gap_xl,
    marginTop: -25,
    overflow: 'hidden',
    alignSelf: 'stretch',
  },
  midRow: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    marginTop: -1,
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
  },
  locationUserBarParent: {
    zIndex: 1,
    alignSelf: 'stretch',
    flex: 1,
  },
  mainApps1415Pro: {
    height: 932,
    width: '100%',
    flex: 1,
    backgroundColor: Color.colorTransparent,
  },
  topCategories: {
    display: 'flex',
    flexDirection: 'column',
    gap: Gap.gap_xl,
  },
});
