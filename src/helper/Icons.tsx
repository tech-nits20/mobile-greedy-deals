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

export const getIcons = (icon: string) => {
  switch (icon) {
    case 'Fashion':
      return require('../../assets/categoryImages/fashion-1.png');
    case 'Electronics':
      return require('../../assets/categoryImages/electronics-1.png');
    case 'Food':
      return require('../../assets/categoryImages/food-1.png');
    case 'Hotel':
      return require('../../assets/categoryImages/hotel-1.png');
    case 'Beauty & Spa':
      return require('../../assets/categoryImages/beauty-1.png');
    case 'Jewellery':
      return require('../../assets/categoryImages/Jwellery-1.png');
    case 'Medical':
      return require('../../assets/categoryImages/medical-1.png');
    case 'Real Estate':
      return require('../../assets/categoryImages/realestate-1.png');
    case 'Automobile':
      return require('../../assets/categoryImages/automobile-1.png');
    case 'Services':
      return require('../../assets/categoryImages/service-1.png');
    case 'Entertainment':
      return require('../../assets/categoryImages/entertainment-1.png');
    case 'Furniture':
      return require('../../assets/categoryImages/furniture-1.png');
    default:
      return '/';
  }
};
