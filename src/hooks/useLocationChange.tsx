import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getCurrentLocation,
  getPreviousCurrentLocation,
} from '../redux/sagas/categories/categoryRedux';

export const useLocationChange = () => {
  const location = useSelector(getCurrentLocation);
  const prevLocation = useSelector(getPreviousCurrentLocation);
  const [isLocationChange, setIsLocationChange] = useState(false);

  useEffect(() => {
    if (prevLocation.lat === 0 || prevLocation.lng === 0) {
      setIsLocationChange(true);
    } else if (
      location.lat !== prevLocation.lat ||
      location.lng !== prevLocation.lng
    ) {
      setIsLocationChange(true);
    }
  }, [location]);

  return { isLocationChange };
};
