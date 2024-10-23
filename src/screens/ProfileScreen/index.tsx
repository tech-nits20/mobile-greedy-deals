import React from "react";
import { View, Text } from "react-native";

const ProfileScreen = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        height: "100%",
      }}
    >
      <Text style={{fontSize: 24, color: 'black'}}>Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;
