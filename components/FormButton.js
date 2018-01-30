import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

const button =  ['Add Ingredients', 'Add Steps']

export default class FormButton extends Component {

    constructor() {
        super();
        this.onPress = this.onPress.bind(this);
    }

    onPress = (text) => {
        const regex = new RegExp(' ', 'g');
        text = text.replace(regex, '');
        this.props.navigation.navigate(text);
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to ChefIQ. Please select from options below!
                </Text>
                {button.map((text, i) => (
                    <TouchableHighlight key={i} style={styles.button} onPress={() => this.onPress(text)}>
                        <Text style={styles.buttonText}>{text}</Text>
                    </TouchableHighlight>
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    }, 
    button: {
      height: 36,
      backgroundColor: '#48BBEC',
      borderColor: '#48BBEC',
      borderWidth: 1,
      borderRadius: 8,
      paddingTop: 20,
      paddingBottom: 20,
      marginBottom: 10,
      marginTop: 25,
      justifyContent: 'center',
      width: '75%'
    },
    buttonText: {
      fontSize: 18,
      color: 'white',
      alignSelf: 'center'
    }
  });