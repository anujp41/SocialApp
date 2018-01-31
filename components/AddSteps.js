import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  FlatList,
  TextInput
} from 'react-native';
import { Icon } from 'react-native-elements';
import Modal from './Modal';

export default class AddSteps extends Component {

  constructor() {
    super();
    this.state = {
      currentStep: '',
      steps: [],
      editing: null,
      editText: '',
      showModal: false
    };
    this.onPress = this.onPress.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.buttonPress = this.buttonPress.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal = (i) => {
    console.log('modal for ', i);
    this.setState({ showModal: !this.state.showModal})
  }

  handleAdd = () => {
    const currentStep = '';
    this.setState({ steps: [ this.state.currentStep, ...this.state.steps ], currentStep });
  }

  onPress = currentStep => {
    this.setState({ currentStep });
  }

  onEdit = editText => {
    this.setState({ editText })
  }

  buttonPress = (type, i) => {
    const steps = this.state.steps;
    if (type === 'edit') {
      this.setState({editing: i, editText: steps[i]})
    } else if (type === 'save') {
      const newStep = this.state.editText;
      const steps = this.state.steps;
      steps.splice( i, 1, newStep );
      this.setState({ steps, editing: null, editText: '' })
    } else if (type === 'remove') {
      steps.splice( i, 1 );
      this.setState({ steps });
    } else if (type === 'addMore') {
      console.log('i am presed')
    }
  }

  render() {
    const steps = this.state.steps;
    const editing = this.state.editing;
    return (
      <View style={styles.cotainer}>
          <View style={styles.form}>
            <Icon name='plus-one' color='#CAC3C3' onPress={this.handleAdd}/>
            <TextInput placeholder='Enter your steps here!' placeholderTextColor='#645757' style={styles.textInput} value={this.state.currentStep} onChangeText={this.onPress} onSubmitEditing={this.handleAdd} />
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.infoText}>The steps for your recipe are:</Text>
          {steps.map((inst, i) => (
            editing !== i
            ?
              <View style={styles.stepsRow} key={i} >
                <TextInput style={styles.rowText} value={inst} editable={false} />
                <View style={{justifyContent: 'flex-end', flexDirection: 'row', left: 15}}>
                  <Icon name='create' onPress={() => this.buttonPress('edit', i)} />
                  <Icon name='videocam' />
                  <Icon name='arrow-drop-down' onPress={() => this.toggleModal(i)} />
                  <Icon name='drag-handle' onPress={() => this.buttonPress('drag', i)} />
                  <Icon name='remove-circle' onPress={() => this.buttonPress('remove', i)} />
                </View>
              </View>
            : 
              <View style={styles.stepsRow} key={i} >
                <TextInput style={styles.rowText} value={this.state.editText} editable={true} onChangeText={this.onEdit} onSubmitEditing={() => this.buttonPress('save', i)} />
                <View style={{justifyContent: 'flex-end', flexDirection: 'row', left: 15}}>
                  <Icon name='save' onPress={() => this.buttonPress('save', i)} />
                </View>
              </View>
              
          ))}
        </View>
        <View>
          <Modal visible={this.state.showModal} toggleModal={this.toggleModal} />
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
    width: '65%',
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
  stepsRow: {
    flexDirection: 'row',
    height: 40,
  }
});