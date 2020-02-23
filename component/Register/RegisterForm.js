/* eslint-disable jsx-quotes */
import React from 'react';
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { TextInput, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { Formik } from 'formik';
import schemaValidation from './utils/schemaValidation';
import Currency from '../helper/Currency';

function RegisterForm() {
    return (
        <Formik
            initialValues={
                {
                    pria: '',
                    wanita: '',
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
                            <Text style={styles.font}>Pria</Text>
                            <View>
                                <TextInput
                                    placeholder="Nama Mempelai Pria"
                                    placeholderTextColor="#a67c00"
                                    style={styles.inputText}
                                    value={values.pria}
                                    name='pria'
                                    onChangeText={(value) => setFieldValue('pria', value)}
                                />
                                <Text style={styles.errors}>{errors.pria && touched.pria && errors.pria}</Text>
                            </View>
                        </View>
                        <View style={styles.boxInput}>
                            <Text style={styles.font}>Wanita</Text>
                            <View>
                                <TextInput
                                    placeholder="Nama Mempelai Wanita"
                                    placeholderTextColor="#a67c00"
                                    style={styles.inputText}
                                    value={values.wanita}
                                    name='wanita'
                                    onChangeText={(value) => setFieldValue('wanita', value)}
                                />
                                <Text style={styles.errors}>{errors.wanita && touched.wanita && errors.wanita}</Text>
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
                                    value={Currency(values.budget, 'RP')}
                                    name='budget'
                                    placeholderTextColor="#a67c00"
                                    placeholder="Budget"
                                    onChangeText={(value) => setFieldValue('budget', value)}
                                    keyboardType="numeric"
                                    maxLength={20}
                                />
                                <Text style={styles.budget}>{errors.budget && touched.budget && errors.budget}</Text>
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
                            <TouchableOpacity onPress={handleSubmit}>
                                <Text style={styles.font}>Next ></Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            })}
        </Formik>
    );
}

let styles = StyleSheet.create({
    buttonReset: {
        backgroundColor: '#a67c00',
        padding: 10,
        width: 100,
        borderRadius: 30,
    },
    buttonSubmit: {
        backgroundColor: '#a67c00',
        padding: 10,
        width: 100,
        borderRadius: 30,
    },
    boxButton: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        color: 'white',
        width: '80%',
        marginVertical: 30,
    },
    boxInput: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        color: 'white',
        width: '80%',
        marginBottom: 10,
    },
    boxInputDate: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '80%',
        marginHorizontal: 10,
        color: 'white',
        borderWidth: 1,
        marginVertical: 10,
    },
    form: {
        alignItems: 'center',
        flexDirection: 'column',
    },
    datePicker: {
        display: 'flex',
        width: '64%',
        borderWidth: 1,
    },
    button: {
        color: 'white',
        backgroundColor: '#DABB56',
        padding: 10,
        borderRadius: 10,
    },
    inputText: {
        borderBottomColor: '#DABB56',
        borderBottomWidth: 1,
        color: 'white',
        width: 200,
        justifyContent: 'space-between',
    },
    font: {
        color: 'white',
        textAlign: 'center',
    },
    fontLabel: {
        color: 'white',
    },
    fontLogo: {
        color: '#DABB56',
        textAlign: 'center',
    },
    errors: {
        color: '#ffdc73',
    },
});

export default RegisterForm;
