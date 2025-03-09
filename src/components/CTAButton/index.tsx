import React, { FC, memo } from 'react';
import { Text, TextStyle, ViewStyle } from 'react-native';
import { Pressable, StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Border, Color, Padding, FontSize } from '../../../GlobalStyles';
import Loader from '../Loader';

export interface CTAButtonProps {
  title: string;
  onPress?: () => void;
  viewStyle?: ViewStyle;
  titleStyle?: TextStyle;
  loading?: boolean;
}

const CTAButton: FC<CTAButtonProps> = ({
  title,
  onPress,
  viewStyle,
  titleStyle,
  loading,
}) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          [styles.button, viewStyle],
          {
            backgroundColor: pressed
              ? Color.colorOrangedHover
              : styles.button.backgroundColor,
          },
        ]}
        onPress={onPress}
      >
        <Text
          style={[
            styles.buttonText,
            titleStyle,
            loading && { color: styles.button.backgroundColor },
          ]}
        >
          {title}
        </Text>
        {loading && (
          <View style={{ position: 'absolute' }}>
            <Loader color={Color.colorWhite} size="small" />
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default memo(CTAButton);

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  button: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorOrangered_100,
    padding: Padding.p_3xs,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: FontSize.size_base,
    fontWeight: '500',
    color: Color.colorWhite,
  },
});
