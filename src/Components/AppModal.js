// @flow
// external imports
import * as React from "react";
import { Modal, StyleSheet, View } from "react-native";

type Props = {
  showAlert: boolean,
  children: React.Node,
  closeAlert: Function
};

const AppModal = ({ showAlert, children, closeAlert }: Props): React.Node => {
  return (
    <Modal visible={showAlert} transparent={true} animationType="fade" onRequestClose={closeAlert}>
      <View style={styles.container}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default AppModal;
