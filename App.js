import { useCallback } from 'react';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';

import MainNavigation from './src/navigation/MainNavigation';
import store from './src/store';

SplashScreen.preventAutoHideAsync();
//Initializing the SDK
Parse.setAsyncStorage(AsyncStorage);
//Paste below the Back4App Application ID AND the JavaScript KEY
Parse.initialize('myAppId', 'fqxhspx');
//Point to Back4App Parse API address
Parse.serverURL = 'http://localhost:1337/parse';

export default function App() {
  const [isLoaded] = useFonts({
    'mrt-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'mrt-medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'mrt-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  });

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync(); //hide the splashscreen
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <MainNavigation onLayout={handleOnLayout} />
    </Provider>
  );
}
