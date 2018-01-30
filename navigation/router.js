import React from 'react';
import { Button } from 'react-native'
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
        navigationOptions: {
            headerRight: <Button title="Save" myProps={{save: 'Hello'}}/>
        }
    },
    AddSteps: { 
        screen: AddSteps,
        navigationOptions: {
            header: null
        }
    }
});