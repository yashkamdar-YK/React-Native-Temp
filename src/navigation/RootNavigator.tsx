import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParamList } from './types';
import { NAVIGATION } from './constants';

// Import navigators
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';

// Import screens
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    checkFirstLaunch();
    checkLoginStatus();
  }, []);

  const checkFirstLaunch = async () => {
    try {
      const hasLaunched = await AsyncStorage.getItem('hasLaunched');
      setIsFirstLaunch(hasLaunched === null);
    } catch (error) {
      console.error('Error checking first launch:', error);
      setIsFirstLaunch(true);
    }
  };

  const checkLoginStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      setIsLoggedIn(!!token);
    } catch (error) {
      console.error('Error checking login status:', error);
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: 'white' },
        }}
        initialRouteName={
          isFirstLaunch
            ? NAVIGATION.OnBoarding
            : isLoggedIn
            ? NAVIGATION.Main
            : NAVIGATION.Auth
        }>
        <Stack.Screen name={NAVIGATION.Splash} component={SplashScreen} />
        <Stack.Screen name={NAVIGATION.OnBoarding} component={OnboardingScreen} />
        <Stack.Screen name={NAVIGATION.Auth} component={AuthNavigator} />
        <Stack.Screen name={NAVIGATION.Main} component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator; 