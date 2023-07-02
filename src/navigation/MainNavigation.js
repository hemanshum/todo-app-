import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();

const MainNavigation = ({ onLayout }) => {
  useEffect(() => {
    onLayout();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
