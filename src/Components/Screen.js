// external imports
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import PropTypes from "prop-types";

function Screen({ children, style }) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

Screen.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
};

export default Screen;
