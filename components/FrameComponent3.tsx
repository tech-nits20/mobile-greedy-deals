import * as React from "react";
import { Image, StyleSheet, View, Pressable, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  FontSize,
  Gap,
  Color,
  FontFamily,
  Border,
  Padding,
} from "../GlobalStyles";

export type FrameComponent3Type = {
  fashion?: string;

  /** Action props */
  onFramePressablePress?: () => void;
};

const FrameComponent3 = ({
  fashion,
  onFramePressablePress,
}: FrameComponent3Type) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.locationUserBarWrapper}>
      <View style={styles.locationUserBar}>
        <Pressable
          style={styles.backArrowIcon1Wrapper}
          onPress={onFramePressablePress}
        >
          <Image
            style={[styles.backArrowIcon1, styles.backArrowIcon1Layout]}
            resizeMode="cover"
            source={require("../assets/211686-back-arrow-icon-1.png")}
          />
        </Pressable>
        <Image
          style={[styles.locationUserBarChild, styles.searchStrongIcon1Layout]}
          resizeMode="cover"
          source={require("../assets/8665611-location-crosshairs-icon-1.png")}
        />
        <View style={styles.fashionWrapper}>
          <Text style={[styles.fashion, styles.offersTypo]}>{fashion}</Text>
        </View>
        <View style={[styles.locationUserBarParent, styles.parentFlexBox]}>
          <View style={styles.locationUserBar1}>
            <View style={[styles.locationUserBarParent, styles.parentFlexBox]}>
              <Image
                style={[
                  styles.searchStrongIcon1,
                  styles.searchStrongIcon1Layout,
                ]}
                resizeMode="cover"
                source={require("../assets/211817-search-strong-icon-1.png")}
              />
              <View style={styles.parentFlexBox}>
                <Text style={[styles.searchFor, styles.dealsTypo]}>
                  Search for
                </Text>
                <Text style={[styles.offers, styles.offersTypo]}>‘Offers’</Text>
                <Text style={[styles.deals, styles.dealsTypo]}>Deals</Text>
                <Text style={[styles.deals, styles.dealsTypo]}>Cashback</Text>
              </View>
            </View>
            <Image
              style={[styles.locationUserBarItem, styles.backArrowIcon1Layout]}
              resizeMode="cover"
              source={require("../assets/frame-3.png")}
            />
          </View>
          <View style={styles.backArrowIcon1Wrapper}>
            <Image
              style={styles.menuLeftIcon1}
              resizeMode="cover"
              source={require("../assets/9057028-menu-left-icon-1.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backArrowIcon1Layout: {
    height: 24,
    width: 24,
  },
  searchStrongIcon1Layout: {
    height: 16,
    width: 16,
  },
  offersTypo: {
    textAlign: "left",
    fontSize: FontSize.size_xs,
  },
  parentFlexBox: {
    gap: Gap.gap_xs,
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  dealsTypo: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    textAlign: "left",
  },
  backArrowIcon1: {
    overflow: "hidden",
  },
  backArrowIcon1Wrapper: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorGray_300,
    justifyContent: "center",
    width: 24,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  locationUserBarChild: {
    display: "none",
  },
  fashion: {
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorWhite,
  },
  fashionWrapper: {
    width: 120,
    alignItems: "center",
    flexDirection: "row",
  },
  searchStrongIcon1: {
    overflow: "hidden",
  },
  searchFor: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
  },
  offers: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorBlack,
  },
  deals: {
    fontSize: FontSize.size_sm,
    display: "none",
  },
  locationUserBarParent: {
    justifyContent: "center",
  },
  locationUserBarItem: {
    display: "none",
  },
  locationUserBar1: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorWhite,
    height: 32,
    padding: Padding.p_5xs,
    flex: 1,
    gap: Gap.gap_sm,
    alignItems: "center",
    flexDirection: "row",
  },
  menuLeftIcon1: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  locationUserBar: {
    gap: Gap.gap_sm,
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  locationUserBarWrapper: {
    backgroundColor: Color.colorOrangered_100,
    padding: Padding.p_3xs,
    alignSelf: "stretch",
  },
});

export default FrameComponent3;
