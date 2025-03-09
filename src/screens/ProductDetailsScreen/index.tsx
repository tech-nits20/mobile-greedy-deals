import React, { FC, memo, useEffect, useMemo, useState } from 'react';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { styles } from './styles';
import TopAppBar from '../../components/TopAppBar';
import CustomCarousel from '../../components/CustomCarousel';
import { useRoute, RouteProp } from '@react-navigation/core';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import ProductCategorySectionItem, {
  ProductCategoryItemType,
} from '../../components/ProductCategorySectionItem';
import { IProductInfo } from '../../redux/sagas/products/productsTypes';
import {
  getCategorySubCatName,
  getFormattedExpiryDate,
  getOfferDetailText,
} from '../../helper/Utils';
import CTAButton from '../../components/CTAButton';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchOfferCouponCodeAction,
  getOfferCouponCode,
} from '../../redux/sagas/products/productsRedux';
import { Color, FontSize } from '../../../GlobalStyles';
import RenderHTML from 'react-native-render-html';
import ProductMap from '../../components/ProductMap/ProductMap';
export interface ShopInfoItem {
  id: number;
  title: string;
  description: string;
}

const customStyles = {
  p: {
    margin: 0,
    padding: 0,
  },
  body: {
    margin: 0,
    padding: 0,
  },
};

const offerDetailsList: ShopInfoItem[] = [
  {
    id: 1,
    title: 'Discount offer',
    description: 'buy1 get 2 free',
  },
  {
    id: 2,
    title: 'Valid till',
    description: '20 Oct 2025',
  },
  {
    id: 3,
    title: 'Valid for',
    description: 'Category',
  },
  // {
  //   id: 4,
  //   title: 'Time duration',
  //   description: '10 am to 10 pm',
  // },
];
const mockProducts: ProductCategoryItemType[] = [
  {
    name: 'Women Fashion',
    id: '1',
    onPress: () => {},
  },
  {
    name: 'Men Fashion',
    id: '2',
    onPress: () => {},
  },
  {
    name: 'Kids Fashion',
    id: '3',
    onPress: () => {},
  },
];

const VIDEO_DATA = [
  { id: '1', title: 'Video 1', thumbnail: 'https://via.placeholder.com/150' },
  { id: '2', title: 'Video 2', thumbnail: 'https://via.placeholder.com/150' },
  { id: '3', title: 'Video 3', thumbnail: 'https://via.placeholder.com/150' },
  { id: '4', title: 'Video 4', thumbnail: 'https://via.placeholder.com/150' },
  { id: '5', title: 'Video 5', thumbnail: 'https://via.placeholder.com/150' },
  { id: '6', title: 'Video 6', thumbnail: 'https://via.placeholder.com/150' },
];
const ProductOfferSectionItem: React.FC<ShopInfoItem> = ({
  title,
  id,
  description,
}) => {
  return (
    <View style={styles.offerSectionItem}>
      <Text style={styles.offerText}>{title}</Text>
      <Text style={styles.offerText}>{description}</Text>
    </View>
  );
};
const ProductOfferSection = (props: IProductInfo) => {
  return (
    <>
      {offerDetailsList?.map((item) => {
        if (item.id === 1 && props?.expiryEndDate) {
          return (
            <ProductOfferSectionItem
              key={item.title}
              {...item}
              description={getOfferDetailText(props.offerType)}
            />
          );
        } else if (item.id === 2 && props?.offerType) {
          return (
            <ProductOfferSectionItem
              key={item.title}
              {...item}
              description={getFormattedExpiryDate(props.expiryEndDate)}
            />
          );
        } else if (item.id === 3) {
          return (
            <ProductOfferSectionItem
              key={item.title}
              {...item}
              description={
                props?.offerCategories?.[props?.offerCategories?.length - 1]
                  ?.name ?? ''
              }
            />
          );
        } else {
          return <ProductOfferSectionItem key={item.title} {...item} />;
        }
      })}
    </>
  );
};

type RouteParams = {
  params: {
    product: IProductInfo;
  };
};

