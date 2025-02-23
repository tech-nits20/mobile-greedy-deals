import React, { FC, memo, useEffect, useState } from 'react';
import { ActivityIndicator, Image, Pressable, Text, View } from 'react-native';
import { styles } from './styles';
import TopAppBar from '../../components/TopAppBar';
import { ScrollView } from 'react-native-gesture-handler';
import { ParamListBase, useNavigation, useRoute } from '@react-navigation/core';
import { LISTING_SCREEN, MENU_SCREEN } from '../../routes/Routes';
import { StackNavigationProp } from '@react-navigation/stack';
import { Color } from '../../../GlobalStyles';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCategoriesAction,
  getAllCategories,
} from '../../redux/sagas/categories/categoryRedux';
import Loader from '../../components/Loader';

const MenuScreenItem = ({ item, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.menuItemParent}>
      {({ pressed }) => (
        <View
          style={[styles.itemContainer, pressed && styles.itemContainerHover]}
        >
          <Image
            source={require('../../../assets/bodyshotofadarkskinnedfashionpng-11.png')}
          />
          <Text style={styles.menuItemTitle}>{item}</Text>
        </View>
      )}
    </Pressable>
  );
};
const MenuScreen: FC = () => {
  const categoriesData = useSelector(getAllCategories);
  const route = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const [categoryData, setCategoryData] = useState(undefined);

  useEffect(() => {
    if (!categoryData) {
      dispatch(fetchCategoriesAction());
    }
  }, []);

  useEffect(() => {
    if (categoriesData) {
      const data = categoriesData?.map((item: { name: string }) => item.name);
      setCategoryData(data);
    }
  }, [categoriesData]);

  const onItemPressed = () => {
    navigation.navigate(LISTING_SCREEN);
  };

  return (
    <View style={styles.container}>
      <TopAppBar title={route?.name === MENU_SCREEN && 'Menu'} />
      {!categoryData ? (
        <Loader />
      ) : (
        <ScrollView>
          <View style={styles.menuGrid}>
            {categoryData.map((item) => {
              return (
                <MenuScreenItem
                  key={item}
                  item={item}
                  onPress={onItemPressed}
                />
              );
            })}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default memo(MenuScreen);
