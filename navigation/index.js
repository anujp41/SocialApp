import React from 'react';
import { StackNavigator, Easing } from 'react-navigation';
import { Login, List } from '../components';

export const AppScreens = StackNavigator({
    Login: { 
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    List: { 
        screen: List,
        navigationOptions: {
            header: null
        }
    }
});