import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {
  Gap,
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
} from '../../GlobalStyles';

const LocationUserBar = () => {
  return (
    <View style={[styles.locationUserBar, styles.locationFlexBox]}>
      <View
        style={[
          styles.locationCrosshairsIcon1Parent,
          styles.locationParentFlexBox,
        ]}
      >
        <Image
          style={styles.locationCrosshairsIcon1}
          resizeMode="cover"
          source={require('../assets/8665611-location-crosshairs-icon-1.png')}
        />
        <Text style={styles.eastDelhiDelhi}>East Delhi, Delhi 110092.</Text>
      </View>
      <View style={[styles.locationUserBarParent, styles.searchParentFlexBox]}>
        <View style={[styles.locationUserBar1, styles.searchParentFlexBox]}>
          <View
            style={[styles.searchStrongIcon1Parent, styles.searchParentFlexBox]}
          >
            <Image
              style={styles.locationCrosshairsIcon1}
              resizeMode="cover"
              source={require('../assets/211817-search-strong-icon-1.png')}
            />
            <View style={[styles.searchForParent, styles.searchParentFlexBox]}>
              <Text style={styles.searchFor}>Search for</Text>
              <Text style={styles.offers}>‘Offers’</Text>
              <Text style={styles.deals}>Deals</Text>
              <Text style={styles.deals}>Cashback</Text>
            </View>
          </View>
          <Image
            style={styles.childLayout}
            resizeMode="cover"
            source={require('../assets/frame-3.png')}
          />
        </View>
        <Image
          style={[styles.frameChild, styles.childLayout]}
          resizeMode="cover"
          source={require('../assets/frame-3.png')}
        />
        <View style={styles.menuLeftIcon1Wrapper}>
          <Image
            style={styles.menuLeftIcon1}
            resizeMode="cover"
            source={require('../assets/9057028-menu-left-icon-1.png')}
          />
        </View>
      </View>
      <View style={[styles.locationUserBarItem, styles.childLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  locationFlexBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationParentFlexBox: {
    justifyContent: 'center',
    gap: Gap.gap_xs,
  },
  searchParentFlexBox: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  childLayout: {
    height: 24,
    width: 24,
    display: 'none',
  },
  locationCrosshairsIcon1: {
    width: 16,
    height: 16,
    overflow: 'hidden',
  },
  eastDelhiDelhi: {
    fontSize: FontSize.size_3xs,
    fontWeight: '600',
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorWhite,
    textAlign: 'left',
    flex: 1,
  },
  locationCrosshairsIcon1Parent: {
    width: 160,
    zIndex: 0,
    gap: Gap.gap_xs,
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchFor: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: '300',
    fontSize: FontSize.size_xs,
    textAlign: 'left',
  },
  offers: {
    fontWeight: '500',
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
    textAlign: 'left',
  },
  deals: {
    fontSize: FontSize.size_sm,
    display: 'none',
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: '300',
    textAlign: 'left',
  },
  searchForParent: {
    gap: Gap.gap_xs,
  },
  searchStrongIcon1Parent: {
    gap: Gap.gap_xs,
    justifyContent: 'center',
  },
  locationUserBar1: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
    height: 32,
    padding: Padding.p_5xs,
    gap: Gap.gap_sm,
  },
  frameChild: {
    borderRadius: Border.br_81xl,
  },
  menuLeftIcon1: {
    width: 18,
    height: 18,
    overflow: 'hidden',
  },
  menuLeftIcon1Wrapper: {
    alignSelf: 'stretch',
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorGray_300,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  locationUserBarParent: {
    zIndex: 1,
    gap: Gap.gap_xs,
    justifyContent: 'center',
  },
  locationUserBarItem: {
    position: 'absolute',
    top: 0,
    left: 386,
    zIndex: 2,
    alignItems: 'center',
  },
  locationUserBar: {
    backgroundColor: Color.colorOrangered_100,
    width: 430,
    padding: Padding.p_3xs,
    gap: Gap.gap_sm,
    alignItems: 'center',
  },
});

export default LocationUserBar;
