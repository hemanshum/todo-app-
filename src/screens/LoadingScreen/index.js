import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { autoLoginUser } from '../../store/actions/autoLoginAction';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const LoadingScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { isSignedIn, autoSignInCheck } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(autoLoginUser());
  }, []);
  useEffect(() => {
    if (autoSignInCheck && !isSignedIn) {
      navigation.navigate('Login');
    }
  }, [autoSignInCheck]);

  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoadingScreen;
