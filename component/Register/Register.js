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
import { View, Image } from 'react-native';
import { Provider } from '@ant-design/react-native';
import RegisterForm from './RegisterForm';
import LogoImage from './../../image/logoLavoir.jpeg';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './utils/css';

function Register({ navigation }) {
  return (
    <Provider>
      <ScrollView style={styles.body}>
        <View style={styles.wrapperImage}>
          <Image source={LogoImage} style={styles.logoImage} />
        </View>
        <RegisterForm
          navigation={navigation}
        />
      </ScrollView>
    </Provider>
  );
}


export default Register;
