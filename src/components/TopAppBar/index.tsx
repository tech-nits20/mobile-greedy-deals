import * as React from 'react';
import {
  Image,
  PermissionsAndroid,
  Platform,
  Pressable,
  Text,
  View,
} from 'react-native';
import { styles } from './styles';
import {
  ParamListBase,
  useIsFocused,
  useNavigation,
  useNavigationState,
} from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import { Color } from '../../../GlobalStyles';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCurrentLocationAction,
  getCurrentLocation,
} from '../../redux/sagas/categories/categoryRedux';
import { useEffect } from 'react';
import { HOME_SCREEN } from '../../routes/Routes';

export interface TopAppBarProps {
  title?: string;
  isShowSearch?: boolean;
}
const TopAppBar: React.FC<TopAppBarProps> = ({
  title,
  isShowSearch = true,
}) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const dispatch = useDispatch();
  const currentLocation = useSelector(getCurrentLocation);
  const focusedTab = useNavigationState((state) => state.routes[state.index]);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true;
  };

  console.log(`==CURRENT: ${JSON.stringify(currentLocation)}`);

  useEffect(() => {
    async function getLocation() {
      const isPermission = await requestLocationPermission();
      if (isPermission) {
        dispatch(fetchCurrentLocationAction());
      }
    }
    getLocation();
  }, []);

  return (
    <View style={[styles.locationUserBar, styles.locationFlexBox]}>
      <View style={[styles.locationParent, styles.locationParentFlexBox]}>
        {navigation?.canGoBack() || focusedTab.name !== HOME_SCREEN ? (
          <Pressable
            style={styles.backArrowIcon1Wrapper}
            onPress={() => navigation?.goBack()}
          >
            <Image
              style={[styles.backArrowIcon1, styles.backArrowIcon1Layout]}
              resizeMode="cover"
              source={require('../../../assets/211686-back-arrow-icon-1.png')}
            />
          </Pressable>
        ) : (
          <Image
            style={styles.locationCrosshairsIcon1}
            resizeMode="cover"
            source={require('../../../assets/8665611-location-crosshairs-icon-1.png')}
          />
        )}

        <Text style={styles.eastDelhiDelhi}>
          {title ?? currentLocation.locationName ?? 'Locations'}
        </Text>
      </View>
      {isShowSearch && (
        <View
          style={[styles.locationUserBarParent, styles.searchParentFlexBox]}
        >
          <TextInput
            style={[styles.locationUserBar1, styles.searchParentFlexBox]}
            placeholder="Search for 'Offers'"
            placeholderTextColor={Color.colorDimgray_100}
          />
        </View>
      )}
      <View style={[styles.locationUserBarItem, styles.childLayout]} />
    </View>
  );
};

export default TopAppBar;
