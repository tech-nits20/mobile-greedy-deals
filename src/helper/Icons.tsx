import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Color } from '../../GlobalStyles';

const splitPascalCase = (str: string) => {
  return str?.replace(/([a-z])([A-Z])/g, '$1 $2').split(' ');
};

const iconExists = (iconName: string) => {
  //@ts-ignore
  const iconList = Object.keys(Icon.getRawGlyphMap());
  return iconList.includes(iconName);
};

export const CustomIcon = ({
  name,
  color,
  size,
}: {
  name: string;
  color?: string;
  size?: number;
}) => {
  const MyIcon = Icon as any;
  const splitted = splitPascalCase(name);

  let formattedName = 'tshirt';
  if (splitted) {
    formattedName = splitted.splice(1, 1).join('-');
  }

  return (
    <MyIcon
      name={
        iconExists(formattedName.toLowerCase())
          ? formattedName.toLowerCase()
          : 'tshirt'
      }
      size={size ? size : 16}
      color={color ? color : Color.colorWhite}
    />
  );
};
