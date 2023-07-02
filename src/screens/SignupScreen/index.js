import { StyleSheet, Text, View } from 'react-native';

const signupImg = require('../../../assets/images/signupImg.png');

import InitialHeader from '../../components/InitialHeader';
import CustomTextInput from '../../components/TextInput';
import Button from '../../components/Button';

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <InitialHeader topScreenImg={signupImg} />
      <View style={styles.topRadius} />
      <View style={styles.subContainer}>
        <Text style={styles.title}>Signup</Text>
        <CustomTextInput style={styles.input} label="Username" placeholder="Username" focused />
        <CustomTextInput style={styles.input} label="Password" placeholder="Password" secureText />
        <Button
          style={styles.btnStyle}
          color="#249781"
          title="Signup"
          onPress={() => console.log('pressed')}
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
