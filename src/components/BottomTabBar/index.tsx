import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CATEGORIES_SCREEN_STACK, HOME_SCREEN, PROFILE_SCREEN } from "../../routes/Routes";
import HomeScreen from "../../screens/HomeScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import CategoriesStackNavigator from "../../navigator/CategoriesStackNavigator";

const Tab = createBottomTabNavigator();
const BottomTabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName={HOME_SCREEN}
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
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
          tabBarIcon: () => (
            <Image
              style={styles.homeIconLayout}
              resizeMode="cover"
              source={require("../../../assets/4781831-building-business-home-house-mobile-icon-1.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name={CATEGORIES_SCREEN_STACK}
        component={CategoriesStackNavigator}
        options={{
          tabBarLabel: "Categories",
          tabBarIcon: () => (
            <Image
              style={styles.homeIconLayout}
              resizeMode="cover"
              source={require("../../../assets/7148740-category-variety-random-shuffle-icon-1.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name={PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => (
            <Image
              style={styles.homeIconLayout}
              resizeMode="cover"
              source={require("../../../assets/172507-box-money-icon-11.png")}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabBar;
