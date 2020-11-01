import React from 'react';
import { TextInput, Text, View, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Formik } from 'formik';
// import schemaValidation from './utils/schemaValidation';
// import Currency from '../helper/Currency';
import { connect } from 'react-redux';
import styles from '../utils/css';
import { addOrder } from '../../reducers/Account';

function RegisterForm({ navigation, addOrder, ...props }) {
  return (
    <Formik
      initialValues={{
        bride: {
          men: '',
          women: ''
        },
        weddingDate: new Date(),
        budget: '',
        guest: '',
      }}
      isValidating={false}
      // validationSchema={schemaValidation}
      onSubmit={value => {
        addOrder(value);
        navigation.navigate('Building');
      }}>
      {formik => {
        let {
          errors,
          touched,
          handleSubmit,
          setFieldValue,
          handleReset,
          values,
        } = formik;
        return (
          <View style={styles.form}>
            <View style={styles.boxInput}>
              <Text style={styles.font}>Bride Men</Text>
              <View>
                <TextInput
                  placeholder="Bride Men"
                  placeholderTextColor="#a67c00"
                  style={styles.inputText}
                  value={values.bride.men}
                  onChangeText={value => setFieldValue('bride.men', value)}
                />
              </View>
            </View>
            <View style={styles.boxInput}>
              <Text style={styles.font}>Bride Women</Text>
              <View>
                <TextInput
                  placeholder="Bride Women"
                  placeholderTextColor="#a67c00"
                  style={styles.inputText}
                  value={values.bride.women}
                  onChangeText={value => setFieldValue('bride.women', value)}
                />
              </View>
            </View>
            <View style={styles.boxInputDate}>
              <Text style={styles.font}>Date</Text>
              <DatePicker
                style={styles.datePicker}
                date={values.weddingDate}
                onDateChange={value => setFieldValue('weddingDate', value)}
                format="DD-MM-YYYY"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                  },
                  dateInput: {
                    position: 'absolute',
                    right: 0,
                    width: '70%',
                    borderWidth: 0,
                  },
                  dateText: {
                    color: 'white',
                  },
                }}
              />
            </View>
            <View style={styles.boxInput}>
              <Text style={styles.font}>Budget</Text>
              <View>
                <TextInput
                  style={styles.inputText}
                  value={values.budget}
                  name="budget"
                  placeholderTextColor="#a67c00"
                  placeholder="Budget"
                  onChangeText={value => setFieldValue('budget', value)}
                  keyboardType="numeric"
                  maxLength={20}
                />
                <Text style={styles.errors}>
                  {(errors.budget && touched.budget && errors.budget) ||
                    touched.budget}
                </Text>
              </View>
            </View>
            <View style={styles.boxInput}>
              <View>
                <Text style={styles.font}>Guest</Text>
              </View>
              <View>
                <TextInput
                  style={styles.inputText}
                  value={values.guest}
                  placeholderTextColor="#a67c00"
                  placeholder="Total Your Guest"
                  name="guest"
                  onChangeText={value => setFieldValue('guest', value)}
                  keyboardType="numeric"
                  maxLength={20}
                />
                <Text style={styles.errors}>
                  {errors.guest && touched.guest && errors.guest}
                </Text>
              </View>
            </View>
            <View style={styles.boxButton}>
              <TouchableOpacity
                onPress={handleReset}
                style={styles.buttonReset}>
                <Text style={styles.font}>Reset</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleSubmit()}>
                <Text style={styles.font}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      }}
    </Formik>
  );
}

const mapStateToProps = state => {
  return {
    account: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addOrder: order => {
      dispatch(addOrder(order));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterForm);
