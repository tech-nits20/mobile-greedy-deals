import { Dimensions } from "react-native";

export const getStyleValue = (key: string, value: string | number | undefined) => {
    if (value === undefined) return;
    return { [key]: value === "unset" ? undefined : value };
  };

  export const screenWidth = Dimensions.get('window').width;
  export const screenHeight = Dimensions.get('window').height;