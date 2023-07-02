import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import MainNavigation from './src/navigation/MainNavigation';

SplashScreen.preventAutoHideAsync();

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

  return <MainNavigation onLayout={handleOnLayout} />;
}