const ProductDetailsScreen: FC = () => {
  const dispatch = useDispatch();
  const couponCodeUrl = useSelector(getOfferCouponCode);
  const [loading, setLoading] = useState(false);
  const route = useRoute<RouteProp<RouteParams, 'params'>>();
  const dimensions = useWindowDimensions();
  const productData = route?.params?.product as IProductInfo;
  const firstStoreOffer = productData?.storeOffers?.[0];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  const onCouponCodeClick = () => {
    if (productData?.id) {
      setLoading(true);
      dispatch(fetchOfferCouponCodeAction(productData?.id ?? ''));
    }
  };

  useEffect(() => {
    if (couponCodeUrl?.url || couponCodeUrl.error) {
      setLoading(false);
    }
  }, [couponCodeUrl]);

  const productMap = useMemo(() => {
    const latLng = productData?.storeOffers?.[0]?.geoLocation;
    let splittedLatLng: string[] | number[] = [];
    if (latLng) {
      splittedLatLng = latLng.split(',');
    }
    return (
      <ProductMap
        lat={Number(splittedLatLng[0])}
        lng={Number(splittedLatLng[1])}
      />
    );
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <TopAppBar title="Product Details" />
        </View>
        <View>
          <CustomCarousel isFullWidth />
        </View>
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.title}>{firstStoreOffer?.name}</Text>
            <View style={styles.categoryWrapper}>
              <Text style={styles.categoryName}>
                {getCategorySubCatName(productData?.offerCategories)}
              </Text>
              <Text style={styles.offerDeatail}>
                {getOfferDetailText(productData?.offerType)}
              </Text>
            </View>
          </View>
          <View>
            <CustomCarousel carouselMargin={32} autoPlay={false} />
          </View>
          <View style={styles.descriptionView}>
            <View style={styles.descriptionDetail}>
              {productData?.additionalDescription && (
                <View>
                  <Text
                    style={[
                      styles.title,
                      {
                        color: Color.colorDarkGray,
                        fontSize: FontSize.size_xs,
                        fontWeight: 'bold',
                      },
                    ]}
                  >
                    {'Description:'}
                  </Text>
                  <Text style={styles.descriptionText}>
                    <RenderHTML
                      contentWidth={dimensions.width - 16}
                      source={{
                        html: productData.additionalDescription,
                      }}
                      baseStyle={{
                        color: Color.colorDarkGray,
                      }}
                      tagsStyles={customStyles}
                    />
                  </Text>
                </View>
              )}
            </View>
            <View style={styles.couponCodeWrapper}>
              <View>
                <CTAButton
                  title="Download coupon code"
                  viewStyle={styles.ctaButton}
                  titleStyle={styles.titleStyle}
                  onPress={onCouponCodeClick}
                  loading={loading}
                />
                <View style={styles.couponCode}>
                  {couponCodeUrl?.url && (
                    <Image
                      source={{
                        uri: couponCodeUrl?.url,
                      }}
                      style={{
                        width: 130,
                        height: 70,
                        resizeMode: 'contain',
                        backgroundColor: Color.colorLightslategray,
                      }}
                    />
                  )}
                </View>
              </View>
            </View>
          </View>
          <View>
            <ProductOfferSection {...productData} />
          </View>
          <View>
            <Text style={styles.address}>{'Address:'}</Text>
            <Text style={styles.addressField}>
              {productData?.storeOffers?.[0]?.address}
            </Text>
          </View>
          <View style={styles.mapWrapper}>{productMap}</View>
          <View>
            <Text style={styles.productsTitle}>Products</Text>
            <View style={styles.productWrapper}>
              <FlatList
                data={mockProducts}
                horizontal
                ItemSeparatorComponent={() => (
                  <View style={{ paddingRight: 16 }} />
                )}
                renderItem={({ item, index }) => {
                  return (
                    <ProductCategorySectionItem
                      key={`${item.id}${index}`}
                      {...item}
                    />
                  );
                }}
              />
            </View>
          </View>
          <View style={styles.youtubeLinks}>
            <Text style={{ color: 'black' }}>Youtube links</Text>
          </View>
          <View style={styles.container}>
            <FlatList
              data={VIDEO_DATA}
              renderItem={renderItem}
              horizontal
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default memo(ProductDetailsScreen);
