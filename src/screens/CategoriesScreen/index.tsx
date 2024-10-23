import * as React from "react";
import { Image, View, Text, Pressable, ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import FrameComponent4 from "../../components/FrameComponent4";
import TopAppBar from "../../components/TopAppBar";
import { styles } from "./styles";
import { LISTING_SCREEN } from "../../routes/Routes";

const CategoriesScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.categories, styles.categoriesLayout]}>
      <Image
        style={styles.subtractIcon}
        resizeMode="cover"
        source={require("../../../assets/subtract2.png")}
      />
      <View style={styles.frameParent}>
        <TopAppBar />
        <ScrollView>
          <View style={styles.midRow}>
            <View style={styles.frameGroup}>
              <View style={styles.component2Wrapper}>
                <View style={styles.component2}>
                  <View style={styles.component2Wrapper}>
                    <Image
                      style={[styles.image122Icon, styles.categoriesLayout]}
                      resizeMode="cover"
                      source={require("../../../assets/image-1222.png")}
                    />
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
            <View style={styles.categoriesPageParent}>
              <Text style={styles.categoriesPage}>Categories Page</Text>
              <Text
                style={[styles.loremIpsumIsSimply, styles.womenFashionTypo]}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy.
              </Text>
            </View>
            <View style={styles.frameContainer}>
              <View style={styles.frameView}>
                <View style={styles.fashionParent}>
                  <Pressable
                    onPress={() => navigation.navigate(LISTING_SCREEN)}
                  >
                    <Text style={styles.fashion1Typo}>Fashion</Text>
                  </Pressable>
                  <View style={styles.lineView} />
                </View>
                <View style={styles.frameParent1}>
                  <Pressable
                    style={styles.framePressable}
                    onPress={() => navigation.navigate(LISTING_SCREEN)}
                  >
                    <View style={styles.frameWrapper}>
                      <View style={styles.bodyShotOfADarkSkinnedFaWrapper}>
                        <Image
                          style={styles.bodyShotOfADarkSkinnedFaIcon}
                          resizeMode="cover"
                          source={require("../../../assets/bodyshotofadarkskinnedfashionpng-11.png")}
                        />
                      </View>
                    </View>
                    <View style={styles.womenFashionWrapper}>
                      <Text
                        style={[styles.womenFashion, styles.womenFashionTypo]}
                      >{`Women
Fashion`}</Text>
                    </View>
                  </Pressable>
                  <FrameComponent4
                    menFashion={`Men
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Kids
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Summer
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Summer
Fashion`}
                  />
                </View>
              </View>
              <View style={styles.frameView}>
                <View style={styles.fashionParent}>
                  <Text style={styles.fashion1Typo}>{`Hotels &  Dining`}</Text>
                  <View style={styles.lineView} />
                </View>
                <View style={styles.frameParent1}>
                  <FrameComponent4
                    menFashion={`Women
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Men
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Kids
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Summer
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Summer
Fashion`}
                  />
                </View>
              </View>
              <View style={styles.frameView}>
                <View style={styles.fashionParent}>
                  <Text
                    style={styles.fashion1Typo}
                  >{`Hospital & Diagnosis`}</Text>
                  <View style={styles.lineView} />
                </View>
                <View style={styles.frameParent1}>
                  <FrameComponent4
                    menFashion={`Women
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Men
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Kids
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Summer
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Summer
Fashion`}
                  />
                </View>
              </View>
              <View style={styles.frameView}>
                <View style={styles.fashionParent}>
                  <Text style={styles.fashion1Typo}>Electronics</Text>
                  <View style={styles.lineView} />
                </View>
                <View style={styles.frameParent1}>
                  <FrameComponent4
                    menFashion={`Women
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Men
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Kids
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Summer
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Summer
Fashion`}
                  />
                </View>
              </View>
              <View style={styles.frameView}>
                <View style={styles.fashionParent}>
                  <Text style={styles.fashion1Typo}>{`Beauty & Spa`}</Text>
                  <View style={styles.lineView} />
                </View>
                <View style={styles.frameParent1}>
                  <FrameComponent4
                    menFashion={`Women
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Men
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Kids
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Summer
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Summer
Fashion`}
                  />
                </View>
              </View>
              <View style={styles.frameView}>
                <View style={styles.fashionParent}>
                  <Text style={styles.fashion1Typo}>Golds</Text>
                  <View style={styles.lineView} />
                </View>
                <View style={styles.frameParent1}>
                  <FrameComponent4
                    menFashion={`Women
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Men
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Kids
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Summer
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Summer
Fashion`}
                  />
                </View>
              </View>
              <View style={styles.frameView}>
                <View style={styles.fashionParent}>
                  <Text style={styles.fashion1Typo}>Real State</Text>
                  <View style={styles.lineView} />
                </View>
                <View style={styles.frameParent1}>
                  <FrameComponent4
                    menFashion={`Women
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Men
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Kids
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Summer
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Summer
Fashion`}
                  />
                </View>
              </View>
              <View style={styles.frameView}>
                <View style={styles.fashionParent}>
                  <Text style={styles.fashion1Typo}>Automobile</Text>
                  <View style={styles.lineView} />
                </View>
                <View style={styles.frameParent1}>
                  <FrameComponent4
                    menFashion={`Women
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Men
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Kids
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Summer
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Summer
Fashion`}
                  />
                </View>
              </View>
              <View style={styles.frameView}>
                <View style={styles.fashionParent}>
                  <Text style={styles.fashion1Typo}>Entertainment</Text>
                  <View style={styles.lineView} />
                </View>
                <View style={styles.frameParent1}>
                  <FrameComponent4
                    menFashion={`Women
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Men
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Kids
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Summer
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Summer
Fashion`}
                  />
                </View>
              </View>
              <View style={styles.frameView}>
                <View style={styles.fashionParent}>
                  <Text style={styles.fashion1Typo}>{`Tour & Travels`}</Text>
                  <View style={styles.lineView} />
                </View>
                <View style={styles.frameParent1}>
                  <FrameComponent4
                    menFashion={`Women
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Men
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Kids
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Summer
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Summer
Fashion`}
                  />
                </View>
              </View>
              <View style={styles.frameView}>
                <View style={styles.fashionParent}>
                  <Text
                    style={styles.fashion1Typo}
                  >{`Education & Training`}</Text>
                  <View style={styles.lineView} />
                </View>
                <View style={styles.frameParent1}>
                  <FrameComponent4
                    menFashion={`Women
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Men
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Kids
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Summer
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Summer
Fashion`}
                  />
                </View>
              </View>
              <View style={styles.frameView}>
                <View style={styles.fashionParent}>
                  <Text style={styles.fashion1Typo}>Others</Text>
                  <View style={styles.lineView} />
                </View>
                <View style={styles.frameParent1}>
                  <FrameComponent4
                    menFashion={`Women
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Men
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Kids
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Summer
Fashion`}
                  />
                  <FrameComponent4
                    menFashion={`Summer
Fashion`}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.categoriesChild} />
    </View>
  );
};

export default CategoriesScreen;
