import React from "react";
import { View, Text } from "react-native";
import LoginScreen from "../LoginScreen";

const ProfileScreen = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        height: "100%",
        width: '100%'
      }}
    >
      <LoginScreen />
    </View>
  );
};

export default ProfileScreen;
