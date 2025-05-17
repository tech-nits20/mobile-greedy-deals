import { Dimensions, StyleSheet } from 'react-native';
import {
  Padding,
  Gap,
  Color,
  Border,
  FontFamily,
  FontSize,
} from '../../../GlobalStyles';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  contentContainer: {
    padding: Padding.p_base,
    gap: Gap.gap_xl,
  },
  title: {
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    fontWeight: 'bold',
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
    backgroundColor: Color.colorWhiteSmoke,
    padding: Padding.p_3xs,
    marginBottom: Padding.p_7xs,
    borderRadius: Border.br_5xs,
  },
  offerText: {
    color: Color.colorDarkGray,
    fontWeight: '500',
  },
  offerDescription: {
    color: '#8B0000',
    fontWeight: 'bold',
  },
  descriptionText: {
    color: Color.colorLightslategray,
    fontSize: FontSize.size_xs,
    marginTop: 0,
    width: '80%',
  },
  productsTitle: {
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
  },
  productWrapper: {
    gap: Gap.gap_xl,
    paddingTop: Padding.p_3xs,
  },
  mapWrapper: {
    backgroundColor: Color.colorGray_100,
    height: 300,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  youtubeLinks: {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: Color.colorWhitesmoke_100,
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
  categoryWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: Gap.gap_xs,
    alignItems: 'center',
  },
  categoryName: {
    color: Color.colorDarkRed,
    fontSize: FontSize.size_xs,
    fontWeight: 'bold',
    width: '80%',
  },
  offerDeatail: {
    color: Color.colorOrangered_100,
    fontSize: FontSize.size_xs,
    fontWeight: 'bold',
    width: '20%',
  },
  couponCodeWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: Gap.gap_xl,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '20%',
  },
  ctaButton: {
    height: 24,
    paddingHorizontal: Padding.p_5xs,
    width: 130,
    paddingVertical: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  titleStyle: {
    fontSize: FontSize.size_3xs,
  },
  address: {
    color: Color.colorBlueSecondary,
    fontSize: FontSize.size_xs,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  addressField: {
    color: Color.colorDarkGray,
    fontSize: FontSize.size_xs,
    textAlign: 'center',
  },
  descriptionView: {
    display: 'flex',
    flexDirection: 'row',
    gap: Gap.gap_xs,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  descriptionDetail: {
    display: 'flex',
    flexDirection: 'column',
    gap: Gap.gap_xs,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '80%',
    flexWrap: 'wrap',
  },
  couponCode: {
    paddingTop: Padding.p_3xs,
    width: 120,
  },
});
