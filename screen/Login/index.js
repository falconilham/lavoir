/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux'
import styles from '../utils/css';
import { Formik } from 'formik';
import firebase from '../config'
import { addAccount } from '../../reducers/Account';

function Login(props) {
  let { addAccount, account } = props
  let [isLoading, setIsLoading] = useState(false);
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
        console.log(error);
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
  if (isLoading) {
    return (
      <ActivityIndicator style={{ alignSelf: 'center', justifyContent: 'center' }} />
    )
  } else {
    return (
      <ScrollView
        contentContainerStyle={{
          ...styles.body,
          justifyContent: 'center',
        }}>

        <Text style={{ ...styles.font, marginBottom: 30 }}>Login</Text>
        <Formik
          enableReinitialize
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={value => {
            loginFirebase(value.email, value.password)
          }}>
          {props => {
            let { values, setFieldValue, handleReset, handleSubmit } = props;
            return (
              <View style={styles.form}>
                <View style={styles.boxInput}>
                  <Text style={styles.font}>Email</Text>
                  <View>
                    <TextInput
                      placeholder="Email"
                      placeholderTextColor="#a67c00"
                      style={styles.inputText}
                      value={values.email}
                      onChangeText={value => setFieldValue('email', value)}
                    />
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
                    />
                  </View>
                </View>
                <View style={styles.boxButton}>
                  <TouchableOpacity
                    onPress={handleReset}
                    style={styles.buttonReset}>
                    <Text style={styles.font}>Reset</Text>
                  </TouchableOpacity>
                  <TouchableOpacity disabled={isLoading} onPress={() => handleSubmit()}>
                    {isLoading ? (
                      <ActivityIndicator size="small" color="white" />
                    ) : (
                        <Text style={styles.font}>Login</Text>
                      )}
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        </Formik>
      </ScrollView>
    )
  }
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
