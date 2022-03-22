// @flow
// external imports
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// internal imports
import WelcomeScreen from "./src/Screens/WelcomeScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";
import ButtonsScreen from "./src/Screens/ButtonsScreen";

const Stack = createNativeStackNavigator();

const App = (): React.Node => {
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
