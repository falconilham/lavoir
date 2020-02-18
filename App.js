/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
import { DatePicker, Button, Provider } from '@ant-design/react-native';

function App() {
  let [data, setData] = useState({
    nama: {
      pria: '',
      wanita: '',
    },
    weddingDate: '',
    location: '',
    budget: 0,
  });
  let [date, setDate] = useState(new Date());
  console.log(data);
  return (
    <Provider>
      <View style={styles.container}>
        <Text styles={styles.fontLogo}>Lavoir Wedding</Text>
        <View style={styles.form}>
          <Text styles={styles.font}>Form</Text>
          <View style={styles.boxInput}>
            <Text style={styles.font}>Pria</Text>
            <TextInput
              placeholder="Nama Mempelai Pria"
              style={styles.inputText}
              value={data.nama.pria}
              onChangeText={(value) => setData({
                ...data,
                nama: {
                  pria: value,
                  wanita: data.nama.wanita,
                },
              })}
            />
          </View>
          <View style={styles.boxInput}>
            <Text style={styles.font}>Wanita</Text>
            <TextInput
              placeholder="Nama Mempelai Wanita"
              style={styles.inputText}
              value={data.nama.wanita}
              onChangeText={(value) => setData({
                ...data,
                nama: {
                  wanita: value,
                  pria: data.nama.pria,
                },
              })}
            />
          </View>
          <View style={styles.boxInput}>
            <Text style={styles.font}>Tanggal</Text>
            <View style={{ flexDirection: 'row' }}>
              <TextInput
                style={styles.datePlaceholder}
                editable={false}
                value={date.getFullYear().toString()}
              />
              <TextInput
                editable={false}
                style={styles.datePlaceholder}
                value={date.getMonth().toString()}
              />
              <TextInput
                editable={false}
                style={styles.datePlaceholder}
                value={date.getDay().toString()}
              />
              <DatePicker
                value={date}
                mode="date"
                defaultDate={new Date()}
                onChange={(e) => setDate(e)}
                format="DD-MM-YYYY"
              >
                <Button>Pick Date</Button>
              </DatePicker>
            </View>
          </View>
          <View style={styles.boxInput}>
            <Text style={styles.font}>Budget</Text>
            <TextInput
              style={styles.inputText}
              value={data.budget}
              onChangeText={(value) => setData({
                ...data,
                budget: value,
              })}
              keyboardType="numeric"
              maxLength={20}
            />
          </View>
        </View>
      </View>
    </Provider>
  );
}
let styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '100%',
    backgroundColor: 'black',
    borderColor: '#DABB56',
    borderWidth: 1,
  },
  boxInput: {
    width: '80%',
    marginHorizontal: 10,
    color: 'white',
  },
  inputDate: {
    width: '50%',
    marginVertical: '5%',
  },
  form: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '100%',
    maxHeight: '65%',
  },
  inputText: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    color: 'white',
  },
  datePlaceholder: {
    width: '22%',
    height: 50,
    color: 'white',
  },
  font: {
    color: 'white',
  },
  fontLogo: {
    color: '#DABB56',
  },
});

export default App;
