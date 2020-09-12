/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { List } from 'react-native-paper';
import { Checkbox } from '@react-native-community/checkbox'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import buldingSample from '../../image/building.jpg';
import vendor from '../../Data/vendor.json'
import typeVendor from '../../Data/typeVendor.json'
import { addAccount } from '../../reducers/Account';
import { Formik } from 'formik'


function Vendor(props) {
    let nameBuilding = props.route.params
    return (
        <Formik
            enableReinitialize
            initialValues={{
                Videography: '',
                Photography: '',
                Gift: '',
                WeddingPlanning: '',
                Entertainment: '',
                Bridal: '',
                MUA: '',
                Decoration: '',
                Invitation: ''
            }}
        >
            {(props) => {
                let { setFieldValue, values } = props
                return (
                    <ScrollView style={{ backgroundColor: 'black', color: 'white', height: '100%' }}>
                        <List.Section title="Pick Vendor" titleStyle={{ color: 'white', textAlign: 'center' }}>
                            {typeVendor.map((item, i) => {
                                return (
                                    <List.Accordion
                                        title={item}
                                        titleStyle={{ color: 'white' }}
                                        left={() => <AwesomeIcon />}
                                        key={i}
                                    >
                                        {vendor.filter(itemVendor => itemVendor.typeService === item && itemVendor.parentBuilding === nameBuilding).map(({ name }, j) => {
                                            return (
                                                <TouchableOpacity key={j} onPress={() => console.log(name)}>
                                                    <List.Item
                                                        right={() => <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold', fontSize: 20 }}>{name}</Text>}
                                                        left={() => {
                                                            return (
                                                                <View>
                                                                    <Checkbox
                                                                        value={values.item === item}
                                                                        onValueChange={() => setFieldValue('answer', item)}
                                                                        tintColors={{ true: '#F75B5D', false: 'white' }}
                                                                    />
                                                                    <Image source={buldingSample} style={{ width: 100, height: 100 }} />
                                                                </View>
                                                            )
                                                        }}
                                                    />
                                                </TouchableOpacity>
                                            );
                                        })}
                                    </List.Accordion>
                                );
                            })}

                        </List.Section>
                    </ScrollView>
                )
            }}
        </Formik>
    );
}

const mapStateToProps = state => {
    return {
        account: state.account,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addAccount: account => {
            dispatch(addAccount(account));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vendor);
