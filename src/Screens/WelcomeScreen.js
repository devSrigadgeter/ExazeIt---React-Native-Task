// external imports
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WelcomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>WelcomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
  },
});

export default WelcomeScreen;
