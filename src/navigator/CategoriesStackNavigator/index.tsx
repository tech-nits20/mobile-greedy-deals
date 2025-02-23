import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  HOME_SCREEN,
  LISTING_SCREEN,
  CATEGORIES_SCREEN,
  PRODUCT_DETAILS_SCREEN,
  CATEGORY_PRODUCTS_FILTER_SCREEN,
} from '../../routes/Routes';
import CategoriesScreen from '../../screens/CategoriesScreen';
import ListingScreen from '../../screens/ListingScreen';
import ProductDetailsScreen from '../../screens/ProductDetailsScreen';

const Stack = createNativeStackNavigator();
const CategoriesStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={HOME_SCREEN}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name={CATEGORIES_SCREEN}
        component={CategoriesScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default CategoriesStackNavigator;
