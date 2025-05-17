import React, { memo, useEffect, useState } from 'react';
import {
  View,
  Text,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import PrimeBrandItem from '../../components/PrimeBrandItem';
import { FlatList } from 'react-native-gesture-handler';
import { Padding } from '../../../GlobalStyles';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPremiumBrandsOffersAction,
  getCurrentLocation,
  getPremiumBrandsOffers,
  getPremiumBrandsStatus,
} from '../../redux/sagas/categories/categoryRedux';
import {
  IDiscountsOffersItem,
  ILatLongType,
} from '../../redux/sagas/categories/categoriesTypes';
import Loader from '../../components/Loader';
import { getOfferType } from '../../helper/Utils';
import { OfferTypeEnum } from '../../types/listingTypes';
import { ParamListBase, useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  PRODUCT_DETAILS_SCREEN,
  SEE_ALL_DEALS_SCREEN,
} from '../../routes/Routes';
import { IProductInfo } from '../../redux/sagas/products/productsTypes';

const PrimeBrands = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const premiumBrandsOffers = useSelector(getPremiumBrandsOffers);
  const premiumBrandsStatus = useSelector(getPremiumBrandsStatus);
  const location = useSelector(getCurrentLocation);
  const [heights, setHeights] = useState({});

  const handleLayout = (
    event: { nativeEvent: { layout: { height: any } } },
    id: any
  ) => {
    const { height } = event.nativeEvent.layout;
    setHeights((prev) => ({ ...prev, [id]: height }));
  };

  const req: ILatLongType = {
    lat: location.lat,
    lng: location.lng,
  };
  useEffect(() => {
    if (premiumBrandsOffers.length === 0) {
      dispatch(fetchPremiumBrandsOffersAction(req));
    }
  }, [premiumBrandsOffers]);

  useEffect(() => {
    if (
      location.locationName &&
      premiumBrandsOffers.length === 0 &&
      !premiumBrandsStatus?.isFetched
    ) {
      dispatch(fetchPremiumBrandsOffersAction(req));
    }
  }, [location]);

  const onSeeAllDealsHandler = () => {
    navigation.navigate(SEE_ALL_DEALS_SCREEN, { items: premiumBrandsOffers });
  };

  const onCardPressed = (res: IDiscountsOffersItem) => {
    const item: IProductInfo = {
      ...res,
    };
    navigation.navigate(PRODUCT_DETAILS_SCREEN, { product: item });
  };

  return (
    <View
      style={[
        styles.frameGroup,
        {
          display:
            premiumBrandsOffers.length > 0 &&
            !premiumBrandsStatus.premiumBrandLoading
              ? 'flex'
              : 'none',
        },
      ]}
    >
      <View style={styles.primeBrandsParent}>
        <Text style={[styles.primeBrands, styles.primeBrandsTypo]}>
          Prime Brands
        </Text>
        <TouchableOpacity onPress={onSeeAllDealsHandler}>
          <Text style={styles.frameChild}>{'See all Deals'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.frameContainer}>
        {premiumBrandsOffers.length === 0 &&
        !premiumBrandsStatus.premiumBrandLoading ? (
          <Loader />
        ) : (
          <FlatList
            data={premiumBrandsOffers.slice(0, 10)}
            nestedScrollEnabled
            horizontal
            scrollEnabled={premiumBrandsOffers.length > 1}
            bounces={false}
            extraData={heights}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
              <View style={{ paddingEnd: Padding.p_base }} />
            )}
            renderItem={({ item }) => {
              const offerType = getOfferType(item?.offerType);
              return (
                <View onLayout={(event) => handleLayout(event, item.id)}>
                  <PrimeBrandItem
                    key={item.title}
                    bgImage={item.vendorLogo}
                    expiryDate={item.expiryEndDate}
                    offerPrice={
                      item.offerType?.selectedOfferType ===
                      OfferTypeEnum.ORIGINAL_PRICE
                        ? item.offerPrice
                        : -1
                    }
                    offerType={offerType}
                    offerCategories={item?.offerCategories}
                    storeName={item?.stores?.[0].storeName}
                    location={item?.stores?.[0].storeCity}
                    onCTAClick={() => onCardPressed(item)}
                  />
                </View>
              );
            }}
          />
        )}
      </View>
    </View>
  );
};

export default memo(PrimeBrands);
