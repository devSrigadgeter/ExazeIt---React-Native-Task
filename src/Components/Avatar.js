// external imports
import React from "react";
import { Image, StyleSheet, View } from "react-native";

const Avatar = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/avatar.jpg")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center"
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30
  }
});

export default Avatar;
