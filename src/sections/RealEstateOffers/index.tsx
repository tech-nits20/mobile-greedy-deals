import React, { memo, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentLocation,
  getClothingOffers,
  fetchClothingOffersAction,
  getFoodsOffers,
  fetchFoodsOffersAction,
  getRealStateOffers,
  fetchRealStateOffersAction,
  getAllCategoriesList,
} from '../../redux/sagas/categories/categoryRedux';
import { ILatLongType } from '../../redux/sagas/categories/categoriesTypes';
import DealsAndOffersSection from '../../components/DealsAndOffersSection';
import { ParamListBase, useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { SEE_ALL_DEALS_SCREEN } from '../../routes/Routes';
import { useLocationChange } from '../../hooks/useLocationChange';

const RealEstateOffers: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const realEstateData = useSelector(getRealStateOffers);
  const allCategories = useSelector(getAllCategoriesList);
  const location = useSelector(getCurrentLocation);
  const { isLocationChange } = useLocationChange();

  const req: ILatLongType = {
    lat: location.lat,
    lng: location.lng,
  };
  useEffect(() => {
    if (
      realEstateData.data.length === 0 &&
      !realEstateData.isFetched &&
      !realEstateData.loading
    ) {
      dispatch(fetchRealStateOffersAction(req));
    }
  }, [realEstateData]);

  useEffect(() => {
    if (isLocationChange) {
      dispatch(fetchRealStateOffersAction(req));
    }
  }, [location, allCategories]);

  const isDisplay = () => {
    if (
      realEstateData.error ||
      (!realEstateData.loading && realEstateData.data.length === 0)
    ) {
      return false;
    }
    return true;
  };

  const onSeeAllDealsClicked = () => {
    navigation.navigate(SEE_ALL_DEALS_SCREEN, { items: realEstateData.data });
  };

  return (
    <View
      style={{
        display: !isDisplay() ? 'none' : 'flex',
      }}
    >
      <DealsAndOffersSection
        sectionTitle="Real Estate"
        items={realEstateData.data}
        loading={realEstateData?.data?.length === 0 && realEstateData?.loading}
        location={location.locationName}
        onSeeAllPressed={onSeeAllDealsClicked}
      />
    </View>
  );
};

export default memo(RealEstateOffers);
