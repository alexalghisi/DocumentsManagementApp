import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import Table from './Table';

class WelcomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Table/>
        <Text>Welcome</Text>
      </View>
    );
  }
}

export default WelcomeScreen;
