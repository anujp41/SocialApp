import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import { Icon, FormLabel, FormInput } from 'react-native-elements';

export default class AddIngredients extends Component {

  constructor() {
    super();
    this.state = {
      currentInstruction: '',
      instructions: []
    };
    this.onPress = this.onPress.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd = () => {
    const currentInstruction = ';
    this.setState({instructions: [...this.state.instructions, this.state.currentInstruction], currentInstruction});
  }

  onPress = currentInstruction => {
    this.setState({currentInstruction});
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.currentInstruction.length !== this.state.currentInstruction.length;
  }

  render() {
    console.log('state is ', this.state)
    const instructions = this.state.instructions.reverse();
    return (
      <View style={styles.cotainer}>
        <View>
          <FormLabel>Enter your instructions below!</FormLabel>
          <View style={styles.form}>
            <Icon name='plus-one' onPress={this.handleAdd}/>
            <FormInput value={this.state.currentInstruction} multiline={true} onChangeText={this.onPress} />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.infoText}>These are all the ingridents added so far!</Text>
          {instructions.map(inst => (
            <FormInput style={{backgroundColor: '#F5FCFF'}} value={inst} multiline={true} editable={false} />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  form: {
    flexDirection: 'row',
    marginTop: 15
  },
  bottomContainer: {
    marginTop: 15,
    backgroundColor: '#F5FCFF'
  },
  infoText: {
    backgroundColor: '#F5FCFF',
    color: 'fuchsia',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
