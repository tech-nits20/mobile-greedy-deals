import React, { memo, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentLocation,
  getClothingOffers,
  fetchClothingOffersAction,
  getFoodsOffers,
  fetchFoodsOffersAction,
  getAllCategoriesList,
} from '../../redux/sagas/categories/categoryRedux';
import { ILatLongType } from '../../redux/sagas/categories/categoriesTypes';
import DealsAndOffersSection from '../../components/DealsAndOffersSection';
import { ParamListBase, useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { SEE_ALL_DEALS_SCREEN } from '../../routes/Routes';
import { useLocationChange } from '../../hooks/useLocationChange';

const FoodsOffers: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const foodsOffers = useSelector(getFoodsOffers);
  const allCategories = useSelector(getAllCategoriesList);
  const location = useSelector(getCurrentLocation);
  const { isLocationChange } = useLocationChange();

  const req: ILatLongType = {
    lat: location.lat,
    lng: location.lng,
  };
  useEffect(() => {
    if (
      foodsOffers.data.length === 0 &&
      !foodsOffers.isFetched &&
      !foodsOffers.loading
    ) {
      dispatch(fetchFoodsOffersAction(req));
    }
  }, [foodsOffers]);

  useEffect(() => {
    if (isLocationChange) {
      dispatch(fetchFoodsOffersAction(req));
    }
  }, [location, allCategories]);

  const isDisplay = () => {
    if (
      foodsOffers.error ||
      (!foodsOffers.loading && foodsOffers.data.length === 0)
    ) {
      return false;
    }
    return true;
  };

  const onSeeAllDealsClicked = () => {
    navigation.navigate(SEE_ALL_DEALS_SCREEN, { items: foodsOffers.data });
  };

  return (
    <View
      style={{
        display: !isDisplay() ? 'none' : 'flex',
      }}
    >
      <DealsAndOffersSection
        sectionTitle="Foods and Bakers"
        items={foodsOffers.data}
        loading={foodsOffers?.data?.length === 0 && foodsOffers?.loading}
        location={location.locationName}
        onSeeAllPressed={onSeeAllDealsClicked}
      />
    </View>
  );
};

export default memo(FoodsOffers);
