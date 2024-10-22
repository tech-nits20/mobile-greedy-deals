import React, {useState} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CATEGORIES_SCREEN, HOME_SCREEN, LISTING_SCREEN } from "./src/routes/Routes";
import CategoriesScreen from './src/screens/CategoriesScreen';
import HomeScreen from './src/screens/HomeScreen';
import ListingScreen from './src/screens/ListingScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName={HOME_SCREEN}
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name={HOME_SCREEN}
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={LISTING_SCREEN}
              component={ListingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={CATEGORIES_SCREEN}
              component={CategoriesScreen}
              options={{ headerShown: false, title: 'Categories' }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
