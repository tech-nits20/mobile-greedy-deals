import React, { FC, memo, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./styles";
import { Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const mockSortOption = [
  "Sort By",
  "Brands",
  "Local But Popular",
  "GD Extra Discount",
];

export interface FilterAndSortProps {
  onFilterSelected?: () => void;
}
const FilterAndSort: FC<FilterAndSortProps> = ({ onFilterSelected }) => {
  const [isSelected, setIsSelected] = useState(String);

  const onFilterPressed = (name: string) => {
    setIsSelected(name);
  };

  return (
    <ScrollView horizontal>
      <View style={styles.frameWrapper10}>
        <View style={[styles.frameParent10, styles.frameParentFlexBox]}>
          <Pressable
            style={[
              styles.filterParent,
              styles.sortByWrapperLayout,
              isSelected === "Filter" && styles.filterSelected,
            ]}
            onPress={() => {
              onFilterPressed("Filter");
              onFilterSelected();
            }}
          >
            <Image
              style={styles.filterIcon}
              resizeMode="cover"
              source={
                isSelected === "Filter"
                  ? require("../../../assets/2738302-filter-settings-sliders-icon-1.png")
                  : require("../../../assets/filter_default.png")
              }
            />
            <Text
              style={[
                styles.filter,
                styles.filterTypo,
                isSelected === "Filter" && styles.filterTextSelected,
              ]}
            >
              Filter
            </Text>
          </Pressable>
          {mockSortOption.map((item) => {
            return (
              <Pressable
                key={item}
                style={[
                  styles.sortByWrapper,
                  styles.sortByWrapperLayout,
                  isSelected === item && styles.sortWrapperSelected,
                ]}
                onPress={() => onFilterPressed(item)}
              >
                <Text
                  style={[
                    styles.sortBy,
                    styles.filterTypo,
                    isSelected === item && styles.sortText,
                  ]}
                >
                  {item}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default memo(FilterAndSort);
