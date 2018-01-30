import React from 'react';
import { StackNavigator, Easing } from 'react-navigation';
import { FormButton, AddIngredients, AddSteps } from '../components';

export const AppScreens = StackNavigator({
    FormButton: {
        screen: FormButton,
        navigationOptions: {
            header: null
        }
    },
    AddIngredients: { 
        screen: AddIngredients,
        // navigationOptions: {
        //     header: null
        // }
    },
    AddSteps: { 
        screen: AddSteps,
        // navigationOptions: {
        //     header: null
        // }
    }
});