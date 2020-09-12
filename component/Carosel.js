import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Carousel from 'react-native-snap-carousel'

let _renderItem = ({ item, index }) => {
    return (
        <View style={{
            backgroundColor: 'floralwhite',
            borderRadius: 5,
            height: 250,
            padding: 50,
            marginLeft: 25,
            marginRight: 25,
        }}>
            <Text style={{ fontSize: 30 }}>{item.title}</Text>
            <Text>{item.text}</Text>
        </View>

    )
}

function Carosel({ data, style }) {
    let [currentIndex, setIndex] = useState({
        activeIndex: 0
    })
    return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', ...style }}>
            <Carousel
                layout={"default"}
                // ref={ref => this.carousel = ref}
                data={data}
                sliderWidth={300}
                itemWidth={300}
                renderItem={_renderItem}
                onSnapToItem={index => setIndex({ activeIndex: 0, ...currentIndex })} />
        </View>
    )
}

export default Carosel