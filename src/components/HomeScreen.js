import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
  Button
} from 'react-native';
import boundMethod from 'autobind-decorator';

import Colors from '../constants/colors';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default class LoginView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email   : '',
      password: '',
      emailCorrect: '',
    };

  }

  @boundMethod
  verify() {
    if(this.validate(this.state.email)){
      Alert.alert("email ok");
    }
    else
      Alert.alert("email wrong format");
  };

  validate = (val) => {
    console.log(val);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(reg.test(val) === false)
    {
      return false;
    }
    else {
      return true;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
              style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={text => this.setState({ email: text })}
           />
          </View>

        <View style={styles.inputContainer}>
          <TextInput
              style={styles.inputs}
              placeholder="Parola"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={text => this.setState({ password: text })}
          />
        </View>
        <Button
          title={"login"}
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={this.verify}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.inputBackgorundColor,
  },
  inputContainer: {
      borderRadius:30,
      borderBottomWidth: 1,
      width: wp('84.5%'),
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      flex:1,
      backgroundColor: Colors.inputBackgorundColor,
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: wp('85%'),
    borderRadius:3,
  },
  loginButton: {
    backgroundColor: Colors.backgroundColor,
  },
  loginText: {
    color: Colors.loginButtonColor
  }
});
