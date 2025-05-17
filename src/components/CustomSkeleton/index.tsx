import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const CustomSkeleton = ({ width, height, style }) => {
  const opacity = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View
      style={[
        {
          width,
          height,
          backgroundColor: '#e0e0e0',
          borderRadius: 4,
          opacity,
        },
        style,
      ]}
    />
  );
};

export default CustomSkeleton;
