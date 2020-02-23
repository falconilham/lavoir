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

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import store from './reducers';

import Register from './component/Register/Register';
import Home from './component/Home/Home';

const Stack = createStackNavigator();

const mainApp = [
  {
    name: 'Register',
    component: Register,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Home',
    component: Home,
    headerShown: true,
  },
];

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Register">
          {mainApp.map((item, i) => {
            return (
              <Stack.Screen
                key={i}
                name={item.name}
                component={item.component}
                options={item.options}
              />
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
