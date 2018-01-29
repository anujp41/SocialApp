import React from 'react';
import { StackNavigator, Easing } from 'react-navigation';
import { Welcome, RecipeForm } from '../components';

export const AppScreens = StackNavigator({
    Welcome: { 
        screen: Welcome,
        navigationOptions: {
            header: null
        }
    },
    RecipeForm: { 
        screen: RecipeForm,
        navigationOptions: {
            header: null
        }
    }
});