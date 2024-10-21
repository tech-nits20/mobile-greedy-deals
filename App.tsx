const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainApps1415Pro from "./screens/MainApps1415Pro";
import ListingPage from "./screens/ListingPage";
import Categories from "./screens/Categories";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="MainApps1415Pro"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="MainApps1415Pro"
              component={MainApps1415Pro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ListingPage"
              component={ListingPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Categories"
              component={Categories}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
