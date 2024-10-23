import * as React from "react";
import { Image, View, Text, ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import FrameComponent5 from "../../components/FrameComponent5";
import FrameComponent6 from "../../components/FrameComponent6";
import FrameComponent7 from "../../components/FrameComponent7";
import { styles } from "./styles";
import TopAppBar from "../../components/TopAppBar";
const ListingScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.listingPage}>
      <Image
        style={styles.subtractIcon}
        resizeMode="cover"
        source={require("../../../assets/subtract1.png")}
      />
      <TopAppBar />
      <View style={[styles.midRow, styles.midRowSpaceBlock]}>
        <View style={styles.midRowInner}>
          <View style={[styles.frameParent, styles.frameParentFlexBox]}>
            <View style={styles.frameGroup}>
              <View style={styles.frameContainer}>
                <View style={[styles.frameWrapper, styles.frameWrapperBg]}>
                  <View
                    style={[
                      styles.bodyShotOfADarkSkinnedFaWrapper,
                      styles.wrapperLayout,
                    ]}
                  >
                    <Image
                      style={styles.bodyShotOfADarkSkinnedFaIcon}
                      resizeMode="cover"
                      source={require("../../../assets/bodyshotofadarkskinnedfashionpng-1.png")}
                    />
                  </View>
                </View>
                <View style={[styles.allWrapper, styles.frameViewPosition]}>
                  <Text style={styles.all}>All</Text>
                </View>
              </View>
              <View style={[styles.frameView, styles.frameViewPosition]}>
                <View style={[styles.frameWrapper, styles.frameWrapperBg]}>
                  <View
                    style={[
                      styles.bodyShotOfADarkSkinnedFaWrapper,
                      styles.wrapperLayout,
                    ]}
                  >
                    <Image
                      style={styles.bodyShotOfADarkSkinnedFaIcon}
                      resizeMode="cover"
                      source={require("../../../assets/bodyshotofadarkskinnedfashionpng-1.png")}
                    />
                  </View>
                </View>
                <View style={[styles.allWrapper, styles.frameViewPosition]}>
                  <Text style={styles.all}>Women</Text>
                </View>
              </View>
              <View style={styles.frameParent1}>
                <View style={[styles.frameWrapper2, styles.frameWrapperBg]}>
                  <View
                    style={[
                      styles.bodyShotOfADarkSkinnedFaWrapper,
                      styles.wrapperLayout,
                    ]}
                  >
                    <Image
                      style={styles.bodyShotOfADarkSkinnedFaIcon}
                      resizeMode="cover"
                      source={require("../../../assets/bodyshotofadarkskinnedfashionpng-1.png")}
                    />
                  </View>
                </View>
                <View style={[styles.allWrapper, styles.frameViewPosition]}>
                  <Text style={styles.all}>Men</Text>
                </View>
              </View>
              <View style={styles.frameParent1}>
                <View style={[styles.frameWrapper2, styles.frameWrapperBg]}>
                  <View
                    style={[
                      styles.bodyShotOfADarkSkinnedFaWrapper,
                      styles.wrapperLayout,
                    ]}
                  >
                    <Image
                      style={styles.bodyShotOfADarkSkinnedFaIcon}
                      resizeMode="cover"
                      source={require("../../../assets/bodyshotofadarkskinnedfashionpng-1.png")}
                    />
                  </View>
                </View>
                <View style={[styles.allWrapper, styles.frameViewPosition]}>
                  <Text style={styles.all}>Kids</Text>
                </View>
              </View>
              <View style={styles.frameParent1}>
                <View style={[styles.frameWrapper2, styles.frameWrapperBg]}>
                  <View
                    style={[
                      styles.bodyShotOfADarkSkinnedFaWrapper,
                      styles.wrapperLayout,
                    ]}
                  >
                    <Image
                      style={styles.bodyShotOfADarkSkinnedFaIcon}
                      resizeMode="cover"
                      source={require("../../../assets/bodyshotofadarkskinnedfashionpng-1.png")}
                    />
                  </View>
                </View>
                <View style={[styles.allWrapper, styles.frameViewPosition]}>
                  <Text style={styles.all}>Summer</Text>
                </View>
              </View>
              <View style={styles.frameParent1}>
                <View style={[styles.frameWrapper2, styles.frameWrapperBg]}>
                  <View
                    style={[
                      styles.bodyShotOfADarkSkinnedFaWrapper,
                      styles.wrapperLayout,
                    ]}
                  >
                    <Image
                      style={styles.bodyShotOfADarkSkinnedFaIcon}
                      resizeMode="cover"
                      source={require("../../../assets/bodyshotofadarkskinnedfashionpng-1.png")}
                    />
                  </View>
                </View>
                <View style={[styles.allWrapper, styles.frameViewPosition]}>
                  <Text style={styles.all}>Winter</Text>
                </View>
              </View>
              <View style={styles.frameParent1}>
                <View style={[styles.frameWrapper2, styles.frameWrapperBg]}>
                  <View
                    style={[
                      styles.bodyShotOfADarkSkinnedFaWrapper,
                      styles.wrapperLayout,
                    ]}
                  >
                    <Image
                      style={styles.bodyShotOfADarkSkinnedFaIcon}
                      resizeMode="cover"
                      source={require("../../../assets/bodyshotofadarkskinnedfashionpng-1.png")}
                    />
                  </View>
                </View>
                <View style={[styles.allWrapper, styles.frameViewPosition]}>
                  <Text style={styles.all}>Men</Text>
                </View>
              </View>
              <View style={styles.frameParent1}>
                <View style={[styles.frameWrapper2, styles.frameWrapperBg]}>
                  <View
                    style={[
                      styles.bodyShotOfADarkSkinnedFaWrapper,
                      styles.wrapperLayout,
                    ]}
                  >
                    <Image
                      style={styles.bodyShotOfADarkSkinnedFaIcon}
                      resizeMode="cover"
                      source={require("../../../assets/bodyshotofadarkskinnedfashionpng-1.png")}
                    />
                  </View>
                </View>
                <View style={[styles.allWrapper, styles.frameViewPosition]}>
                  <Text style={styles.all}>Kids</Text>
                </View>
              </View>
              <View style={styles.frameParent1}>
                <View style={[styles.frameWrapper2, styles.frameWrapperBg]}>
                  <View
                    style={[
                      styles.bodyShotOfADarkSkinnedFaWrapper,
                      styles.wrapperLayout,
                    ]}
                  >
                    <Image
                      style={styles.bodyShotOfADarkSkinnedFaIcon}
                      resizeMode="cover"
                      source={require("../../../assets/bodyshotofadarkskinnedfashionpng-1.png")}
                    />
                  </View>
                </View>
                <View style={[styles.allWrapper, styles.frameViewPosition]}>
                  <Text style={styles.all}>Summer</Text>
                </View>
              </View>
              <View style={styles.frameParent1}>
                <View style={[styles.frameWrapper2, styles.frameWrapperBg]}>
                  <View
                    style={[
                      styles.bodyShotOfADarkSkinnedFaWrapper,
                      styles.wrapperLayout,
                    ]}
                  >
                    <Image
                      style={styles.bodyShotOfADarkSkinnedFaIcon}
                      resizeMode="cover"
                      source={require("../../../assets/bodyshotofadarkskinnedfashionpng-1.png")}
                    />
                  </View>
                </View>
                <View style={[styles.allWrapper, styles.frameViewPosition]}>
                  <Text style={styles.all}>Winter</Text>
                </View>
              </View>
            </View>
            <View style={[styles.frameParent9, styles.frameParentFlexBox]}>
              <View style={[styles.component2Wrapper, styles.wrapperLayout]}>
                <View style={styles.component2}>
                  <View style={[styles.image122Wrapper, styles.wrapperLayout]}>
                    <Image
                      style={styles.image122Icon}
                      resizeMode="cover"
                      source={require("../../../assets/image-1221.png")}
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
              <View style={styles.frameWrapper10}>
                <View style={[styles.frameParent10, styles.frameParentFlexBox]}>
                  <View
                    style={[
                      styles.filterSettingsSlidersIcon1Parent,
                      styles.sortByWrapperLayout,
                    ]}
                  >
                    <Image
                      style={styles.filterSettingsSlidersIcon1}
                      resizeMode="cover"
                      source={require("../../../assets/2738302-filter-settings-sliders-icon-1.png")}
                    />
                    <Text style={[styles.filter, styles.filterTypo]}>
                      Filter
                    </Text>
                  </View>
                  <View
                    style={[styles.sortByWrapper, styles.sortByWrapperLayout]}
                  >
                    <Text style={[styles.sortBy, styles.filterTypo]}>
                      Sort By
                    </Text>
                  </View>
                  <View
                    style={[styles.sortByWrapper, styles.sortByWrapperLayout]}
                  >
                    <Text style={[styles.sortBy, styles.filterTypo]}>
                      Brands
                    </Text>
                  </View>
                  <View
                    style={[styles.sortByWrapper, styles.sortByWrapperLayout]}
                  >
                    <Text style={[styles.sortBy, styles.filterTypo]}>
                      Local But Popular
                    </Text>
                  </View>
                  <View
                    style={[styles.sortByWrapper, styles.sortByWrapperLayout]}
                  >
                    <Text style={[styles.sortBy, styles.filterTypo]}>
                      GD Extra Discount
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.frameFlexBox}>
                <ScrollView>
                  <View style={styles.frameListingFlex}>
                    <FrameComponent5 />
                    <FrameComponent5 />
                    <FrameComponent5 />
                    <FrameComponent5 />
                    <FrameComponent6 uPTO="UPTO" />
                    <FrameComponent6 uPTO="UPTO" />
                    <FrameComponent6 uPTO="UPTO" />
                    <FrameComponent6 uPTO="UPTO" />
                    <FrameComponent6 uPTO="Flat" />
                    <FrameComponent6 uPTO="Flat" />
                    <FrameComponent6 uPTO="Flat" />
                    <FrameComponent6 uPTO="Flat" />
                    <FrameComponent7 />
                    <FrameComponent7 />
                    <FrameComponent7 />
                    <FrameComponent7 />
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ListingScreen;
