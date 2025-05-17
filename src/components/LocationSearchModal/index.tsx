import React, { memo, useEffect, useState } from 'react';
import {
  View,
  Modal,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {
  fetchLocationDetails,
  fetchLocationSuggestion,
} from '../../api/services';
import { Border, Color, Gap, Padding } from '../../../GlobalStyles';
import { screenWidth } from '../../helper/Utils';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCurrentLocationAction,
  getCurrentLocation,
} from '../../redux/sagas/categories/categoryRedux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  CURRENT_LOCATION_KEY,
  CUSTOM_LOCATION_KEY,
} from '../../helper/Constants';
import { ICurrentLocationType } from '../../redux/sagas/categories/categoriesTypes';

const LocationSearchModal: React.FC<{
  isShow: boolean;
  onClose: () => void;
}> = ({ isShow, onClose }) => {
  const dispatch = useDispatch();
  const location = useSelector(getCurrentLocation);
  const [query, setQuery] = useState('');
  const [places, setPlaces] = useState([]);
  const [currentLocationData, setCurrentLocationData] =
    useState<ICurrentLocationType>();

  useEffect(() => {
    async function fetchPlaces() {
      const response = await fetchLocationSuggestion(query);
      setPlaces(response);
    }
    setTimeout(() => {
      if (query.length > 2) {
        fetchPlaces();
      } else {
        setPlaces([]);
      }
    }, 300);
  }, [query]);

  useEffect(() => {
    if (location.locationName) {
      AsyncStorage.getItem(CUSTOM_LOCATION_KEY).then(async (value) => {
        if (!value) {
          await AsyncStorage.setItem(
            CURRENT_LOCATION_KEY,
            JSON.stringify(location)
          );
          setCurrentLocationData(location);
        }
      });
    }
  }, [location]);

  function refetchCurrentLOcationAndClose() {
    dispatch(fetchCurrentLocationAction());
    setPlaces([]);
    setQuery('');
    onClose();
  }

  const onSelectLocation = async (item: any) => {
    const placeId = item?.place_id;
    const placeDetails = await fetchLocationDetails(placeId);
    const locationData: ICurrentLocationType = {
      locationName: item?.description,
      lat: placeDetails?.geometry?.location?.lat,
      lng: placeDetails?.geometry?.location?.lng,
    };
    AsyncStorage.setItem(CUSTOM_LOCATION_KEY, JSON.stringify(locationData));
    refetchCurrentLOcationAndClose();
  };

  const onCurrentLocationPressed = async () => {
    await AsyncStorage.removeItem(CUSTOM_LOCATION_KEY);
    refetchCurrentLOcationAndClose();
  };

  return (
    <Modal visible={isShow} transparent>
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Pressable
            onPress={() => onClose()}
            style={{ alignSelf: 'flex-end' }}
          >
            <Icon name="close" size={25} color={Color.colorDarkGray} />
          </Pressable>
          <Pressable
            style={styles.currentLocationContainer}
            onPress={onCurrentLocationPressed}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: Gap.gap_lg,
              }}
            >
              <Image
                style={styles.locationCrosshairsIcon1}
                resizeMode="cover"
                source={require('../../../assets/8665611-location-crosshairs-icon-1.png')}
              />
              <View>
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: '500',
                    color: Color.colorWhite,
                    textAlign: 'left',
                  }}
                >
                  {'Use Current Location'}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: Color.colorWhite,
                    textAlign: 'left',
                    fontWeight: 'bold',
                  }}
                >
                  {currentLocationData?.locationName}
                </Text>
              </View>
            </View>
          </Pressable>
          <Text
            style={{
              color: Color.colorDarkGray,
              alignSelf: 'center',
              paddingTop: Padding.p_3xs,
              fontSize: 16,
            }}
          >
            {'or'}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Search locations..."
            placeholderTextColor={Color.colorDarkGray}
            value={query}
            onChangeText={(text) => setQuery(text)}
          />

          <FlatList
            data={places}
            keyExtractor={(item) => item.place_id}
            keyboardShouldPersistTaps="always"
            renderItem={({ item }) => (
              <Pressable
                style={styles.item}
                onPress={() => onSelectLocation(item)}
              >
                <Text style={{ color: Color.colorDarkGray }}>
                  {item.description}
                </Text>
              </Pressable>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    padding: 10,
    backgroundColor: Color.colorWhite,
    minHeight: 500,
    width: screenWidth - 60,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: Border.br_3xs,
    shadowColor: Color.colorBlack,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: Color.colorDarkGray,
    marginHorizontal: Padding.p_base,
    marginTop: Padding.p_base,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: Color.colorWhiteSmoke,
    color: Color.colorLightGray,
    marginHorizontal: Padding.p_base,
  },
  currentLocationContainer: {
    backgroundColor: Color.colorOrangered_100,
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    marginHorizontal: 16,
    borderRadius: 8,
    marginTop: 10,
  },
  locationCrosshairsIcon1: {
    width: 16,
    height: 16,
    overflow: 'hidden',
  },
});

export default memo(LocationSearchModal);
