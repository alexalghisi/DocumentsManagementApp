import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import Table from './Table';

class WelcomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return (
      <View style={styles.container} >
        <Table/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    margin: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 40,
    alignItems: 'center',
  }
});

export default WelcomeScreen;
