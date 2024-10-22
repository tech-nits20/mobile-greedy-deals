import * as React from "react";
import {
  Image,
  View,
  Text,
  Pressable,
  ImageBackground,
  ScrollView,
  ImageSourcePropType,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { styles } from "./styles";
import { CATEGORIES_SCREEN } from "../../routes/Routes";

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
          <View style={[styles.component2Wrapper, styles.wrapperFlexBox]}>
            <View style={[styles.component2, styles.component2Layout]}>
              <View style={[styles.image122Wrapper, styles.wrapperFlexBox]}>
                <Image
                  style={styles.image122Icon}
                  resizeMode="cover"
                  source={require("../../../assets/image-122.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.ellipseParent}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../../../assets/ellipse-1.png")}
            />
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../../../assets/ellipse-3.png")}
            />
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../../../assets/ellipse-3.png")}
            />
          </View>
        </View>
        <View style={styles.frameWrapper}>
          <ScrollView horizontal>
            <View style={styles.instanceParent}>
              {mockSectionData.map((item, index) => (
                <HomeSectionItem
                  title={item.title}
                  iconSrc={item.src}
                  onPress={() => navigation.navigate(CATEGORIES_SCREEN)}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeSections;
