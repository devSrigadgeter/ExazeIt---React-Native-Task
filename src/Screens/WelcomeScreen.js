// external imports
import React, {useState} from 'react';
import {Button, StyleSheet, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';

// internal imports
import Screen from '../Components/Screen';

import {setUserName} from '../Store/Actions/Auth';

const WelcomeScreen = ({navigation}) => {
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(setUserName(name));
    navigation.navigate('Profile');
  };

  return (
    <Screen style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Enter Your Name"
      />

      <Button title="Save" onPress={() => handleSave()} />
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
