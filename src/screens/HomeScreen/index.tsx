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

const HomeScreen = () => {
  return (
    <>
      <TopAppBar />
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
                    <Text style={[styles.minimum, styles.minimumTypo]}>
                      Minimum
                    </Text>
                    <Text style={[styles.off, styles.offText]}>OFF</Text>
                    <Text style={[styles.text, styles.offText]}>20%</Text>
                  </View>
                </View>
                <View style={styles.onAmazingDealsOffersCashParent}>
                  <Text
                    style={[
                      styles.onAmazingDealsContainer,
                      styles.bigBrandsFlexBox,
                    ]}
                  >
                    <Text style={styles.onAmazingDealsContainer1}>
                      <Text style={styles.onAmazing}>
                        <Text style={styles.onAmazing1}>On Amazing</Text>
                        <Text style={styles.text1}>{` `}</Text>
                      </Text>
                      <Text
                        style={[
                          styles.dealsOffersCashback,
                          styles.trendingCategoriesTypo,
                        ]}
                      >
                        Deals, Offers, Cashback
                      </Text>
                    </Text>
                  </Text>
                  <Text style={[styles.bigBrands, styles.bigBrandsFlexBox]}>
                    Big Brands
                  </Text>
                </View>
              </View>
              <PrimeBrands />
              <View style={styles.topCategories}>
                <DiscountsAndOffers />
                <TopCashback />
                <EarlyDeals />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default memo(HomeScreen);
