// @flow
// external imports
import * as React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

type Props = {
  children: React.Node,
  style: Object
};

function Screen({ children, style }: Props): React.Node {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default Screen;
