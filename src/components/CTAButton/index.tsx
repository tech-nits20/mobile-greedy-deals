import React, { FC, memo } from "react";
import { Text } from "react-native";
import { Pressable, StyleSheet } from "react-native";
import { View } from "react-native";
import { Border, Color, Padding, FontSize } from "../../../GlobalStyles";

export interface CTAButtonProps {
  title: string;
  onPress?: () => void;
}

const CTAButton: FC<CTAButtonProps> = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: pressed
              ? Color.colorOrangedHover
              : styles.button.backgroundColor,
          },
        ]}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default memo(CTAButton);

export const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  button: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorOrangered_100,
    padding: Padding.p_3xs,
    alignItems: "center",
  },
  buttonText: {
    fontSize: FontSize.size_base,
    fontWeight: "500",
    color: Color.colorWhite,
  },
});
