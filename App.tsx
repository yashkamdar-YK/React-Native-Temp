/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { COLORS } from './src/styles/typography/colors';
import RootNavigator from './src/navigation/RootNavigator';
import PlayGround from './src/screens/PlayGround';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={COLORS.white}
      />
      {/* <RootNavigator /> */}
      <PlayGround />
    </GestureHandlerRootView>
  );
}

export default App;
