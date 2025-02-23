import React, { FC, memo, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { FlatList } from "react-native-gesture-handler";
import TopAppBar from "../TopAppBar";
import CTAButton from "../CTAButton";
import CheckBox from "@react-native-community/checkbox";
import { Color } from "../../../GlobalStyles";
import { ParamListBase, useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import Arrow from "../../../assets/triangle.png";

const mockFilterData = [
  {
    name: "Location",
    filters: [
      "2 - 4 kms",
      "5 - 7 kms",
      "8 - 10 kms",
      "11 - 14 kms",
      "15 - 20 kms",
    ],
  },
  {
    name: "Type",
    filters: ["All", "Offers", "Coupon", "Cashback", "Deals"],
  },
  {
    name: "Brands",
    filters: ["Huggies", "Pampars", "Himalaya", "1st cry", "Mama earth"],
  },
  {
    name: "Offers & Discounts",
    filters: [
      "Buy 1 Get 1",
      "Buy 1 Get 2",
      "Buy 1 Get 3",
      "10% - 20% OFF",
      "20% - 30% OFF",
    ],
  },
  {
    name: "Duration",
    filters: [
      "9 am to 12 pm",
      "12 pm tp 3 pm",
      "3 pm to 6 pm",
      "6 pm to 9 pm",
      "9 pm to 12 am",
    ],
  },
];
const CategoryProductsFilters: FC = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [selectedItem, setSelectedItem] = useState(0);
  const [toggleCheckBox, setToggleCheckBox] = useState([]);

  const onFilterApplied = () => {
    navigation.goBack();
  };

  const renderFilterItem = ({ item, index }) => {
    return (
      <Pressable
        onPress={() => setSelectedItem(index)}
        style={[
          styles.filterItem,
          selectedItem === index && styles.selectedFilterItem,
        ]}
      >
        {selectedItem === index && <View style={styles.innerItem} />}
        <Text style={{ color: Color.colorBlack }}>{item.name}</Text>
      </Pressable>
    );
  };

  const onCheckBoxChange = (value, index) => {
    const tempData = toggleCheckBox.find(
      (item) => item.parentIndex === selectedItem
    );
    let toggleData = tempData?.data;
    if (tempData) {
      const filterIndex = tempData.data?.find((val) => val.index === index);
      if (!filterIndex) {
        toggleData.push({ index, isChecked: value });
      } else {
        toggleData.find((item) => item.index === index).isChecked = value;
      }
    } else {
      toggleData = [{ index, isChecked: value }];
    }
    setToggleCheckBox([
      ...toggleCheckBox,
      { parentIndex: selectedItem, data: toggleData },
    ]);
  };
  console.log(`==TOGGLE: ${JSON.stringify(toggleCheckBox)}`);

  const rightSideItem = (item, index) => {
    return (
      <View style={styles.sideItem} key={item}>
        <CheckBox
          style={{ borderColor: "red", borderWidth: 1 }}
          disabled={false}
          tintColors={{
            false: Color.colorLightslategray,
            true: Color.colorOrangered_100,
          }}
          value={
            toggleCheckBox
              .find((val) => val.parentIndex === selectedItem)
              ?.data?.find((res) => res.index === index)?.isChecked
          }
          onValueChange={(value) => onCheckBoxChange(value, index)}
        />
        <Text style={{ color: Color.colorBlack }}>{item}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <TopAppBar isShowSearch={false} title="Filters" />
      <View style={styles.midContainer}>
        <View style={styles.leftContainer}>
          <FlatList
            data={mockFilterData}
            keyExtractor={(item) => item.name}
            renderItem={renderFilterItem}
          />
        </View>
        <View style={styles.rightContainer}>
          {mockFilterData[selectedItem].filters.map((item, index) => {
            return <View key={item}>{rightSideItem(item, index)}</View>;
          })}
        </View>
      </View>
      <View style={styles.footerButton}>
        <CTAButton title="Cancel" onPress={onFilterApplied} />
        <CTAButton title="Apply Filters" onPress={onFilterApplied} />
      </View>
    </View>
  );
};

export default memo(CategoryProductsFilters);
