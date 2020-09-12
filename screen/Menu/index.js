import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import styles from '../utils/css'
import { Card } from 'react-native-paper'
import { Grid, Col, Row } from 'react-native-easy-grid'
import getRandomColor from '../helper/randomColor'
import Carosel from '../../component/Carosel'


let promo = [
    {
        title: 'bebas',
        text: 'beli satu gratis satu'
    },
    {
        title: 'bebas1',
        text: 'beli satu gratis satu'
    },
]

let placeholder = 'https://picsum.photos/400/200?random'

function Menu() {
    let { Cover } = Card
    return (
        <View style={styles.body}>
            <Text>Menu</Text>
            <Grid>
                <Row size={35} style={{ backgroundColor: getRandomColor(), alignItems: 'center' }}>
                    <Carosel data={promo} style={{ height: "80%" }} />
                </Row>
                <Row size={65} style={{ backgroundColor: getRandomColor() }}>
                    <ScrollView>
                        <Col size={35} style={{ padding: 10 }}>
                            <TouchableOpacity>
                                <Card>
                                    <Cover source={{
                                        uri: placeholder
                                    }} />
                                </Card>
                            </TouchableOpacity>
                        </Col>
                        <Col size={35} style={{ padding: 10 }}>
                            <TouchableOpacity>
                                <Card>
                                    <Cover source={{
                                        uri: placeholder
                                    }} />
                                </Card>
                            </TouchableOpacity>
                        </Col>
                    </ScrollView>
                </Row>
            </Grid>
        </View>
    )
}

export default Menu