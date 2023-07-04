import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { signupUser } from '../../store';

const signupImg = require('../../../assets/images/signupImg.png');

import ScreenHeader from '../../components/ScreenHeader';
import CustomTextInput from '../../components/TextInput';
import Button from '../../components/Button';
import { createNewUser } from '../../data/user';

const SignupScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <ScreenHeader topScreenImg={signupImg} />
      <View style={styles.topRadius} />
      <View style={styles.subContainer}>
        <Text style={styles.title}>Signup</Text>
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
          title="Signup"
          onPress={() => {
            dispatch(signupUser({ username, password }));
            setUsername('');
            setPassword('');
          }}
        />
        <Button
          style={styles.btnStyle}
          title="Already signup? Login"
          onPress={() => navigation.navigate('Login')}
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

export default SignupScreen;
