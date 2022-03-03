// external imports
import React from 'react';
import {StyleSheet} from 'react-native';

import AppButton from '../Components/AppButton';
import AppSlider from '../Components/AppSlider';
import Screen from '../Components/Screen';

const ButtonsScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppButton
        title="Press Me"
        color="dodgerblue"
        backgroundColor="transparent"
      />
      <AppButton
        title="Press Me"
        color="dodgerblue"
        backgroundColor="#9ccad95c"
      />
      <AppButton title="Press Me" />
      <AppSlider text="Slide Me" image={require('../assets/blue-gem.png')} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#000',
  },
});

export default ButtonsScreen;
