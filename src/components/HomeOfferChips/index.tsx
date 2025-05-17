import React, { memo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Color, Gap } from '../../../GlobalStyles';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { ParamListBase, useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { SEE_ALL_DEALS_SCREEN } from '../../routes/Routes';

export type HomeOfferChipType =
  | 'GD Offers'
  | 'Early Deals'
  | 'Ending Soon'
  | 'Branded offers';

const chips: { label: string; value: HomeOfferChipType }[] = [
  {
    label: 'GD Offers',
    value: 'GD Offers',
  },
  {
    label: 'Early Deals',
    value: 'Early Deals',
  },
  {
    label: 'Ending Soon',
    value: 'Ending Soon',
  },
  {
    label: 'Branded offers',
    value: 'Branded offers',
  },
];
const HomeOfferChips = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const setSelectedChip = (value: HomeOfferChipType) => {
    navigation.navigate(SEE_ALL_DEALS_SCREEN, { chipType: value });
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={[styles.chip]}
        onPress={() => setSelectedChip(item.value)}
      >
        <Text style={[styles.chipText]}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.chipContainer}>
        <ScrollView horizontal>
          {chips.map((item) => renderItem({ item }))}
        </ScrollView>
      </View>
    </View>
  );
};

export default memo(HomeOfferChips);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingVertical: 10,
    marginTop: -25,
  },
  chipContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  chipList: {
    paddingHorizontal: 10,
  },
  chip: {
    backgroundColor: Color.colorLightGray,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  chipText: {
    fontWeight: 'bold',
    color: Color.colorBlack,
    fontSize: 12,
  },
});
