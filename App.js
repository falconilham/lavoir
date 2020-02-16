/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button, InputItem, List } from '@ant-design/react-native';

function App() {
  return (
    <React.Fragment>
      <InputItem
        name="test"
        placeholder="start from left"
      >
        <Text>Text</Text>
      </InputItem>
    </React.Fragment>
  );
}


export default App;
