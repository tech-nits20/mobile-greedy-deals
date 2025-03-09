import React, { memo, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  getDiscountsOffers,
  getDiscountOfferStatus,
  fetchDiscountsOffersAction,
  getCurrentLocation,
} from '../../redux/sagas/categories/categoryRedux';
import { ILatLongType } from '../../redux/sagas/categories/categoriesTypes';
import DealsAndOffersSection from '../../components/DealsAndOffersSection';
import { ParamListBase, useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { SEE_ALL_DEALS_SCREEN } from '../../routes/Routes';

const DiscountsAndOffers: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const discountsAndOffers = useSelector(getDiscountsOffers);
  const discountStatus = useSelector(getDiscountOfferStatus);
  const location = useSelector(getCurrentLocation);

  useEffect(() => {
    if (
      discountsAndOffers.length === 0 &&
      !discountStatus.isFetched &&
      !discountStatus.discountOffersLoading
    ) {
      const req: ILatLongType = {
        lat: location.lat,
        lng: location.lng,
      };
      dispatch(fetchDiscountsOffersAction(req));
    }
  }, [discountsAndOffers]);

  const isDisplay = () => {
    if (
      discountStatus.discountOffersLoading === false &&
      (discountStatus.discountOffersError || discountsAndOffers?.length === 0)
    ) {
      return false;
    }
    return true;
  };

  const onSeeAllDealsClicked = () => {
    navigation.navigate(SEE_ALL_DEALS_SCREEN, { items: discountsAndOffers });
  };

  return (
    <View
      style={{
        display: !isDisplay() ? 'none' : 'flex',
      }}
    >
      <DealsAndOffersSection
        sectionTitle="Discounts and offers"
        items={discountsAndOffers}
        onSeeAllPressed={onSeeAllDealsClicked}
      />
    </View>
  );
};

export default memo(DiscountsAndOffers);
