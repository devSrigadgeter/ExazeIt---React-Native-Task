// external imports
import React, {useState} from 'react';
import {Button, StyleSheet, TextInput} from 'react-native';

// internal imports
import Screen from '../Components/Screen';

const WelcomeScreen = ({navigation}) => {
  const [name, setName] = useState('');
  return (
    <Screen style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Enter Your Name"
      />

      <Button
        title="Save"
        onPress={() => {
          navigation.navigate('Profile');
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 30,
    justifyContent: 'flex-end',
  },
  input: {
    padding: 5,
    width: '100%',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cecece',
  },
});

export default WelcomeScreen;
