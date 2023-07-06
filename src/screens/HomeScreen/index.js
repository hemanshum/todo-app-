import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/thunks/userThunk';
import HomeHeader from '../../components/HomeHeader';
import TodoCard from '../../components/TodoCard';
import Button from '../../components/Button';
import FormModal from '../../components/FormModal';
import { fetchTodos } from '../../store';
const HomeImg = require('../../../assets/images/homeImg.png');

const HomeScreen = () => {
  const dispatch = useDispatch();
  const username = useSelector(state => state.user.username);
  const todos = useSelector(state => state.todo.todos);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <View style={styles.container}>
      <HomeHeader
        username={username}
        topScreenImg={HomeImg}
        onPress={() => dispatch(logoutUser())}
      />
      <View style={styles.topRadius} />
      <Text style={styles.title}>My Todos</Text>
      <View style={styles.todoContainer}>
        <FlatList
          data={todos}
          renderItem={({ item }) => <TodoCard todo={item} />}
          keyExtractor={item => item.id}
        />
        <Button
          style={styles.btnStyle}
          color="#249781"
          title="Add Todo"
          onPress={() => setModalVisible(true)}
        />
      </View>
      <FormModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121933',
  },
  topRadius: {
    width: '100%',
    height: 50,
    backgroundColor: '#121933',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    borderColor: '#fff',
    marginTop: 50,
  },
  title: {
    fontSize: 12,
    fontFamily: 'mrt-bold',
    color: '#fff',
    marginTop: -30,
    marginLeft: 18,
  },
  todoContainer: {
    marginHorizontal: 18,
    marginTop: 18,
    color: '#fff',
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  btnStyle: {
    marginTop: 16,
  },
});

export default HomeScreen;
