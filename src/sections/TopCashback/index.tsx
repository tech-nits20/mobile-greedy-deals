import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTopCashbackDiscounts,
  getTopCashbackStatus,
  getCurrentLocation,
  fetchTopCashbackDiscountsAction,
} from '../../redux/sagas/categories/categoryRedux';
import { navigate } from '@react-navigation/routers/lib/typescript/src/CommonActions';
import {
  ILatLongType,
  IDiscountsOffersItem,
  ICategory,
} from '../../redux/sagas/categories/categoriesTypes';
import { View } from 'react-native';
import DealsAndOffersSection from '../../components/DealsAndOffersSection';
import { ParamListBase, useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { SEE_ALL_DEALS_SCREEN } from '../../routes/Routes';

const TopCashback = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const cashbackOffers = useSelector(getTopCashbackDiscounts);
  const cashbackStatus = useSelector(getTopCashbackStatus);
  const location = useSelector(getCurrentLocation);

  useEffect(() => {
    if (
      cashbackOffers.length === 0 &&
      !cashbackStatus.isFetched &&
      !cashbackStatus.topCashbackLoading
    ) {
      const req: ILatLongType = {
        lat: location.lat,
        lng: location.lng,
      };
      dispatch(fetchTopCashbackDiscountsAction(req));
    }
  }, [cashbackOffers]);

  const onCardClicked = (item: IDiscountsOffersItem) => {
    const data: ICategory = {
      name: '',
      id: item?.id,
    };
    // navigateToListing(data);
  };

  const isDisplay = () => {
    if (
      !cashbackStatus.topCashbackLoading &&
      (cashbackStatus.topCashbackError || cashbackOffers?.length === 0)
    ) {
      return false;
    }
    return true;
  };

  const onSeeAllDealsClicked = () => {
    navigation.navigate(SEE_ALL_DEALS_SCREEN, { items: cashbackOffers });
  };
  return (
    <View
      style={{
        display: !isDisplay() ? 'none' : 'flex',
      }}
    >
      <DealsAndOffersSection
        sectionTitle="Top Cashback Stores"
        items={cashbackOffers}
        onSeeAllPressed={onSeeAllDealsClicked}
      />
    </View>
  );
};

export default memo(TopCashback);
