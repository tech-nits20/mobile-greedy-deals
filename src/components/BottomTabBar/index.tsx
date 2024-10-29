import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MENU_SCREEN,
  CATEGORIES_SCREEN_STACK,
  HOME_SCREEN,
  PROFILE_SCREEN,
} from "../../routes/Routes";
import HomeScreen from "../../screens/HomeScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import CategoriesStackNavigator from "../../navigator/CategoriesStackNavigator";
import { Color } from "../../../GlobalStyles";
import MenuScreen from "../../screens/MenuScreen";

const Tab = createBottomTabNavigator();
const BottomTabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName={HOME_SCREEN}
      screenOptions={{
        tabBarActiveTintColor: Color.colorOrangered_100,
        headerShown: false,
        tabBarStyle: styles.frameParent,
        tabBarItemStyle: { padding: 8 },
      }}
    >
      <Tab.Screen
        name={HOME_SCREEN}
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <Image
              style={styles.homeIconLayout}
              resizeMode="cover"
              source={
                focused
                  ? require("../../../assets/home_selected_icon.png")
                  : require("../../../assets/home_icon.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name={CATEGORIES_SCREEN_STACK}
        component={CategoriesStackNavigator}
        options={{
          tabBarLabel: "Categories",
          tabBarIcon: ({ focused }) => (
            <Image
              style={styles.homeIconLayout}
              resizeMode="cover"
              source={
                focused
                  ? require("../../../assets/category_selected_icon.png")
                  : require("../../../assets/7148740-category-variety-random-shuffle-icon-1.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name={MENU_SCREEN}
        component={MenuScreen}
        options={{
          tabBarLabel: "Menu",
          tabBarIcon: ({ focused }) => (
            <Image
              style={styles.homeIconLayout}
              resizeMode="cover"
              source={
                focused
                  ? require("../../../assets/profile_selected_icon.png")
                  : require("../../../assets/172507-box-money-icon-11.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name={PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => (
            <Image
              style={styles.homeIconLayout}
              resizeMode="cover"
              source={
                focused
                  ? require("../../../assets/profile_selected_icon.png")
                  : require("../../../assets/172507-box-money-icon-11.png")
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabBar;
