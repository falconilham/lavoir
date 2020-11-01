import React, {useEffect, useState} from 'react'
import {View, Text, ScrollView, TouchableOpacity} from 'react-native'
import {useSelector} from 'react-redux'
import Firebase from '../config';
import { Avatar, Card, List } from 'react-native-paper';
import styles from '../utils/css'

let typeList = [
    {
        name: "Accepted",
        color: 'green'
    },
    {
        name: "Pending",
        color: 'yellow'
    },
    {
        name: 'Declined',
        color: 'red'
    }
]

function Transaction(){
    let userData = useSelector((state) => state?.state?.accountInfo)
    let [data, setData] = useState([])
    let db = Firebase.firestore();
    useEffect(() => {
        let getData = db.collection("transaction").where("name", "==", userData?.email).get()
        if(getData.empty){
            console.log('kosong')
        }else{
            getData.then(snapshot => {
                let currentData = [...data] 
                snapshot.docs.forEach(doc => {
                    let {id} = doc
                    let items = {...doc.data(), id};
                    currentData.push(items)
                });
                setData(currentData)
        })}
    }, [userData?.email])
    console.log(data)
    return(
        <ScrollView
            style={{ backgroundColor: 'black', color: 'white', height: '100%' }}
        >
            <List.Section title="List Transaction" titleStyle={{ color: 'white' }}>
                {typeList.map(({name, color}, i) => (
                    <List.Accordion
                        title={name}
                        titleStyle={{ color: color, alignItems: 'center', display: 'flex' }}
                        key={i}
                    >
                    {(data.filter(({status}) => status === name.toLowerCase()) || []).map(({ name, id, order, ...rest }) => {
                        let {men, women} = order?.bride
                        return (
                            <TouchableOpacity key={id} style={styles.card}>
                                <View>
                                    <Text style={{color: 'white'}}>
                                        {men}&{women}
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{color: 'white'}}>
                                        {name}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </List.Accordion>
                ))}
                
            </List.Section>
        </ScrollView>
    )
};

export default Transaction