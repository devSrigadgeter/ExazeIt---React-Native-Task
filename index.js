/**
 * @format
 */
// external imports
import React from 'react';
import {AppRegistry} from 'react-native';

// redux imports
import {Provider} from 'react-redux';
import store from './src/Store';

// internal imports
import App from './App';
import {name as appName} from './app.json';

const MyNativeApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => MyNativeApp);
