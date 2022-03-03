// external imports
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import Avatar from '../Components/Avatar';

// internal imports
import Screen from '../Components/Screen';

const ProfileScreen = ({navigation}) => {
  const {userName} = useSelector(state => state.auth);

  return (
    <Screen style={styles.container}>
      <Avatar />
      <Text style={styles.text}>{userName}</Text>
      <View style={styles.button}>
        <Button
          title="Go to Buttons Page"
          onPress={() => navigation.navigate('Buttons')}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
  },
  button: {
    width: '100%',
    position: 'absolute',
    bottom: 30,
  },
});

export default ProfileScreen;
