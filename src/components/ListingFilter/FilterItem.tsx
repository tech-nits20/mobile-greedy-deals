import CheckBox from '@react-native-community/checkbox';
import React, { memo } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Color, Gap, Padding } from '../../../GlobalStyles';

const FilterItem: React.FC<{
  itemName: string;
  isChecked: boolean;
  onChange: () => void;
}> = ({ isChecked, itemName, onChange }) => {
  return (
    <Pressable style={styles.sideItem} key={itemName} onPress={onChange}>
      <CheckBox
        style={{ borderColor: 'red', borderWidth: 1 }}
        disabled={false}
        tintColors={{
          false: Color.colorLightslategray,
          true: Color.colorOrangered_100,
        }}
        value={isChecked}
      />
      <Text style={{ color: Color.colorBlack }}>{itemName}</Text>
    </Pressable>
  );
};

export const styles = StyleSheet.create({
  sideItem: {
    padding: Padding.p_3xs,
    marginStart: Padding.p_7xs,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: Gap.gap_sm,
  },
});

export default memo(FilterItem);
