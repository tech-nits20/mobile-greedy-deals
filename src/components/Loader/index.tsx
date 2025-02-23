import React, { memo } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Color } from '../../../GlobalStyles';

const Loader: React.FC<{ size?: 'large' | 'small'; color?: string }> = ({
  size,
  color,
}) => {
  return (
    <ActivityIndicator
      size={size ? size : 'large'}
      color={color ? color : Color.colorOrangered_100}
    />
  );
};

export default memo(Loader);
