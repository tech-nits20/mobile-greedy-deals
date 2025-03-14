import React, { StrictMode, useState } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  CATEGORY_PRODUCTS_FILTER_SCREEN,
  HOME_SCREEN,
  HOME_TABS,
  LISTING_SCREEN,
  PRODUCT_DETAILS_SCREEN,
  SEE_ALL_DEALS_SCREEN,
} from './src/routes/Routes';
import BottomTabBar from './src/components/BottomTabBar';
import { Color } from './GlobalStyles';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CategoryProductsFilters from './src/components/CategoryProductsFilters';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import ListingScreen from './src/screens/ListingScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import SeeAllScreen from './src/screens/SeeAllScreen';

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
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Provider store={store}>
          <NavigationContainer theme={MyTheme}>
            {hideSplashScreen ? (
              <Stack.Navigator
                initialRouteName={HOME_SCREEN}
                screenOptions={{ headerShown: false }}
              >
                <Stack.Screen name={HOME_TABS} component={BottomTabBar} />
                <Stack.Screen
                  name={CATEGORY_PRODUCTS_FILTER_SCREEN}
                  component={CategoryProductsFilters}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name={LISTING_SCREEN}
                  component={ListingScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name={PRODUCT_DETAILS_SCREEN}
                  component={ProductDetailsScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name={SEE_ALL_DEALS_SCREEN}
                  component={SeeAllScreen}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            ) : null}
          </NavigationContainer>
        </Provider>
      </GestureHandlerRootView>
    </>
  );
};
export default App;
