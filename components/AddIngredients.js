import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  FlatList,
  TextInput,
  Button
} from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { addIngredientsThunk } from '../store';

class AddIngredients extends Component {

  constructor() {
    super();
    this.state = {
      currentIngredient: '',
      ingredients: [],
      editing: null,
      editText: ''
    };
    this.onPress = this.onPress.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.buttonPress = this.buttonPress.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.add = this.add.bind(this);
  }

  add = () => {
    this.props.addIngredients(this.state.ingredients);
    this.props.navigation.navigate('FormButton');
  }

  handleAdd = () => {
    const currentIngredient = '';
    this.setState({ ingredients: [ this.state.currentIngredient, ...this.state.ingredients ], currentIngredient });
  }

  onPress = currentIngredient => {
    this.setState({ currentIngredient });
  }

  onEdit = editText => {
    this.setState({ editText })
  }

  buttonPress = (type, i) => {
    const ingredients = this.state.ingredients;
    if (type === 'edit') {
      this.setState({editing: i, editText: ingredients[i]})
    } else if (type === 'save') {
      const newIngredient = this.state.editText;
      const ingredients = this.state.ingredients;
      ingredients.splice( i, 1, newIngredient );
      this.setState({ ingredients, editing: null, editText: '' })
    } else if (type === 'remove') {
      ingredients.splice( i, 1 );
      this.setState({ ingredients });
    } 
  }

  render() {
    const ingredients = this.state.ingredients;
    const editing = this.state.editing;
    return (
      <View style={styles.cotainer}>
        <View style={{justifyContent: 'space-between'}}>
            <Button
              title='Save my ingredients'
              style={styles.button}
              onPress={this.add}
              />
        </View>
          <View style={styles.form}>
            <Icon name='plus-one' color='#CAC3C3' onPress={this.handleAdd}/>
            <TextInput placeholder='Enter your ingredients here!' placeholderTextColor='#645757' style={styles.textInput} value={this.state.currentIngredient} onChangeText={this.onPress} onSubmitEditing={this.handleAdd} />
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.infoText}>These are all the ingredients added so far!</Text>
          {ingredients.map((inst, i) => (
            editing !== i
            ?
              <View style={styles.ingredientsRow} key={i} >
                <TextInput style={styles.rowText} value={inst} editable={false} />
                <View style={{justifyContent: 'flex-end', flexDirection: 'row', left: 15}}>
                  <Icon name='create' onPress={() => this.buttonPress('edit', i)} />
                  <Icon name='drag-handle' onPress={() => this.buttonPress('drag', i)} />
                  <Icon name='remove-circle' onPress={() => this.buttonPress('remove', i)} />
                </View>
              </View>
            : 
              <View style={styles.ingredientsRow} key={i} >
                <TextInput style={styles.rowText} value={this.state.editText} editable={true} onChangeText={this.onEdit} />
                <View style={{justifyContent: 'flex-end', flexDirection: 'row', left: 15}}>
                  <Icon name='save' onPress={() => this.buttonPress('save', i)} />
                </View>
              </View>
            
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
    marginTop: 45,
    marginBottom: 25
  },
  textInput: {
    borderBottomWidth: 1,
    width: '85%'
  },
  rowText: {
    borderBottomWidth: 1,
    width: '75%',
    left: 15
  },
  bottomContainer: {
    flex: 1,
    marginTop: 25
  },
  infoText: {
    backgroundColor: '#F5FCFF',
    color: '#877777',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 15
  },
  ingredientsRow: {
    flexDirection: 'row',
    height: 40,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
});

const mapDispatchToProps = dispatch => {
  return {
    addIngredients: ingredient => {
      const action = addIngredientsThunk(ingredient);
      dispatch(action);
    }
  }
}

const AddIngredientsContainer = connect(null, mapDispatchToProps)(AddIngredients);
export default AddIngredientsContainer;