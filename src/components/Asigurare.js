import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  AlertIOS,
  Picker
} from 'react-native';
import { db } from '../config';

let addItem = item => {
  db.ref('/items').push({
    name: item
  });
};

export default class Asigurare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nume: '', CNP: '', NR_MASINA: '', perioada: '', phone_number: '',
    };
    this.posibilites = [{label: '3 luni', value: '3 luni'} , {label: '6luni', value: '6 luni'}, {label: '1  an', value: '1  an'}];
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  };

  addAsig = () =>
  {
    AlertIOS.alert('Item saved successfully');

    console.log(this.state);
    addItem(this.state);

    const { NR_MASINA,CNP,nume, phone_number,parioada } = this.state;
    try {
    } catch (err) {
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Nume'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('nume', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='CNP'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('CNP', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Numar de inmatriculare'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('NR_MASINA', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Numar de telefon'
          autoCapitalize="none"
          maxLength={10}
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('phone_number', val)}
        />

        <Picker
          style={{width: 100}}
          selectedValue={this.posibilites}
          onValueChange={(val) => this.setState({perioada: val})}>
          {Object.keys(this.posibilites).map((key) => {
            return (<Picker.Item label={this.posibilites[key]} value={key} key={key}/>) //if you have a bunch of keys value pair
          })}
        </Picker>

        <Button
          title='Adauga'
          onPress={this.addAsig}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
