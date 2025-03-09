import React, { memo } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const containerStyle = {
  width: '100%',
  height: 300,
};

const ProductMap: React.FC<{ lat: number; lng: number }> = ({ lat, lng }) => {
  const center = {
    latitude: lat,
    longitude: lng,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const onClickMarker = () => {
    // window.open(`${GOOGLE_MARKER_URL}?q=${center.lat},${center.lng}`, '_blank');
  };

  return (
    <View
      style={{
        width: '100%',
        height: 300,
        backgroundColor: 'ButtonHighlight',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
      }}
    >
      <MapView style={{ width: '100%', height: 300 }} initialRegion={center}>
        <Marker
          coordinate={{ latitude: lat, longitude: lng }}
          title="My Location"
        />
      </MapView>
    </View>
  );
};

export default memo(ProductMap);
