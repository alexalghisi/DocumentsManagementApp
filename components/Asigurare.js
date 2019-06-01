// SignUp.js
import { AsyncStorage } from 'react-native';
import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native'

const storeItem = async (key: $Values<typeof storageKeys>, value: any) => {
  try {
    await AsyncStorage.setItem(key, typeof value !== 'string' ? JSON.stringify(value) : value);
     Alert.alert(

      'Masina adaugata',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  } catch (error) {

  }
};

export default class Asigurare extends React.Component {
  state = {
    username: '', nume: '', CNP: '', NR_MASINA: ''
  };
  onChangeText = (key, val) => {
      storeItem("masina", this.state);
      Alert.alert(
          'Masina adaugata');
  };
  adauga = async () => {
    const { username, password, email, phone_number } = this.state;
    try {

      // here place your signup logic
      console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
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
          placeholder='Numare de telefon'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('phone_number', val)}
        />
        <Button
          title='Adauga'
          onPress={this.adsuga}
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
