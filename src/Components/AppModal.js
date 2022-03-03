// external imports
import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

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

AppModal.propTypes = {
  showAlert: PropTypes.bool,
  children: PropTypes.node,
  closeAlert: PropTypes.func,
};

export default AppModal;
