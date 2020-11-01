/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState, useRef } from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity, Button, Alert } from 'react-native';
import { List } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { connect, useSelector } from 'react-redux';
import buldingSample from '../../image/building.jpg';
import typeVendor from '../../Data/typeVendor.json';
import { addAccount } from '../../reducers/Account';
import { Formik } from 'formik';
import Firebase from '../config';

function Vendor({ navigation, route }) {
  let data = useSelector((state) => state?.state)
  let account = data?.accountInfo?.email
  console.ignoredYellowBox = ['Setting a timer'];
  let nameBuilding = route.params;
  let [listVendor, setListVendor] = useState([]);
  let db = Firebase.firestore();
  const formRef = useRef()
  useEffect(() => {
    let getVendor = db.collection('vendor').get();
    getVendor.then(snapshot => {
      snapshot.docs.forEach(doc => {
        let items = doc.data();
        setListVendor(items?.vendor);
      });
    });
  }, []);
  let submitRegistration = (value) => {
    db.collection('transaction').add(value).then(() => {
      console.log('success')
      formRef.current && formRef.current.handleReset()
      Alert.alert("Status", "Success", [
        {
          text: 'Back To Home',
          onPress: () => navigation.navigate('Menu')
        },
      ])

    }).catch((e) => {
      Alert.alert("Status", "Something Wrong")
      console.log('Something Wrong')
    })
  }
  
  return (
    <Formik
      innerRef={formRef}
      enableReinitialize
      initialValues={{
        building: nameBuilding ?? '',
        Videography: '',
        Photography: '',
        Gift: '',
        WeddingPlanning: '',
        Entertainment: '',
        Bridal: '',
        MUA: '',
        Decoration: '',
        Invitation: '',
      }}
      onSubmit={(value) => {
        let order = data?.order
        let vendor = value
        let result = {
          name: account,
          order,
          vendor
        }
        console.log(result)
        submitRegistration(result)
      }}
    >
      {props => {
        let { setFieldValue, values, dirty, handleSubmit } = props;
        console.log(dirty)
        return (
          <ScrollView
            style={{ backgroundColor: 'black', color: 'white', height: '100%' }}>
            <List.Section
              title="Pick Vendor"
              titleStyle={{ color: 'white', textAlign: 'center' }}>
              {typeVendor.map((item, i) => {
                return (
                  <List.Accordion
                    title={item}
                    titleStyle={{ color: 'white' }}
                    left={() => <AwesomeIcon />}
                    key={i}>
                    {listVendor
                      .filter(
                        itemVendor =>
                          itemVendor.typeService === item &&
                          itemVendor.parentBuilding === nameBuilding,
                      )
                      .map(({ name }, j) => {
                        return (
                          <TouchableOpacity
                            key={j}
                            onPress={() => setFieldValue(item, name)}>
                            <List.Item
                              style={{ display: 'flex' }}
                              right={() => (
                                <Text
                                  style={{
                                    color: 'white',
                                    alignSelf: 'center',
                                    fontWeight: 'bold',
                                    fontSize: 20,
                                  }}>
                                  {name}
                                </Text>
                              )}
                              left={({ style }) => {
                                return (
                                  <View style={{ display: 'flex' }}>
                                    <CheckBox
                                      style={{ width: 20, width: 20 }}
                                      value={values[item] === name}
                                      tintColors={{
                                        true: '#F75B5D',
                                        false: 'white',
                                      }}
                                    />
                                    <Image
                                      source={buldingSample}
                                      style={{ width: 80, height: 80 }}
                                      ref={i}
                                    />
                                  </View>
                                );
                              }}
                            />
                          </TouchableOpacity>
                        );
                      })}
                  </List.Accordion>
                );
              })}
            </List.Section>
            <View>
              <Button
                title="Submit"
                disabled={!dirty}
                onPress={() => handleSubmit()}
              />
            </View>
          </ScrollView>
        );

      }}
    </Formik>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    addAccount: account => {
      dispatch(addAccount(account));
    },
  };
};

export default connect(
  mapDispatchToProps,
)(Vendor);
