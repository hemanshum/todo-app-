import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../store/thunks/userThunk';

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        style={{ marginTop: 100 }}
        title="Logout"
        color="red"
        onPress={() => dispatch(logoutUser())}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
