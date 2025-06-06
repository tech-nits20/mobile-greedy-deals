import { StyleSheet } from 'react-native';
import {
  FontFamily,
  Color,
  FontSize,
  Gap,
  Border,
  Padding,
} from '../../../GlobalStyles';
import { getSectionPadding } from '../../helper/Utils';

export const styles = StyleSheet.create({
  sectionParent: {
    gap: Gap.gap_lg,
    paddingTop: 16,
    paddingHorizontal: getSectionPadding(),
  },
  parentFlexBox1: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  sectionContainer: {
    color: Color.colorOrangered_100,
    fontFamily: FontFamily.poppinsRegular,
    letterSpacing: 1,
    textAlign: 'left',
  },
  frameChild: {
    width: 411,
    height: 1,
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderColor: Color.colorGray_200,
  },
  frameParent2: {
    display: 'flex',
  },
  frameParent3: {
    display: 'flex',
  },
  sectionTitle: {
    fontSize: FontSize.size_lg,
    textAlign: 'left',
  },
  frameWrapper: {
    borderStyle: 'solid',
    borderWidth: 1,
    width: 150,
    height: 224,
    borderColor: Color.colorGainsboro_300,
    borderRadius: Border.br_5xs,
  },
  parentFlexBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    width: '100%',
    height: 130,
  },
  offers: {
    fontSize: FontSize.size_3xs,
    letterSpacing: 1,
    lineHeight: 14,
    fontWeight: '300',
    fontFamily: FontFamily.poppinsLight,
    color: Color.colorDimgray_100,
    textAlign: 'center',
    alignSelf: 'stretch',
  },
  frameParent: {
    flex: 1,
  },
  seeAllDeals: {
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xs,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  gdOfferText: {
    fontSize: FontSize.size_2xs,
    lineHeight: 12,
    fontWeight: 'bold',
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorBrown,
    textAlign: 'left',
    fontStyle: 'italic',
    paddingBottom: Padding.p_5xs,
  },
  originalPriceView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: Gap.gap_sm,
    paddingTop: Padding.p_11xs,
  },
  originalPrice: {
    fontSize: FontSize.size_xs,
    lineHeight: 12,
    fontWeight: 'bold',
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorGray400,
    textAlign: 'left',
    textDecorationLine: 'line-through',
  },
  offerPrice: {
    fontSize: FontSize.size_xs,
    lineHeight: 12,
    fontWeight: 'bold',
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorOrangered_100,
    textAlign: 'right',
  },
  allTypeOf: {
    fontSize: FontSize.size_2xs,
    letterSpacing: 1,
    lineHeight: 12,
    fontWeight: 'bold',
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorOrangered_100,
    textAlign: 'left',
    alignSelf: 'stretch',
    paddingTop: Padding.p_11xs,
  },
  container: {
    padding: 16,
    flexDirection: 'row',
    gap: Gap.gap_xl,
    justifyContent: 'flex-start',
    width: '100%',
  },
  item: {
    flexDirection: 'row',
    marginBottom: 24,
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 30,
  },
  line: {
    marginBottom: 8,
  },
});
