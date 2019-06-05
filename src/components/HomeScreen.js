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
import { boundMethod } from 'autobind-decorator';

import Colors from '../constants/colors';
import {widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default class LoginView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email   : '',
      password: '',
    };
  }

  @boundMethod
  verify() {
    if(this.validate(this.state.email))
      Alert.alert("email ok");
    else
      Alert.alert("email wrong format");
  };


  validate = (val) => {
    console.log(val);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(reg.test(val) === false)
    {
      console.log("Email is Not Correct");
      this.setState({email:val});
      return false;
    }
    else {
      this.setState({email:val});
      console.log("Email is Correct");
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
          onPress={this.verify}
        />
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} >
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} >
            <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} >
            <Text>Register</Text>
        </TouchableHighlight>
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
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width: wp('80%'),
    borderRadius:3,
  },
  loginButton: {
    backgroundColor: Colors.backgroundColor,
  },
  loginText: {
    color: Colors.loginButtonColor
  }
});
