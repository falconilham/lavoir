import React from 'react';
import {View, Image} from 'react-native';
import RegisterForm from './RegisterForm';
import LogoImage from './../../image/logoLavoir.jpeg';
import {ScrollView} from 'react-native-gesture-handler';
import styles from '../utils/css';

function Register({navigation, ...props}) {
  return (
    <ScrollView style={styles.body}>
      <View style={styles.wrapperImage}>
        <Image source={LogoImage} style={styles.logoImage} />
      </View>
      <RegisterForm navigation={navigation} props={props} />
    </ScrollView>
  );
}

export default Register;
