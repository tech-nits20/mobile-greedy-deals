import React, { StrictMode, useState } from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HOME_SCREEN } from "./src/routes/Routes";
import BottomTabBar from "./src/components/BottomTabBar";
import { Color } from "./GlobalStyles";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();
const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = useState(true);

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Color.colorWhite,
    },
  };

  return (
    <>
      <StrictMode >
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer theme={MyTheme}>
            {hideSplashScreen ? (
              <Stack.Navigator
                initialRouteName={HOME_SCREEN}
                screenOptions={{ headerShown: false }}
              >
                <Stack.Screen name="HomeTabs" component={BottomTabBar} />
              </Stack.Navigator>
            ) : null}
          </NavigationContainer>
        </GestureHandlerRootView>
      </StrictMode>
    </>
  );
};
export default App;
