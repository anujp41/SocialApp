export { default as FormButton } from './FormButton';
export { default as AddIngredients } from './AddIngredients';
export { default as AddSteps } from './AddSteps';

import React, { Component } from 'react';
import { AppScreens } from '../navigation/router.js';
import { Provider } from 'react-redux';
import store from '../store';

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <AppScreens />
        </Provider>
    );
  }
}