import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Alert,
  Button,
  Image,
  ActivityIndicator
} from "react-native";
import DatePicker from "react-native-datepicker";
import ImagePicker from "react-native-image-picker";
import firebase from "react-native-firebase";
import uuid from "uuid/v4";

import { withNavigation } from "react-navigation";
import Colors from "../constants/colors";
import Dimensions from "../constants/dimensions";
import withFireBase from "./withFirebase";

const DocumentDetailsScreen = props => {
  const { updateItem, uploadImageToStorage } = props;

  const state = {
    name: props.navigation.getParam("name"),
    date: props.navigation.getParam("expire"),
    type: props.navigation.getParam("type"),
    ID: props.navigation.getParam("ID"),
    downloadURL: props.navigation.getParam("downloadURL")
  };

  const [autoData, updateAutoData] = useState(state);

  const handleNameChange = name => {
    updateAutoData(prevState => ({ ...prevState, name: name }));
  };

  const handleSubmit = downloadURL => {
    const newAutoData = { ...autoData, downloadURL };
    updateItem({
      name: newAutoData.name,
      expire: newAutoData.date,
      type: newAutoData.type,
      date: newAutoData.date,
      ID: newAutoData.ID,
      downloadURL: newAutoData.downloadURL,
      imageUri: newAutoData
    });

    Alert.alert("Eveniment actualizat cu succes");
  };

  const handleDateChange = date => {
    updateAutoData(prevState => ({ ...prevState, date }));
  };

  const uploadImage = () => {
    const imageUri = autoData && autoData.imageUri;
    const ext = autoData.imageUri && autoData.imageUri.split(".").pop();
    const filename = `${uuid()}.${ext}`; // Generate unique name
    const filePath = `Asigurari/images/${filename}`;

    imageUri && uploadImageToStorage({ filePath, imageUri }, handleSubmit);
  };

  const chooseFile = () => {
    const options = {
      title: "Select Image",
      customButtons: [
        { name: "customOptionKey", title: "Choose Photo from Custom Option" }
      ],
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };
    ImagePicker.showImagePicker(options, response => {
      const source = { uri: response.uri };
      updateAutoData(prevState => ({
        ...prevState,
        imgSource: source,
        imageUri: response.uri
      }));
    });
  };

  const imageSource = autoData.imageUri || autoData.downloadURL;
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{autoData.type}</Text>
      <DatePicker
        style={styles.datePicker}
        date={autoData.date} //initial date from autoData
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
        value={autoData.name}
        onChangeText={name => handleNameChange(name)}
      />
      <TouchableHighlight
        style={styles.button}
        onPress={uploadImage}
        underlayColor="transparent"
      >
        <Text style={styles.buttonText}>Update</Text>
      </TouchableHighlight>

      <Button title="Select Image" onPress={chooseFile} />
      <Image source={{ uri: imageSource }} style={styles.image} />
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
    color: Colors.white,
    alignSelf: "center"
  },
  button: {
    height: Dimensions.primaryHeight,
    flexDirection: "row",
    borderColor: Colors.white,
    backgroundColor: Colors.addItemInputBackgroundColor,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: Dimensions.padding,
    marginTop: Dimensions.padding,
    alignSelf: "stretch",
    justifyContent: "center"
  },
  image: {
    marginTop: 20,
    minWidth: Dimensions.imageWidth,
    height: Dimensions.imageHeight
  }
});

export default withFireBase(withNavigation(DocumentDetailsScreen));
