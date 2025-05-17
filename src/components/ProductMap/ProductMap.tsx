import React, { memo, useEffect, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Linking, StyleSheet, View } from 'react-native';

const ProductMap: React.FC<{ lat: number; lng: number }> = ({ lat, lng }) => {
  const center = {
    latitude: lat,
    longitude: lng,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const mapRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      mapRef.current?.animateCamera({
        center: { latitude: lat, longitude: lng },
        zoom: 17,
        duration: 2000,
      });
    }, 1000);
  }, []);

  const handleMarkerPress = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${center.latitude},${center.longitude}`;

    Linking.openURL(url).catch((err) => {
      console.error('Error opening Google Maps:', err);
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={center}
        loadingEnabled
        scrollEnabled={false}
      >
        <Marker
          coordinate={{
            latitude: center.latitude,
            longitude: center.longitude,
          }}
          onPress={handleMarkerPress}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default memo(ProductMap);
