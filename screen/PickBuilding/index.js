/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { List } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import buldingSample from '../../image/building.jpg';
import buildingData from '../../Data/building.json';
import { addAccount } from '../../reducers/Account';

function PickBuilding(props) {
  return (
    <ScrollView
      style={{ backgroundColor: 'black', color: 'white', height: '100%' }}>
      <List.Section title="Pick Building" titleStyle={{ color: 'white' }}>
        {buildingData.map((item, i) => {
          return (
            <List.Accordion
              title={item.name}
              titleStyle={{ color: 'white' }}
              left={() => <AwesomeIcon />}
              key={i}>
              {item.child.map(({ name }, j) => {
                return (
                  <TouchableOpacity
                    key={j}
                    onPress={() => props.navigation.navigate('Vendor', name)}>
                    <List.Item
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
                      left={() => (
                        <Image
                          source={buldingSample}
                          style={{ width: 100, height: 100 }}
                        />
                      )}
                    />
                  </TouchableOpacity>
                );
              })}
            </List.Accordion>
          );
        })}
      </List.Section>
    </ScrollView>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PickBuilding);
