

import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react';
import {name as appName} from './app.json';
import Store from './src/store/store';

import {Provider} from 'react-redux';
const Root = () => (
 
    <Provider store={Store}>
    <App />
  </Provider>
 
)

AppRegistry.registerComponent(appName, () => Root);

