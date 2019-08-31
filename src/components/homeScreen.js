import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native";

import Colors from "../constants/colors";
import Dimensions from "../constants/dimensions";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import withFireBase from "./withFirebase";
import { withNavigation } from "react-navigation";

const HomeScreen = props => {
  const navigationOptions = {
    title: "Home"
  };

  const state = { email: "", password: "", errorMessage: null };
  const [accountDetails, updateAccountDetails] = useState(state);

  const { signIn } = props;
  const handleLogin = () => {
    const { email, password } = state;
    signIn({
      email: accountDetails.email,
      password: accountDetails.password
    })
      .then(() => props.navigation.navigate("WelcomeScreen"))
      .catch(error => updaterErrorMessage(error.message));
  };

  const updaterErrorMessage = errorMessage => {
    updateAccountDetails(prevState => ({
      ...prevState,
      errorMessage: errorMessage
    }));
  };

  const handlePasswordChange = password => {
    updateAccountDetails(prevState => ({ ...prevState, password: password }));
  };

  const handleEmailChange = email => {
    updateAccountDetails(prevState => ({ ...prevState, email: email }));
  };

  return (
    <View style={styles.container}>
      {accountDetails.errorMessage && (
        <Text style={{ color: "red" }}>{accountDetails.errorMessage}</Text>
      )}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          onChangeText={email => handleEmailChange(email)}
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          returnKeyType="go"
          secureTextEntry={true}
          password={true}
          placeholder="Password"
          autoCapitalize="none"
          onChangeText={password => handlePasswordChange(password)}
        />
      </View>

      <TouchableOpacity
        style={[styles.loginButton, styles.loginText]}
        onPress={handleLogin}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <Button
        title="Don't have an account?  Sign Up"
        onPress={() => props.navigation.navigate("SignUp")}
      />
    </View>
  );
};

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
    height: Dimensions.primaryHeight,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  inputs: {
    height: Dimensions.primaryHeight,
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

export default withFireBase(withNavigation(HomeScreen));
