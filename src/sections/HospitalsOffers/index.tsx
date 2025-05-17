import React, { memo, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCurrentLocation,
  getHospitalOffers,
  fetchHospitalsOffersAction,
  getAllCategoriesList,
} from '../../redux/sagas/categories/categoryRedux';
import { ILatLongType } from '../../redux/sagas/categories/categoriesTypes';
import DealsAndOffersSection from '../../components/DealsAndOffersSection';
import { ParamListBase, useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { SEE_ALL_DEALS_SCREEN } from '../../routes/Routes';
import { useLocationChange } from '../../hooks/useLocationChange';

const HospitalsOffers: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const hospitalsData = useSelector(getHospitalOffers);
  const allCategories = useSelector(getAllCategoriesList);
  const location = useSelector(getCurrentLocation);
  const { isLocationChange } = useLocationChange();

  const req: ILatLongType = {
    lat: location.lat,
    lng: location.lng,
  };
  useEffect(() => {
    if (
      hospitalsData.data.length === 0 &&
      !hospitalsData.isFetched &&
      !hospitalsData.loading
    ) {
      dispatch(fetchHospitalsOffersAction(req));
    }
  }, [hospitalsData]);

  useEffect(() => {
    if (isLocationChange) {
      dispatch(fetchHospitalsOffersAction(req));
    }
  }, [location, allCategories]);

  const isDisplay = () => {
    if (
      hospitalsData.error ||
      (!hospitalsData.loading && hospitalsData.data.length === 0)
    ) {
      return false;
    }
    return true;
  };

  const onSeeAllDealsClicked = () => {
    navigation.navigate(SEE_ALL_DEALS_SCREEN, { items: hospitalsData.data });
  };

  return (
    <View
      style={{
        display: !isDisplay() ? 'none' : 'flex',
      }}
    >
      <DealsAndOffersSection
        sectionTitle="Hospitals"
        items={hospitalsData.data}
        loading={hospitalsData?.data?.length === 0 && hospitalsData?.loading}
        location={location.locationName}
        onSeeAllPressed={onSeeAllDealsClicked}
      />
    </View>
  );
};

export default memo(HospitalsOffers);
