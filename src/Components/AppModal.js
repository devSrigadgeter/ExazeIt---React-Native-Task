// external imports
import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';

const AppModal = ({showAlert, children, closeAlert}) => {
  return (
    <Modal
      visible={showAlert}
      transparent={true}
      animationType="fade"
      onRequestClose={closeAlert}>
      <View style={styles.container}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppModal;
