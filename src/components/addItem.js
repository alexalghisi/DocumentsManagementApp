import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  AlertIOS
} from "react-native";
import DatePicker from "react-native-datepicker";

import { withNavigation } from "react-navigation";
import Colors from "../constants/colors";
import Dimensions from "../constants/dimensions";
import { addItem } from "../services/ItemService";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: "15-05-2018",
      type: props.navigation.getParam("serviceName"),
      imageURI: props.navigation.getParam("imageURI")
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      name: e.nativeEvent.text
    });
  }
  handleSubmit() {
    console.log(this.state.date);
    addItem({
      name: this.state.name,
      imageURI: this.state.imageURI,
      expire: this.state.date,
      type: this.state.type
    });
    AlertIOS.alert("Eveniment adaugat cu succes");
  }
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Add {this.state.type}</Text>
        <DatePicker
          style={styles.datePicker}
          date={this.state.date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select expire date"
          format="DD-MM-YYYY"
          minDate="01-01-2019"
          maxDate="01-01-2025"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={date => {
            this.setState({ date: date });
          }}
        />
        <TextInput style={styles.itemInput} onChange={this.handleChange} />
        <TouchableHighlight style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: Dimensions.primarySpacing,
    flexDirection: "column",
    justifyContent: "center"
  },
  datePicker: {
    width: Dimensions.datePickerWidth,
    right: 0,
    left: 0,
    marginBottom: 20,
  },
  title: {
    marginBottom: Dimensions.primarySpacing,
    fontSize: Dimensions.titleFontSize,
    textAlign: "center"
  },
  itemInput: {
    height: Dimensions.primaryHeight,
    padding: 4,
    marginRight: 5,
    fontSize: Dimensions.titleFontSize,
    borderWidth: 1,
    borderColor: Colors.addItemInputBackgroundColor,
    borderRadius: 8,
    color: Colors.addItemInputBackgroundColor
  },
  buttonText: {
    fontSize: 18,
    color: Colors.loginButtonColor,
    alignSelf: "center"
  },
  button: {
    height: Dimensions.primaryHeight,
    flexDirection: "row",
    backgroundColor: Colors.white,
    borderColor: Colors.white,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: Dimensions.padding,
    marginTop: Dimensions.padding,
    alignSelf: "stretch",
    justifyContent: "center"
  }
});

export default withNavigation(AddItem);
