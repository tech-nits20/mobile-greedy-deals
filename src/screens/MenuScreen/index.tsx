import React, { FC, memo } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import TopAppBar from "../../components/TopAppBar";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { ParamListBase, useNavigation, useRoute } from "@react-navigation/core";
import { LISTING_SCREEN, MENU_SCREEN } from "../../routes/Routes";
import { StackNavigationProp } from "@react-navigation/stack";

const mockAllMenu = [
  "Fashion",
  "Hotels & Dining",
  "Hospital & Diagnostics",
  "Electronics",
  "Beauty & Spa",
  "Golds",
  "Real State",
  "Automobile",
  "Entertainment",
  "Tour & Travels",
  "Music",
  "Shopping",
];

const MenuScreenItem = ({ item, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.menuItemParent}>
      <View style={styles.itemContainer}>
        <Image
          source={require("../../../assets/bodyshotofadarkskinnedfashionpng-11.png")}
        />
        <Text style={styles.menuItemTitle}>{item}</Text>
      </View>
    </Pressable>
  );
};
const MenuScreen: FC = () => {
  const route = useRoute();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const onItemPressed = () => {
    navigation.navigate(LISTING_SCREEN);
  };
  
  return (
    <View style={styles.container}>
      <TopAppBar title={route?.name === MENU_SCREEN ? "Menu" : ""} />
      <ScrollView>
        <View style={styles.menuGrid}>
          {mockAllMenu.map((item) => {
            return (
              <MenuScreenItem key={item} item={item} onPress={onItemPressed} />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default memo(MenuScreen);
