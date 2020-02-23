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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Register from './component/Register/Register';

const Stack = createStackNavigator();

const mainApp = [Register];

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {mainApp.map((item, i) => {
          return (
            <Stack.Screen
              key={i}
              name="Home"
              component={item}
              options={{
                headerShown: false,
              }}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;
