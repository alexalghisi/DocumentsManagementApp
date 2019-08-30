import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native";
import boundMethod from "autobind-decorator";

import firebase from "react-native-firebase";
import Colors from "../constants/colors";
import Dimensions from '../constants/dimensions';
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export default class LoginView extends Component {
  static navigationOptions = {
    title: "Home"
  };

  constructor(props) {
    super(props);
    this.state = { email: "", password: "", errorMessage: null };
  }

  @boundMethod
  handleLogin() {
    console.log("STATE=>", this.state);
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate("WelcomeScreen"))
      .catch(error => this.setState({ errorMessage: error.message }));
  }

  validate = val => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return reg.test(val);
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.errorMessage && (
          <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
        )}

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            returnKeyType="go"
            secureTextEntry={true}
            password={true}
            placeholder="Password"
            onChangeText={password => this.setState({ password })}
          />
        </View>

        <TouchableOpacity
          style={[styles.loginButton, styles.loginText]}
          onPress={this.handleLogin}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <Button
          title="Don't have an account?  Sign Up"
          onPress={() => this.props.navigation.navigate("SignUp")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.inputBackgroundColor
  },
  inputContainer: {
    borderRadius: 30,
    borderBottomWidth: 1,
    width: wp("84.5%"),
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    flex: 1,
    backgroundColor: Colors.inputBackgroundColor
  },
  buttonContainer: {
    height: Dimensions.primaryHeight,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: wp("85%"),
    borderRadius: 3
  },
  loginButton: {
    backgroundColor: Colors.loginButtonBackgroundColor,
    color: Colors.loginButtonBackgroundColor,
    marginBottom: 20,
    borderRadius: 3,
    width: wp("70%"),
    alignItems: "center",
    padding: 5
  },
  loginText: {
    color: Colors.loginTextColor
  }
});
