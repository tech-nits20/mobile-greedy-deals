import React, { memo, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentLocation,
  getClothingOffers,
  fetchClothingOffersAction,
  getAllCategoriesList,
  getPreviousCurrentLocation,
} from '../../redux/sagas/categories/categoryRedux';
import { ILatLongType } from '../../redux/sagas/categories/categoriesTypes';
import DealsAndOffersSection from '../../components/DealsAndOffersSection';
import { ParamListBase, useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { SEE_ALL_DEALS_SCREEN } from '../../routes/Routes';
import { useLocationChange } from '../../hooks/useLocationChange';

const ClothingOffers: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const clothingOffers = useSelector(getClothingOffers);
  const allCategories = useSelector(getAllCategoriesList);
  const location = useSelector(getCurrentLocation);
  const { isLocationChange } = useLocationChange();

  const req: ILatLongType = {
    lat: location.lat,
    lng: location.lng,
  };
  useEffect(() => {
    if (
      clothingOffers.data.length === 0 &&
      !clothingOffers.isFetched &&
      !clothingOffers.loading
    ) {
      dispatch(fetchClothingOffersAction(req));
    }
  }, [clothingOffers]);

  useEffect(() => {
    if (isLocationChange) {
      console.log(`==CALL CLOTH`);

      dispatch(fetchClothingOffersAction(req));
    }
  }, [location, allCategories]);

  const isDisplay = () => {
    if (
      clothingOffers.error ||
      (!clothingOffers.loading && clothingOffers.data.length === 0)
    ) {
      return false;
    }
    return true;
  };

  const onSeeAllDealsClicked = () => {
    navigation.navigate(SEE_ALL_DEALS_SCREEN, { items: clothingOffers.data });
  };

  return (
    <View
      style={{
        display: !isDisplay() ? 'none' : 'flex',
      }}
    >
      <DealsAndOffersSection
        sectionTitle="Clothing offers"
        items={clothingOffers.data?.slice(0, 10)}
        loading={clothingOffers?.data?.length === 0 && clothingOffers?.loading}
        location={location.locationName}
        onSeeAllPressed={onSeeAllDealsClicked}
      />
    </View>
  );
};

export default memo(ClothingOffers);
