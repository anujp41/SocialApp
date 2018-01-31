import React, { Component } from 'react';
import { Text, View, Button, Modal, StyleSheet, Input } from 'react-native';

export default class StepsModal extends Component {

  closeModal = () => {
    this.props.toggleModal();
  }

  pressed = () => {
      console.log('event ', event)
  }

  render() {
    const modalVisible = this.props.visible;
    return (
        <View style={styles.container}>
          <Modal
              visible={modalVisible}
              animationType={'slide'}
          >
            <View style={styles.modalContainer}>
              <View style={styles.innerContainer}>
                <Button
                    onPress={() => this.closeModal()}
                    title="Close modal"
                />
                <Text>Please add more details to the step:</Text>
                <Text>"{this.props.addDetails}"</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Button
                        onPress={() => this.closeModal()}
                        title="Add Device"
                        color='#33cc33'
                    />
                    <Button
                        onPress={() => this.closeModal()}
                        title="Add Action"
                        color='#ffcc00'
                    />
                    <Button
                        onPress={() => this.closeModal()}
                        title="Add Value"
                        color='#ff5050'
                    />
                </View>
              </View>
            </View>
          </Modal>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  innerContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: '50%'
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  input: {
    width : '75%',
  }
});