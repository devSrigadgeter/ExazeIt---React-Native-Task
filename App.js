/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// external imports
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// internal imports
import WelcomeScreen from "./src/Screens/WelcomeScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";
import ButtonsScreen from "./src/Screens/ButtonsScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: "Home" }} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Buttons" component={ButtonsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
