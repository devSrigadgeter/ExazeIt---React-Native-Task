// external imports
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

// internal imports
import {PRIMARY_COLOR, WHITE} from '../utils/constants';

const AppButton = ({
  title,
  onPress,
  color = WHITE,
  backgroundColor = PRIMARY_COLOR,
}) => {
  return (
    <TouchableOpacity style={styles.button(backgroundColor)} onPress={onPress}>
      <Text style={styles.text(color)}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: backgroundColor => ({
    padding: 15,
    width: '100%',
    backgroundColor,
    borderRadius: 5,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  text: color => ({
    color,
    fontSize: 18,
    fontWeight: '500',
  }),
});

AppButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default AppButton;
