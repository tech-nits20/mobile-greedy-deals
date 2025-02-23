import axios from 'axios';
import { useEffect, useState } from 'react';

export const useCurrentLocation = () => {
  const [city, setCity] = useState(undefined);
  const [error, setError] = useState<undefined | string>(undefined);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            // fetchCity(latitude, longitude);
            fetchGooglePlaces(latitude, longitude);
            console.log(`==LAT: ${latitude} == ${longitude}`);
          },
          (error) => {
            setError('Unable to retrieve location');
          }
        );
      } else {
        setError('Geolocation is not supported by this browser');
      }
    };

    getLocation();
  }, []);

  const fetchGooglePlaces = (lat: number, lng: number) => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDsx0SruE9r5UMttIHfi5HgOYD0LvpPgl0`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'OK') {
          const addressComponents = data.results[0].address_components;
          // console.log('Full Response:', addressComponents);

          // Extracting locality, sublocalities, and administrative levels
          const locality = addressComponents.find(
            (c: { types: string | string[] }) => c.types.includes('locality')
          )?.long_name;

          const sublocalityLevel1 = addressComponents.find(
            (c: { types: string | string[] }) =>
              c.types.includes('sublocality_level_1')
          )?.long_name;

          const sublocalityLevel2 = addressComponents.find(
            (c: { types: string | string[] }) =>
              c.types.includes('sublocality_level_2')
          )?.long_name;
          setCity(sublocalityLevel1 || sublocalityLevel2 || locality);
          console.log('City:', locality);
          console.log('District/Area:', sublocalityLevel1);
          console.log('Smaller Sector:', sublocalityLevel2);
        } else {
          console.error('Geocoding error:', data.status);
        }
      })
      .catch((error) => console.error('Error fetching address:', error));
  };
  const fetchCity = async (latitude: number, longitude: number) => {
    try {
      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      );
      const data = await response.json();
      // console.log(`==LOCtion: ${JSON.stringify(data)}`);

      setCity(data.city || data.locality || undefined);

      // const resp = await axios.get('https://developers.zomato.com/api/v2.1/search?lat='+latitude+'&lon='+longitude,{
      //     headers: {"user-key": "Access Key"}
      //   });
      // console.log(resp.data);
    } catch (err) {
      setError('Error fetching city name');
    }
  };

  return { city, error };
};
