import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const loginScreenImg = require('../../../assets/images/loginImg.png');

import InitialHeader from '../../components/InitialHeader';
import CustomTextInput from '../../components/TextInput';
import Button from '../../components/Button';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <InitialHeader topScreenImg={loginScreenImg} />
      <View style={styles.topRadius} />
      <View style={styles.subContainer}>
        <Text style={styles.title}>Login</Text>
        <CustomTextInput
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          label="Username"
          placeholder="Username"
          focused
        />
        <CustomTextInput
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          label="Password"
          placeholder="Password"
          secureText
        />
        <Button
          style={styles.btnStyle}
          color="#249781"
          title="Login"
          onPress={() => dispatch(loginUser({ username, password }))}
        />
        <Button
          style={styles.btnStyle}
          title="New to this App? Signup"
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
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
    marginTop: 60,
  },
  subContainer: {
    marginHorizontal: 24,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    fontFamily: 'mrt-medium',
    color: '#fff',
    marginTop: 60,
  },
  input: {
    marginTop: 16,
  },
  btnStyle: {
    marginTop: 16,
  },
});

export default LoginScreen;
