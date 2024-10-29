import React, { FC, memo } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const mockSortOption = [
  "Sort By",
  "Brands",
  "Local But Popular",
  "GD Extra Discount",
];

const FilterAndSort: FC = () => {
  return (
    <ScrollView horizontal>
      <View style={styles.frameWrapper10}>
        <View style={[styles.frameParent10, styles.frameParentFlexBox]}>
          <View
            style={[
              styles.filterSettingsSlidersIcon1Parent,
              styles.sortByWrapperLayout,
            ]}
          >
            <Image
              style={styles.filterSettingsSlidersIcon1}
              resizeMode="cover"
              source={require("../../../assets/2738302-filter-settings-sliders-icon-1.png")}
            />
            <Text style={[styles.filter, styles.filterTypo]}>Filter</Text>
          </View>
          {mockSortOption.map((item) => {
            return (
              <View key={item} style={[styles.sortByWrapper, styles.sortByWrapperLayout]}>
                <Text style={[styles.sortBy, styles.filterTypo]}>{item}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default memo(FilterAndSort);
