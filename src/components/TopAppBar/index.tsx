import * as React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { ParamListBase, useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import { TextInput } from "react-native-gesture-handler";
import { Color } from "../../../GlobalStyles";
import { useCurrentLocation } from "../../hooks/useCurrentLocation";

export interface TopAppBarProps {
  title?: string;
}
const TopAppBar: React.FC<TopAppBarProps> = ({ title }) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const {city} = useCurrentLocation();

  return (
    <View style={[styles.locationUserBar, styles.locationFlexBox]}>
      <View
        style={[
          styles.locationParent,
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

        <Text style={styles.eastDelhiDelhi}>
          {title ?? city ?? "East Delhi, Delhi 110092."}
        </Text>
      </View>
      <View style={[styles.locationUserBarParent, styles.searchParentFlexBox]}>
        <TextInput
          style={[styles.locationUserBar1, styles.searchParentFlexBox]}
          placeholder="Search for 'Offers'"
          placeholderTextColor={Color.colorDimgray_100}
        />
      </View>
      <View style={[styles.locationUserBarItem, styles.childLayout]} />
    </View>
  );
};

export default TopAppBar;
