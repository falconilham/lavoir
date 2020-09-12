/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

import store from './store';
import theme from './contant/theme/theme';
import Router from './screen'

function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer theme={theme}>
          <Router />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App;
