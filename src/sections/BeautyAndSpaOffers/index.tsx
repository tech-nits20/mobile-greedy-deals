import React, { memo, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentLocation,
  getBeautyAndSpaOffers,
  fetchBeautyAndSpaOffersAction,
  getAllCategoriesList,
} from '../../redux/sagas/categories/categoryRedux';
import { ILatLongType } from '../../redux/sagas/categories/categoriesTypes';
import DealsAndOffersSection from '../../components/DealsAndOffersSection';
import { ParamListBase, useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { SEE_ALL_DEALS_SCREEN } from '../../routes/Routes';
import { useLocationChange } from '../../hooks/useLocationChange';

const BeautyAndSpaOffers: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const beautySpaOffers = useSelector(getBeautyAndSpaOffers);
  const allCategories = useSelector(getAllCategoriesList);
  const location = useSelector(getCurrentLocation);
  const { isLocationChange } = useLocationChange();

  const req: ILatLongType = {
    lat: location.lat,
    lng: location.lng,
  };
  useEffect(() => {
    if (
      beautySpaOffers.data.length === 0 &&
      !beautySpaOffers.isFetched &&
      !beautySpaOffers.loading
    ) {
      dispatch(fetchBeautyAndSpaOffersAction(req));
    }
  }, [beautySpaOffers]);

  useEffect(() => {
    if (isLocationChange) {
      dispatch(fetchBeautyAndSpaOffersAction(req));
    }
  }, [location, allCategories]);

  const isDisplay = () => {
    if (
      beautySpaOffers.error ||
      (!beautySpaOffers.loading && beautySpaOffers.data.length === 0)
    ) {
      return false;
    }
    return true;
  };

  const onSeeAllDealsClicked = () => {
    navigation.navigate(SEE_ALL_DEALS_SCREEN, { items: beautySpaOffers.data });
  };

  return (
    <View
      style={{
        display: !isDisplay() ? 'none' : 'flex',
      }}
    >
      <DealsAndOffersSection
        sectionTitle="Beauty and Spa"
        items={beautySpaOffers.data}
        loading={
          beautySpaOffers?.data?.length === 0 && beautySpaOffers?.loading
        }
        location={location.locationName}
        onSeeAllPressed={onSeeAllDealsClicked}
      />
    </View>
  );
};

export default memo(BeautyAndSpaOffers);
