// @flow
// external imports
import * as React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import DeviceInfo from "react-native-device-info";

// internal imports
import Screen from "../Components/Screen";
import AppModal from "../Components/AppModal";

// redux actions
import { setUserName } from "../Store/Actions/Auth";

type Props = {
  navigation: Object
};

const WelcomeScreen = ({ navigation }: Props): React.Node => {
  const { useState, useEffect } = React;
  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    DeviceInfo.isEmulator().then((isEmulator) => {
      if (isEmulator) {
        setShowModal(true);
      }
    });
  }, []);

  const closeAlert = () => setShowModal(false);

  const handleSave = () => {
    dispatch(setUserName(name));
    navigation.navigate("Profile");
  };

  return (
    <Screen style={styles.container}>
      <AppModal showAlert={showModal} closeAlert={closeAlert}>
        <View style={styles.alertContainer}>
          <Text style={styles.boldText}>Alert</Text>
          <View style={styles.hl} />
          <Text style={styles.message}>You're running app in an emulator</Text>
          <View style={styles.buttonContainer}>
            <Button title="OK" onPress={() => closeAlert()} />
          </View>
        </View>
      </AppModal>

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
    justifyContent: "flex-end"
  },
  input: {
    padding: 5,
    width: "100%",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cecece"
  },
  alertContainer: {
    shadowColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: 180,
    padding: 10,
    backgroundColor: "#fff"
  },
  boldText: {
    fontWeight: "bold"
  },
  message: {
    paddingVertical: 10
  },
  hl: {
    height: 1,
    width: "100%",
    backgroundColor: "darkgray"
  },
  buttonContainer: {
    width: "100%",
    marginVertical: 10
  }
});

export default WelcomeScreen;
