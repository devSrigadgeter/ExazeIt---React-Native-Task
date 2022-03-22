// @flow
// external imports
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// internal imports
import { PRIMARY_COLOR, WHITE } from "../utils/constants";

type Props = {
  title: string,
  onPress?: Function,
  color?: string,
  backgroundColor?: string
};

const AppButton = ({
  title,
  onPress,
  color = WHITE,
  backgroundColor = PRIMARY_COLOR
}: Props): React.Node => {
  return (
    <TouchableOpacity style={styles.button(backgroundColor)} onPress={onPress}>
      <Text style={styles.text(color)}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: (backgroundColor) => ({
    padding: 15,
    width: "100%",
    backgroundColor,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center"
  }),
  text: (color) => ({
    color,
    fontSize: 18,
    fontWeight: "500"
  })
});

export default AppButton;
