import React, { Component } from 'react';
import { View } from 'react-native';

class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Details',
  };
  render() {
    return (
      <React.Fragment>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        </View>
      </React.Fragment>
    );
  }
}

export default DetailsScreen;
