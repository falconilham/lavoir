/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import styles from '../utils/css';
import { Grid, Col, Row } from 'react-native-easy-grid';
import Carosel from '../../component/Carosel';

import Firebase from '../config';
import { connect, useSelector } from 'react-redux'
import { logOut } from '../../reducers/Account'
import { wedding, logout, transaction } from '../../image'

let promo = [
  {
    title: 'bebas',
    text: 'beli satu gratis satu',
  },
  {
    title: 'bebas1',
    text: 'beli satu gratis satu',
  },
];


function Menu({ navigation, ...props }) {
  let userData = useSelector((state) => state?.state?.accountInfo)
  let [available, setAvailable] = useState(true)
  let logOut = () => {
    Firebase.auth().signOut();
    props.logOut()
  };
  
  useEffect(() => {
    let db = Firebase.firestore();
    let getData = db.collection("transaction").where("name", "==", userData?.email).get()
    if(getData.empty){
      setAvailable(true)
    }else{
      setAvailable(false)
    }
  },[])

  let navigate = [
    {
      name: 'Register',
      value: 'register',
      path: 'register',
      logo: wedding,
      func: () => navigation.navigate('Register')
    },
    {
      name: 'log out',
      value: 'login',
      path: 'login',
      logo: logout,
      func: () => logOut()
    },
    {
      name: 'Transaction',
      value: 'transaction',
      path: 'transaction',
      logo: transaction,
      func: () => navigation.navigate('Transaction')
    },
    {
      
    }
  ];
  return (
    <View style={{
      borderBottomColor: '#DABB56',
      borderBottomWidth: 1, ...styles.body
    }}>
      <Text>Menu</Text>
      <Grid>
        <Row
          size={35}
          style={{ backgroundColor: 'black', alignItems: 'center' }}>
          <Carosel data={promo} style={{ height: '80%' }} />
        </Row>
        <Row size={65} style={{

        }}>
          <ScrollView style={{
            backgroundColor: 'white', borderBottomColor: '#DABB56',
            borderBottomWidth: 1,
          }}>
            <Grid style={{
              borderBottomColor: '#DABB56',
              borderBottomWidth: 1,
              padding: 10
            }}>
              {Array.from({ length: Math.ceil(navigate.length / 2) }, (_, i) => (
                <Row key={i} style={{margin: 10}}>
                  {navigate.slice(i * 2, (i + 1) * 2).map(({ name, logo, func }, j) => (
                    <Col key={j} size={50} style={{
                      padding: 10,
                    }}>
                      <TouchableOpacity disabled={name === 'Register' && !available} onPress={func} style={{ alignItems: 'center' }}>
                        <Image source={logo} style={{ width: 90, height: 90, maxWidth: '100%' }} />
                        <Text>{name}</Text>
                      </TouchableOpacity>
                    </Col>
                  ))}
                </Row>
              ))}
            </Grid>
          </ScrollView>
        </Row>
      </Grid>
    </View>
  );
}

const mapStateToProps = state => {
  return {
    account: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => {
      dispatch(logOut());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
