import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import DocumentsList from "./documentsList";
import Dimensions from "../constants/dimensions";

class WelcomeScreen extends Component {
  static navigationOptions = {
    title: "Welcome"
  };

  render() {
    return (
      <View style={styles.container}>
        <DocumentsList {...this.props} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: Dimensions.headerTopMargin,
    margin: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: Dimensions.padding,
    marginBottom: Dimensions.marginBottom,
    alignItems: "center"
  }
});

export default WelcomeScreen;
