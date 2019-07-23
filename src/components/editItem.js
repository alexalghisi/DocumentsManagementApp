import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Alert
} from "react-native";
import DatePicker from "react-native-datepicker";

import { withNavigation } from "react-navigation";
import Colors from "../constants/colors";
import Dimensions from "../constants/dimensions";
import withFireBase from "./withFirebase";

const EditItem = props => {
  const { updateItem } = props;
  const state = {
    name: "",
    date: "",
    type: props.navigation.getParam("serviceName"),
    imageURI: props.navigation.getParam("imageURI"),
    ID: props.navigation.getParam("ID"),
  };

  const [localState, setMyState] = useState(state);
  const handleNameChange = name => {
    setMyState(prevState => ({ ...prevState, name: name }));
  };

  const handleSubmit = () => {
    updateItem({
      name: localState.name,
      imageURI: localState.imageURI,
      expire: localState.date,
      type: localState.type,
      date: localState.date,
      ID: localState.ID,
    });
    Alert.alert("Eveniment editat cu succes");
  };

  const handleDateChange = date => {
    setMyState(prevState => ({ ...prevState, date }));
  };

  return (
    <View style={styles.main}>
      <Text style={styles.title}>{localState.type}</Text>
      <DatePicker
        style={styles.datePicker}
        date={localState.date} //initial date from localState
        mode="date" //The enum of date, datetime and time
        placeholder="select expire date"
        format="DD-MM-YYYY"
        minDate=""
        maxDate=""
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        onDateChange={date => handleDateChange(date)}
      />
      <TextInput
        style={styles.itemInput}
        onChangeText={name => handleNameChange(name)}
      />
      <TouchableHighlight style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: Dimensions.primarySpacing,
    flexDirection: "column",
    justifyContent: "center"
  },
  datePicker: {
    width: Dimensions.datePickerWidth,
    marginBottom: 20,
    marginLeft: 20
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

export default withFireBase(withNavigation(EditItem));
