/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  Modal
} from 'react-native';
import LogoImage from './../../image/logoLavoir.jpeg';
import { connect } from 'react-redux'
import styles from '../utils/css';
import { Formik } from 'formik';
import firebase from '../config'
import { addAccount } from '../../reducers/Account';
import validationSchema from './validationSchema'

function Login(props) {
  let { addAccount, account } = props
  let [isLoading, setIsLoading] = useState(false);
  let [error, setError] = useState({
    isError: false,
    errorMessage: ""
  })
  let loginFirebase = async (email, password) => {
    setIsLoading(true);
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        addAccount({ email: res.user.email });
        setIsLoading(false);
      })
      .catch(error => {
        setError({
          isError: true,
          errorMessage: error?.t?.message
        })
        setIsLoading(false);
      });
  };
  useEffect(() => {
    async function isLogin() {
      setIsLoading(true)
      await firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in.
          let userData = {
            displayName: user.displayName,
            email: user.email,
            emailVerified: user.emailVerified,
            photoURL: user.photoURL,
            isAnonymous: user.isAnonymous,
            uid: user.uid,
            providerData: user.providerData,
          }
          addAccount(userData);
        }
        setIsLoading(false)
      });
    }
    isLogin()
  }, [])
  return (
    <View style={styles.body}>
      <Modal animationType="slide" visible={error.isError} style={{width: '30%', height: '30%'}}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text co>{error.errorMessage}</Text>
            </View>
            <TouchableHighlight onPress={() => setError({isError: false, errorMessage: ''})}>
              <Text>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <Formik
        enableReinitialize
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={value => {
          loginFirebase(value.email, value.password)
        }}>
        {props => {
          let { values, setFieldValue, handleReset, handleSubmit, dirty, errors, touched } = props;
          console.log(errors, touched)
          return (
            <View style={styles.form}>
              <View style={styles.wrapperImage}>
                <Image source={LogoImage} style={styles.logoImage} />
              </View>
              <View style={styles.boxInput}>
                <Text style={styles.font}>Email</Text>
                <View>
                  <TextInput
                    placeholder="Email"
                    placeholderTextColor="#a67c00"
                    style={styles.inputText}
                    value={values.email}
                    onChangeText={value => setFieldValue('email', value)}
                    disabled={isLoading}
                  />
                  {errors.email && touched.email && (
                    <Text style={{color: 'red'}}>{errors.email}</Text>
                  )}
                </View>
              </View>
              <View style={styles.boxInput}>
                <Text style={styles.font}>Password</Text>
                <View>
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor="#a67c00"
                    style={styles.inputText}
                    secureTextEntry
                    value={values.password}
                    onChangeText={value => setFieldValue('password', value)}
                    disabled={isLoading}
                  />
                  {errors.password && touched.password && (
                    <Text style={{color: 'red'}}>{errors.password}</Text>
                  )}
                </View>
              </View>
              <View style={styles.boxButton}>
                <TouchableOpacity
                  onPress={handleReset}
                  style={styles.buttonReset}>
                  <Text style={styles.font}>Reset</Text>
                </TouchableOpacity>
                  {isLoading ? (
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                      <ActivityIndicator size="small" color="white" />
                    </View>
                  ) :(
                    <TouchableOpacity disabled={isLoading || !dirty} onPress={() => handleSubmit()}>
                      <Text disabled={!dirty} style={!dirty ? {...styles.font, color: 'grey' }: styles.font}>Login</Text>
                    </TouchableOpacity>
                  )}
              </View>
            </View>
          );
        }}
      </Formik>
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    account: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addAccount: (account) => {
      dispatch(addAccount(account));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
