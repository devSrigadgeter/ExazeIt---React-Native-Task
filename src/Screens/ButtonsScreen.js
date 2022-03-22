// @flow
// external imports
import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";

// internal imports
import AppButton from "../Components/AppButton";
import AppSlider from "../Components/AppSlider";
import Avatar from "../Components/Avatar";
import Screen from "../Components/Screen";

const ButtonsScreen = (): React.Node => {
  const { userName } = useSelector((state) => state.auth);

  return (
    <Screen style={styles.container}>
      <Avatar />
      <Text style={styles.text}>{userName}</Text>
      <AppButton title="Press Me" color="dodgerblue" backgroundColor="transparent" />
      <AppButton title="Press Me" color="dodgerblue" backgroundColor="#9ccad95c" />
      <AppButton title="Press Me" />
      <AppSlider text="Slide Me" image={require("../assets/blue-gem.png")} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    backgroundColor: "#000"
  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "500",
    marginBottom: 50
  }
});

export default ButtonsScreen;
