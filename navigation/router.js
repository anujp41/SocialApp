import React from 'react';
import { Button } from 'react-native'
import { StackNavigator, Easing } from 'react-navigation';
import { FormButton, AddIngredients, AddSteps, Modal } from '../components';

export const AppScreens = StackNavigator({
    FormButton: {
        screen: FormButton,
        navigationOptions: {
            header: null
        }
    },
    AddIngredients: { 
        screen: AddIngredients,
        navigationOptions: {
            title: 'Adding Ingredients'
        }
    },
    AddSteps: { 
        screen: AddSteps,
        navigationOptions: {
            title: 'Adding Steps'
        }
    }
});