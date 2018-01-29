export { default as Welcome } from './Welcome';
export { default as List } from './list';

import React, { Component } from 'react';
import {
  Platform,
  View
} from 'react-native';
import { AppScreens } from '../navigation/router.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
        <AppScreens />
    );
  }
}