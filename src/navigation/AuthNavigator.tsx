import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamList } from './types';
import { NAVIGATION } from './constants';

// Import screens
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'white' },
      }}
      initialRouteName={NAVIGATION.Login}>
      <Stack.Screen name={NAVIGATION.Login} component={LoginScreen} />
      <Stack.Screen name={NAVIGATION.Register} component={RegisterScreen} />
      <Stack.Screen name={NAVIGATION.ForgotPassword} component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator; 