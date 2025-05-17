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
  frameContainer: {
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    overflow: 'hidden',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Color.colorOrangered_100,
    borderBottomLeftRadius: Border.br_9xs,
    borderBottomRightRadius: Border.br_9xs,
    borderTopRightRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    width: 65,
  },
  frameView: {
    justifyContent: 'center',
    borderTopRightRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    borderBottomRightRadius: Border.br_9xs,
  },
  frameViewPosition: {
    borderBottomLeftRadius: Border.br_9xs,
    borderBottomRightRadius: Border.br_9xs,
    justifyContent: 'center',
    backgroundColor: Color.colorWhite,
  },
  frameWrapper: {
    borderRadius: Border.br_3xs,
  },
  frameWrapperBg: {
    paddingHorizontal: Padding.p_9xs,
    paddingBottom: Padding.p_9xs,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImageWrapper: {
    width: 65,
    height: 50,
    alignItems: 'center',
  },
  wrapperLayout: {
    borderRadius: Border.br_5xs,
    justifyContent: 'center',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  productIcon: {
    width: 25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameWrapper: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_11xs,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: FontSize.size_4xs,
    letterSpacing: 1,
    lineHeight: 9,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: 'center',
    color: Color.colorBlack,
    alignSelf: 'stretch',
    paddingVertical: 2,
  },
});
