import { navigate } from '@react-navigation/routers/lib/typescript/src/CommonActions';
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ILatLongType,
  IDiscountsOffersItem,
  ICategory,
} from '../../redux/sagas/categories/categoriesTypes';
import {
  getEarlyDeals,
  getEarlyDealsStatus,
  getCurrentLocation,
  fetchEarlyDealsAction,
} from '../../redux/sagas/categories/categoryRedux';
import { View } from 'react-native';
import DealsAndOffersSection from '../../components/DealsAndOffersSection';
import { ParamListBase, useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { SEE_ALL_DEALS_SCREEN } from '../../routes/Routes';

const EarlyDeals = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const earlyDealsOffer = useSelector(getEarlyDeals);
  const earlyDealsStatus = useSelector(getEarlyDealsStatus);
  const location = useSelector(getCurrentLocation);

  useEffect(() => {
    if (
      earlyDealsOffer.length === 0 &&
      !earlyDealsStatus.isFetched &&
      !earlyDealsStatus.earlyDealsLoading
    ) {
      const req: ILatLongType = {
        lat: location.lat,
        lng: location.lng,
      };
      dispatch(fetchEarlyDealsAction(req));
    }
  }, [earlyDealsOffer]);

  const onHandleClick = (item: IDiscountsOffersItem) => {
    const data: ICategory = {
      name: '',
      id: item?.id,
    };
    // navigateToListing(data);
  };

  const isDisplay = () => {
    if (
      earlyDealsStatus.earlyDealsLoading === false &&
      (earlyDealsStatus.earlyDealsError || earlyDealsOffer?.length === 0)
    ) {
      return false;
    }
    return true;
  };

  const onSeeAllDealsClicked = () => {
    navigation.navigate(SEE_ALL_DEALS_SCREEN, { items: earlyDealsOffer });
  };

  return (
    <View
      style={{
        display: !isDisplay() ? 'none' : 'flex',
      }}
    >
      <DealsAndOffersSection
        sectionTitle="Early Deals"
        items={earlyDealsOffer}
        onSeeAllPressed={onSeeAllDealsClicked}
      />
    </View>
  );
};

export default memo(EarlyDeals);
