import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import SignUp from './signUp';

class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Details',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <SignUp />
      </View>
    );
  }
}

export default DetailsScreen;
