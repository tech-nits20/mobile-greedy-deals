import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageSourcePropType,
} from "react-native";
import {
  Gap,
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
} from "../../GlobalStyles";

export type FrameComponent2Type = {
  categoryVarietyRandomShu?: ImageSourcePropType;
  bxsGiftIcon1?: ImageSourcePropType;
  giftboxGiftPresentIcon1?: ImageSourcePropType;
  summerSaleDiscountOffer?: ImageSourcePropType;
  buyCartDiscountPriceSal?: ImageSourcePropType;
  boxMoneyIcon1?: ImageSourcePropType;
  boxMoneyIcon11?: ImageSourcePropType;

  /** Style props */
  propFlex?: number | string;
  propWidth?: number | string;
  propFlex1?: number | string;
  propWidth1?: number | string;
  propFlex2?: number | string;
  propWidth2?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent2 = ({
  categoryVarietyRandomShu,
  bxsGiftIcon1,
  giftboxGiftPresentIcon1,
  summerSaleDiscountOffer,
  buyCartDiscountPriceSal,
  boxMoneyIcon1,
  boxMoneyIcon11,
  propFlex,
  propWidth,
  propFlex1,
  propWidth1,
  propFlex2,
  propWidth2,
}: FrameComponent2Type) => {
  const frameView2Style = useMemo(() => {
    return {
      ...getStyleValue("flex", propFlex),
      ...getStyleValue("width", propWidth),
    };
  }, [propFlex, propWidth]);

  const frameView3Style = useMemo(() => {
    return {
      ...getStyleValue("flex", propFlex1),
      ...getStyleValue("width", propWidth1),
    };
  }, [propFlex1, propWidth1]);

  const frameView4Style = useMemo(() => {
    return {
      ...getStyleValue("flex", propFlex2),
      ...getStyleValue("width", propWidth2),
    };
  }, [propFlex2, propWidth2]);

  return (
    <View style={[styles.mainApps1415ProInner, styles.frameParentFlexBox]}>
      <View style={[styles.frameParent, styles.frameParentFlexBox]}>
        <View style={[styles.homeParent, styles.parentFlexBox]}>
          <Text style={styles.home}>Home</Text>
          <Image
            style={[
              styles.homeMainRoomEstatePropertyIcon,
              styles.homeIconLayout,
            ]}
            resizeMode="cover"
            source={require("../../assets/1564508-home-main-room-estate-property-icon-1.png")}
          />
          <Image
            style={[
              styles.buildingBusinessHomeHouseMIcon,
              styles.homeIconLayout,
            ]}
            resizeMode="cover"
            source={require("../../assets/4781831-building-business-home-house-mobile-icon-1.png")}
          />
        </View>
        <View style={styles.parentFlexBox}>
          <Text style={styles.home}>Categories</Text>
          <Image
            style={[
              styles.homeMainRoomEstatePropertyIcon,
              styles.homeIconLayout,
            ]}
            resizeMode="cover"
            source={require("../../assets/9055212-bxs-category-icon-1.png")}
          />
          <Image
            style={[
              styles.buildingBusinessHomeHouseMIcon,
              styles.homeIconLayout,
            ]}
            resizeMode="cover"
            source={categoryVarietyRandomShu}
          />
        </View>
        <View
          style={[styles.dealsParent, styles.parentFlexBox, frameView2Style]}
        >
          <Text style={styles.home}>Deals</Text>
          <Image
            style={[
              styles.homeMainRoomEstatePropertyIcon,
              styles.homeIconLayout,
            ]}
            resizeMode="cover"
            source={bxsGiftIcon1}
          />
          <Image
            style={[
              styles.buildingBusinessHomeHouseMIcon,
              styles.homeIconLayout,
            ]}
            resizeMode="cover"
            source={giftboxGiftPresentIcon1}
          />
        </View>
        <View
          style={[styles.dealsParent, styles.parentFlexBox, frameView3Style]}
        >
          <Text style={styles.home}>Offers</Text>
          <Image
            style={[
              styles.homeMainRoomEstatePropertyIcon,
              styles.homeIconLayout,
            ]}
            resizeMode="cover"
            source={summerSaleDiscountOffer}
          />
          <Image
            style={styles.buyCartDiscountPriceSaleIIcon}
            resizeMode="cover"
            source={buyCartDiscountPriceSal}
          />
        </View>
        <View
          style={[styles.dealsParent, styles.parentFlexBox, frameView4Style]}
        >
          <Text style={styles.home}>Cashback</Text>
          <Image
            style={[
              styles.homeMainRoomEstatePropertyIcon,
              styles.homeIconLayout,
            ]}
            resizeMode="cover"
            source={require("../../assets/6843092-currency-finance-financial-income-management-icon-1.png")}
          />
          <Image
            style={[
              styles.buildingBusinessHomeHouseMIcon,
              styles.homeIconLayout,
            ]}
            resizeMode="cover"
            source={boxMoneyIcon1}
          />
        </View>
        <View style={styles.parentFlexBox}>
          <Text style={styles.home}>Profile</Text>
          <Image
            style={[
              styles.homeMainRoomEstatePropertyIcon,
              styles.homeIconLayout,
            ]}
            resizeMode="cover"
            source={require("../../assets/6843092-currency-finance-financial-income-management-icon-11.png")}
          />
          <Image
            style={[
              styles.buildingBusinessHomeHouseMIcon,
              styles.homeIconLayout,
            ]}
            resizeMode="cover"
            source={boxMoneyIcon11}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  parentFlexBox: {
    gap: Gap.gap_2xs,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  homeIconLayout: {
    height: 18,
    width: 18,
    overflow: "hidden",
  },
  home: {
    fontSize: FontSize.size_3xs,
    lineHeight: 10,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorLightslategray,
    textAlign: "left",
  },
  homeMainRoomEstatePropertyIcon: {
    display: "none",
    overflow: "hidden",
  },
  buildingBusinessHomeHouseMIcon: {
    overflow: "hidden",
  },
  homeParent: {
    borderRadius: Border.br_81xl,
  },
  dealsParent: {
    display: "none",
  },
  buyCartDiscountPriceSaleIIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  frameParent: {
    alignSelf: "stretch",
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    height: 50,
    flexDirection: "row",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    gap: Gap.gap_lg,
    borderRadius: Border.br_81xl,
  },
  mainApps1415ProInner: {
    width: 430,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_3xs,
    zIndex: 0,
  },
});

export default FrameComponent2;
