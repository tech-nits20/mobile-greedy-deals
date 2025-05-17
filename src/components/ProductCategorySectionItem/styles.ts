import { StyleSheet } from 'react-native';
import {
  FontFamily,
  Color,
  FontSize,
  Gap,
  Border,
} from '../../../GlobalStyles';

export const styles = StyleSheet.create({
  wrapperLayout: {
    borderRadius: Border.br_5xs,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageIcon: {
    width: '100%',
    height: '100%',
  },
  imageWrapper: {
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  frameWrapper: {
    height: 84,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  menFashion: {
    fontSize: FontSize.size_2xs,
    lineHeight: 12,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    textAlign: 'center',
    alignSelf: 'stretch',
  },
  menFashionWrapper: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
    width: 84,
    alignItems: 'center',
    justifyContent: 'center',
  },
  frameParent: {
    width: 95,
    gap: Gap.gap_lg,
  },
});
