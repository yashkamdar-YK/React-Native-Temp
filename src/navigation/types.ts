import { NavigatorScreenParams } from '@react-navigation/native';

// Auth Stack Navigator Params
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

// Main Stack Navigator Params (Bottom Tabs)
export type MainStackParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
};

// Drawer Navigator Params
export type DrawerParamList = {
  MainTabs: undefined;
  Settings: undefined;
  HelpSupport?: undefined;
};

// Root Stack Navigator Params
export type RootStackParamList = {
  Splash: undefined;
  OnBoarding: undefined;
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Main: NavigatorScreenParams<DrawerParamList>;
}; 