import * as React from 'react';
import { Text, View } from 'react-native';
import TopAppBar from '../../components/TopAppBar';
import { styles } from './styles';
import HomeSections from '../../components/HomeSections';
import PrimeBrands from '../../sections/PrimeBrands';
import { ScrollView } from 'react-native-gesture-handler';
import { memo } from 'react';
import DiscountsAndOffers from '../../sections/DiscountsAndOffers';
import TopCashback from '../../sections/TopCashback';
import EarlyDeals from '../../sections/EarlyDeals';
import ClothingOffers from '../../sections/ClothingOffers';
import FoodsOffers from '../../sections/FoodsOffers';
import BeautyAndSpaOffers from '../../sections/BeautyAndSpaOffers';
import RealEstateOffers from '../../sections/RealEstateOffers';
import HospitalsOffers from '../../sections/HospitalsOffers';
import { getScreenSize, screenWidth } from '../../helper/Utils';

const HomeScreen = () => {
  console.log(`===SCRWID: ${getScreenSize()}`);

  return (
    <>
      <TopAppBar isShowSearch />
      <ScrollView
        style={styles.mainApps1415Pro}
        bounces={false}
        nestedScrollEnabled
      >
        <View style={styles.locationUserBarParent}>
          <View style={styles.midRow}>
            <HomeSections />
            <View style={styles.frameParent}>
              <View style={styles.component3Parent}>
                <View style={styles.component3}>
                  <View style={styles.minimumParent}>
                    <Text
                      allowFontScaling={false}
                      style={[styles.minimum, styles.minimumTypo]}
                    >
                      Minimum
                    </Text>
                    <Text
                      allowFontScaling={false}
                      style={[styles.off, styles.offText]}
                    >
                      OFF
                    </Text>
                    <Text
                      allowFontScaling={false}
                      style={[styles.text, styles.offText]}
                    >
                      20%
                    </Text>
                  </View>
                </View>
                <View style={styles.onAmazingDealsOffersCashParent}>
                  <Text
                    allowFontScaling={false}
                    style={[
                      styles.onAmazingDealsContainer,
                      styles.bigBrandsFlexBox,
                    ]}
                  >
                    <Text
                      allowFontScaling={false}
                      style={styles.onAmazingDealsContainer1}
                    >
                      <Text allowFontScaling={false} style={styles.onAmazing}>
                        <Text
                          allowFontScaling={false}
                          style={styles.onAmazing1}
                        >
                          On Amazing
                        </Text>
                        <Text
                          allowFontScaling={false}
                          style={styles.text1}
                        >{` `}</Text>
                      </Text>
                      <Text
                        allowFontScaling={false}
                        style={[
                          styles.dealsOffersCashback,
                          styles.trendingCategoriesTypo,
                        ]}
                      >
                        Deals, Offers, Cashback
                      </Text>
                    </Text>
                  </Text>
                  <Text
                    allowFontScaling={false}
                    style={[styles.bigBrands, styles.bigBrandsFlexBox]}
                  >
                    Big Brands
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <PrimeBrands />
          <View style={styles.topCategories}>
            <DiscountsAndOffers />
            <TopCashback />
            <EarlyDeals />
            <ClothingOffers />
            <FoodsOffers />
            <BeautyAndSpaOffers />
            <RealEstateOffers />
            <HospitalsOffers />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default memo(HomeScreen);
