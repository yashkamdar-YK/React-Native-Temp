import { AuthStackParamList, MainStackParamList, RootStackParamList } from './types';

export const NAVIGATION = {
  // Root Stack
  Splash: 'Splash' as keyof RootStackParamList,
  OnBoarding: 'OnBoarding' as keyof RootStackParamList,
  Auth: 'Auth' as keyof RootStackParamList,
  Main: 'Main' as keyof RootStackParamList,
  
  // Auth Stack
  Login: 'Login' as keyof AuthStackParamList,
  Register: 'Register' as keyof AuthStackParamList,
  ForgotPassword: 'ForgotPassword' as keyof AuthStackParamList,
  
  // Main Stack
  Home: 'Home' as keyof MainStackParamList,
  Profile: 'Profile' as keyof MainStackParamList,
  Settings: 'Settings' as keyof MainStackParamList,
}; 