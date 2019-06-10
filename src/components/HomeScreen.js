import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import boundMethod from 'autobind-decorator';

import Colors from '../constants/colors';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default class LoginView extends Component {
  static navigationOptions = {
    title: 'Home',
  };

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
    if(this.state.password.length<3) {
      Alert.alert("password too short");
      return;
    }

    if(this.validate(this.state.email)) {
      this.props.navigation.navigate('WelcomeScreen');
    }
    else {
      Alert.alert("email wrong format")
    }

  };

  validate = (val) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(val);
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
              onChangeText={email => this.setState({ email })}
           />
          </View>

        <View style={styles.inputContainer}>
         <TextInput
          style={styles.inputs}
          returnKeyType='go'
          secureTextEntry={true}
          password={true}
          placeholder="Password"
          onChangeText={(password) =>  this.setState({ password })}/>
        </View>

       <TouchableOpacity
         style={[styles.loginButton,styles.loginText]}
         onPress={this.verify}
       >
         <Text style={styles.loginText}>Login</Text>
       </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.inputBackgroundColor,
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
      backgroundColor: Colors.inputBackgroundColor,
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
    backgroundColor: Colors.loginButtonBackgroundColor,
    color: Colors.loginButtonBackgroundColor,
    borderRadius: 3,
    width: wp('70%'),
    alignItems: 'center',
    padding: 5,
  },
  loginText: {
    color: Colors.loginTextColor,
  }
});
