import React from "react";
import {StyleSheet, Text, TextInput, View, Button, TouchableOpacity} from "react-native";
import firebase from 'react-native-firebase'
import Colors from "../constants/colors";
import Dimensions from '../constants/dimensions';
import {widthPercentageToDP as wp} from "react-native-responsive-screen";

export default class SignUp extends React.Component {
  state = { email: '', password: '', errorMessage: null };
  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Home'))
      .catch(error => this.setState({errorMessage: error.message}))
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        {this.state.errorMessage && (
          <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
        )}
          <View style={styles.inputContainer}>

        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.inputs}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
          </View>
                <View style={styles.inputContainer}>

        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.inputs}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
                </View>
        <TouchableOpacity
          style={[styles.loginButton, styles.signUp]}
          onPress={this.handleSignUp}
        >
            <Text style={styles.signUp} >
                Sign Up
            </Text>
        </TouchableOpacity>
        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate("Home")}
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
  inputs: {
    height: 45,
    marginLeft: 16,
    flex: 1,
    backgroundColor: Colors.inputBackgroundColor
  },
  inputContainer: {
    borderRadius: 30,
    borderBottomWidth: 1,
    width: wp("84.5%"),
    height: Dimensions.primaryHeight,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  signUp: {
    color: Colors.loginTextColor
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
});
