import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { styles } from "./styles";
import { ParamListBase, useNavigation, useRoute } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";

const TopAppBar = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const route = useRoute();
  console.log(`==NAV: ${JSON.stringify(route)}`);
  
  
  return (
    <View style={[styles.locationUserBar, styles.locationFlexBox]}>
      <View
        style={[
          styles.locationCrosshairsIcon1Parent,
          styles.locationParentFlexBox,
        ]}
      >
        {navigation?.canGoBack() ? (
          <Pressable
            style={styles.backArrowIcon1Wrapper}
            onPress={() => navigation?.goBack()}
          >
            <Image
              style={[styles.backArrowIcon1, styles.backArrowIcon1Layout]}
              resizeMode="cover"
              source={require("../../../assets/211686-back-arrow-icon-1.png")}
            />
          </Pressable>
        ) : (
          <Image
            style={styles.locationCrosshairsIcon1}
            resizeMode="cover"
            source={require("../../../assets/8665611-location-crosshairs-icon-1.png")}
          />
        )}

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
              source={require("../../../assets/211817-search-strong-icon-1.png")}
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
            source={require("../../../assets/frame-3.png")}
          />
        </View>
        <Image
          style={[styles.frameChild, styles.childLayout]}
          resizeMode="cover"
          source={require("../../../assets/frame-3.png")}
        />
        <View style={styles.menuLeftIcon1Wrapper}>
          <Image
            style={styles.menuLeftIcon1}
            resizeMode="cover"
            source={require("../../../assets/9057028-menu-left-icon-1.png")}
          />
        </View>
      </View>
      <View style={[styles.locationUserBarItem, styles.childLayout]} />
    </View>
  );
};

export default TopAppBar;
