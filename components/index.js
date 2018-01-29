export { default as Welcome } from './Welcome';
export { default as RecipeForm } from './RecipeForm';

import React, { Component } from 'react';
import { AppScreens } from '../navigation/router.js';

export default class App extends Component {
  render() {
    return (
        <AppScreens />
    );
  }
}