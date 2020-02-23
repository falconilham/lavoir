/* eslint-disable jsx-quotes */
import React from 'react';
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { TextInput, Text, View, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Formik } from 'formik';
import schemaValidation from './utils/schemaValidation';
import Currency from '../helper/Currency';
import styles from './utils/css';

function RegisterForm({ navigation }) {
    return (
        <Formik
            initialValues={
                {
                    email: '',
                    weddingDate: new Date(),
                    budget: '',
                    guest: '',
                }
            }
            isValidating={true}
            validationSchema={schemaValidation}
            onSubmit={(value) => {
                try {
                    console.log(value);
                }
                catch (err) {
                    console.log(err);
                }
            }}
        >
            {((props) => {
                let { errors, touched, handleSubmit, setFieldValue, handleReset, values } = props;
                return (
                    <View style={styles.form}>
                        <View style={styles.boxInput}>
                            <Text style={styles.font}>Email</Text>
                            <View>
                                <TextInput
                                    placeholder="Email"
                                    placeholderTextColor="#a67c00"
                                    style={styles.inputText}
                                    value={values.wanita}
                                    name='wanita'
                                    onChangeText={(value) => setFieldValue('email', value)}
                                />
                                <Text style={styles.errors}>{errors.email && touched.email && errors.email}</Text>
                            </View>
                        </View>
                        <View style={styles.boxInputDate}>
                            <Text style={styles.font}>Date</Text>
                            <DatePicker
                                style={styles.datePicker}
                                date={values.weddingDate}
                                onDateChange={(value) => setFieldValue('weddingDate', value)}
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
                                    name='budget'
                                    placeholderTextColor="#a67c00"
                                    placeholder="Budget"
                                    onChangeText={(value) => setFieldValue('budget', value)}
                                    keyboardType="numeric"
                                    maxLength={20}
                                />
                                <Text style={styles.errors}>{errors.budget && touched.budget && errors.budget || touched.budget}</Text>
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
                                    name='guest'
                                    onChangeText={(value) => setFieldValue('guest', value)}
                                    keyboardType="numeric"
                                    maxLength={20}
                                />
                                <Text style={styles.errors}>{errors.guest && touched.guest && errors.guest}</Text>
                            </View>
                        </View>
                        <View style={styles.boxButton}>
                            <TouchableOpacity onPress={handleReset} style={styles.buttonReset}>
                                <Text style={styles.font}>Reset</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                                <Text style={styles.font}>Next ></Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            })}
        </Formik>
    );
}

export default RegisterForm;
