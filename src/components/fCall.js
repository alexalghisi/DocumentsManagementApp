import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
//import { List, ListItem, Text, Card } from 'react-native-elements';

class FCall extends React.Component {
    render() {
      const { navigation } = this.props;
      const matches = JSON.parse(navigation.getParam('matches', 'No matches found'));

      return (
          <ScrollView>


          </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  subContainer: {
    flex: 1,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#CCCCCC',
  }
});

export default FCall;
