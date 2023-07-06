import { StyleSheet, Text, View, Modal, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';

import CustomTextInput from './TextInput';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { createTodo, fetchTodos } from '../store';

const FormModal = ({ modalVisible, setModalVisible }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    dispatch(createTodo({ todoTitle: text, description, image: '' }));
    setModalVisible(false);
    dispatch(fetchTodos());
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        console.log('Close modal');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Write your todo</Text>
          <View style={styles.formContainer}>
            <View>
              <CustomTextInput
                value={text}
                onChangeText={setText}
                style={styles.input}
                label="Todo title"
                placeholder="Todo title"
                focused={true}
              />
              <CustomTextInput
                value={description}
                onChangeText={setDescription}
                style={styles.input}
                inputStyles={styles.inputStyle}
                label="Describe your todo"
                placeholder="Describe your todo"
                multiline={true}
                totalLines={6}
              />
              <Button
                style={styles.btnStyle}
                color="#249781"
                title="Create"
                onPress={handleSubmit}
              />
            </View>
            <Pressable style={styles.buttonClose} onPress={() => setModalVisible(!modalVisible)}>
              <Feather name="x-circle" size={38} color="#fff" />
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: '#121933CC',
  },
  modalView: {
    width: '100%',
    height: '85%',
    marginTop: 150,
    backgroundColor: '#121933',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 50,
  },
  buttonClose: {
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'left',
    fontFamily: 'mrt-bold',
    fontSize: 14,
    color: '#fff',
  },
  input: {
    marginTop: 16,
  },
  inputStyle: {
    height: 100,
  },
  btnStyle: {
    marginTop: 16,
  },
});

export default FormModal;
