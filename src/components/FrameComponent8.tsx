import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
  ScrollView,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Color,
  Padding,
  Border,
  Gap,
  FontSize,
  FontFamily,
} from "../../GlobalStyles";
import { CATEGORIES_SCREEN } from "../routes/Routes";

const FrameComponent8 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <ImageBackground
      style={styles.subtractIcon}
      resizeMode="cover"
      source={require("../../assets/subtract.png")}
    >
      <View style={styles.subtractParent}>
        <View style={styles.frameParent}>
          <View style={[styles.component2Wrapper, styles.wrapperFlexBox]}>
            <View style={[styles.component2, styles.component2Layout]}>
              <View style={[styles.image122Wrapper, styles.wrapperFlexBox]}>
                <Image
                  style={styles.image122Icon}
                  resizeMode="cover"
                  source={require("../../assets/image-122.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.ellipseParent}>
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../../assets/ellipse-1.png")}
            />
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../../assets/ellipse-3.png")}
            />
            <Image
              style={styles.frameChild}
              resizeMode="cover"
              source={require("../../assets/ellipse-3.png")}
            />
          </View>
        </View>

        <View style={styles.frameWrapper}>
          <ScrollView horizontal>
            <View style={[styles.instanceParent, styles.component2Layout]}>
              <Pressable
                style={styles.frameGroup}
                onPress={() => navigation.navigate(CATEGORIES_SCREEN)}
              >
                <View style={styles.frameContainer}>
                  <View style={styles.mobileIconsWrapper}>
                    <Image
                      style={styles.mobileIcons}
                      resizeMode="cover"
                      source={require("../../assets/mobile-icons.png")}
                    />
                  </View>
                </View>
                <View style={styles.nameFlexBox}>
                  <Text style={styles.name}>clothes</Text>
                </View>
              </Pressable>
              <View style={styles.frameGroup}>
                <View style={styles.frameContainer}>
                  <View style={styles.mobileIconsWrapper}>
                    <Image
                      style={styles.mobileIcons}
                      resizeMode="cover"
                      source={require("../../assets/mobile-icons1.png")}
                    />
                  </View>
                </View>
                <View style={styles.nameFlexBox}>
                  <Text style={styles.name}>Restaurants</Text>
                </View>
              </View>
              <View style={styles.frameGroup}>
                <View style={styles.frameContainer}>
                  <View style={styles.mobileIconsWrapper}>
                    <Image
                      style={styles.mobileIcons}
                      resizeMode="cover"
                      source={require("../../assets/mobile-icons2.png")}
                    />
                  </View>
                </View>
                <View style={styles.nameFlexBox}>
                  <Text style={styles.name}>Hospital</Text>
                </View>
              </View>
              <View style={styles.frameGroup}>
                <View style={styles.frameContainer}>
                  <View style={styles.mobileIconsWrapper}>
                    <Image
                      style={styles.mobileIcons}
                      resizeMode="cover"
                      source={require("../../assets/mobile-icons3.png")}
                    />
                  </View>
                </View>
                <View style={styles.nameFlexBox}>
                  <Text style={styles.name}>Hotel</Text>
                </View>
              </View>
              <View style={styles.frameGroup}>
                <View style={styles.frameContainer}>
                  <View style={styles.mobileIconsWrapper}>
                    <Image
                      style={styles.mobileIcons}
                      resizeMode="cover"
                      source={require("../../assets/mobile-icons4.png")}
                    />
                  </View>
                </View>
                <View style={styles.nameFlexBox}>
                  <Text style={styles.name}>Real State</Text>
                </View>
              </View>
              <View style={styles.frameGroup}>
                <View style={styles.frameContainer}>
                  <View style={styles.mobileIconsWrapper}>
                    <Image
                      style={styles.mobileIcons}
                      resizeMode="cover"
                      source={require("../../assets/mobile-icons5.png")}
                    />
                  </View>
                </View>
                <View style={styles.nameFlexBox}>
                  <Text style={styles.name}>Entertainment</Text>
                </View>
              </View>
              <View style={styles.frameGroup}>
                <View style={styles.frameContainer}>
                  <View style={styles.mobileIconsWrapper}>
                    <Image
                      style={styles.mobileIcons}
                      resizeMode="cover"
                      source={require("../../assets/mobile-icons6.png")}
                    />
                  </View>
                </View>
                <View style={styles.nameFlexBox}>
                  <Text style={styles.name}>Automobiles</Text>
                </View>
              </View>
              <View style={styles.frameGroup}>
                <View style={styles.frameContainer}>
                  <View style={styles.mobileIconsWrapper}>
                    <Image
                      style={styles.mobileIcons}
                      resizeMode="cover"
                      source={require("../../assets/mobile-icons7.png")}
                    />
                  </View>
                </View>
                <View style={styles.nameFlexBox}>
                  <Text style={styles.name}>Gold</Text>
                </View>
              </View>
              <View style={styles.frameGroup}>
                <View style={styles.frameContainer}>
                  <View style={styles.mobileIconsWrapper}>
                    <Image
                      style={styles.mobileIcons}
                      resizeMode="cover"
                      source={require("../../assets/mobile-icons8.png")}
                    />
                  </View>
                </View>
                <View style={styles.nameFlexBox}>
                  <Text style={styles.name}>Food</Text>
                </View>
              </View>
              <View style={styles.frameGroup}>
                <View style={styles.frameContainer}>
                  <View style={styles.mobileIconsWrapper}>
                    <Image
                      style={styles.mobileIcons}
                      resizeMode="cover"
                      source={require("../../assets/mobile-icons9.png")}
                    />
                  </View>
                </View>
                <View style={styles.nameFlexBox}>
                  <Text style={styles.name}>Diagnostics</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  wrapperFlexBox: {
    height: 120,
    backgroundColor: Color.colorWhite,
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  component2Layout: {
    width: 410,
    alignItems: "center",
  },
  nameFlexBox: {
    paddingHorizontal: Padding.p_7xs,
    backgroundColor: Color.colorGray_300,
    borderRadius: Border.br_base,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    paddingVertical: 0,
  },
  subtractIcon: {
    height: 311,
    width: 430,
  },
  image122Icon: {
    flex: 1,
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
  },
  image122Wrapper: {
    flexDirection: "row",
  },
  frameChild: {
    width: 8,
    height: 8,
  },
  ellipseParent: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorOrangered_100,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_11xs,
    gap: Gap.gap_xs,
    marginTop: -4,
    flexDirection: "row",
    alignItems: "center",
  },
  component2: {
    justifyContent: "center",
  },
  component2Wrapper: {
    flexDirection: "row",
    borderRadius: Border.br_5xs,
  },
  frameParent: {
    paddingTop: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  mobileIcons: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  mobileIconsWrapper: {
    padding: Padding.p_7xs,
    flexDirection: "row",
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  frameContainer: {
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  name: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorWhite,
    textAlign: "left",
  },
  nameContainer: {
    height: 15,
    display: "none",
  },
  frameGroup: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  instanceParent: {
    paddingBottom: Padding.p_3xs,
    gap: Gap.gap_2xl,
    flexDirection: "row",
  },
  frameWrapper: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    paddingTop: Padding.p_5xs,
  },
  subtractParent: {
    height: 221,
    paddingHorizontal: Padding.p_3xs,
    gap: Gap.gap_lg,
    paddingVertical: 0,
    overflow: "hidden",
    width: 430,
  },
});

export default FrameComponent8;
