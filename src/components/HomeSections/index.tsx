import * as React from "react";
import {
  Image,
  View,
  Text,
  Pressable,
  ImageBackground,
  ImageSourcePropType,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { styles } from "./styles";
import { LISTING_SCREEN } from "../../routes/Routes";
import CustomCarousel from "../CustomCarousel";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Padding } from "../../../GlobalStyles";

const mockSectionData = [
  {
    title: "clothes",
    src: require("../../../assets/mobile-icons.png"),
  },
  {
    title: "Restaurants",
    src: require("../../../assets/mobile-icons1.png"),
  },
  {
    title: "Hospital",
    src: require("../../../assets/mobile-icons2.png"),
  },
  {
    title: "Hotel",
    src: require("../../../assets/mobile-icons3.png"),
  },
  {
    title: "Real State",
    src: require("../../../assets/mobile-icons4.png"),
  },
  {
    title: "Entertainment",
    src: require("../../../assets/mobile-icons5.png"),
  },
  {
    title: "Automobiles",
    src: require("../../../assets/mobile-icons6.png"),
  },
  {
    title: "Gold",
    src: require("../../../assets/mobile-icons7.png"),
  },
  {
    title: "Food",
    src: require("../../../assets/mobile-icons8.png"),
  },
  {
    title: "Diagnostics",
    src: require("../../../assets/mobile-icons9.png"),
  },
];
export interface HomeSectionItemProps {
  onPress?: () => void;
  iconSrc: ImageSourcePropType;
  title: string;
}
const HomeSectionItem: React.FC<HomeSectionItemProps> = ({
  onPress,
  title,
  iconSrc,
}) => {
  return (
    <Pressable style={styles.frameGroup} onPress={onPress}>
      <View style={styles.frameContainer}>
        <View style={styles.mobileIconsWrapper}>
          <Image
            style={styles.mobileIcons}
            resizeMode="cover"
            source={iconSrc}
          />
        </View>
      </View>
      <View style={styles.nameFlexBox}>
        <Text style={styles.name}>{title}</Text>
      </View>
    </Pressable>
  );
};

const HomeSections = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ImageBackground
      style={styles.subtractIcon}
      resizeMode="cover"
      source={require("../../../assets/subtract.png")}
    >
      <View style={styles.subtractParent}>
        <View style={styles.frameParent}>
          <CustomCarousel />
        </View>
        <View style={styles.frameWrapper}>
          <FlatList
            data={mockSectionData}
            horizontal
            ItemSeparatorComponent={() => (
              <View style={{ paddingEnd: Padding.p_base }} />
            )}
            renderItem={({ item, index }) => {
              return (
                <HomeSectionItem
                  key={index}
                  title={item.title}
                  iconSrc={item.src}
                  onPress={() => navigation.navigate(LISTING_SCREEN)}
                />
              );
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeSections;
