/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { useState, createRef } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { Provider } from '@ant-design/react-native';
import RegisterForm from './RegisterForm';
import LogoImage from './../../image/logoLavoir.jpeg';
import { ScrollView } from 'react-native-gesture-handler';

function Register() {
  return (
    <Provider>
      <ScrollView style={styles.body}>
        <View style={styles.wrapperImage}>
          <Image source={LogoImage} style={styles.logoImage} />
        </View>
        <RegisterForm
        />
      </ScrollView>
    </Provider>
  );
}
let styles = StyleSheet.create({
  body: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
    flexDirection: 'column',
    padding: 10,
  },
  container: {
    backgroundColor: 'black',
    borderWidth: 1,
  },
  form: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    maxHeight: '65%',
    borderWidth: 1,
  },
  logoImage: {
    width: 150,
    height: 150,
  },
  wrapperImage: {
    borderRadius: 90,
    padding: 10,
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: 10,
  },
});

export default Register;
