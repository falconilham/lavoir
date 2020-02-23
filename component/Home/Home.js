/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image, Text } from 'react-native';
import { connect } from 'react-redux';

function Home(props) {
    console.log(props)
    return (
        <View>
            <Text>ok</Text>
        </View>
    );
}

const mapStateToProps = state => {
    return {
        account: state,
    };
};

export default connect(mapStateToProps)(Home);
