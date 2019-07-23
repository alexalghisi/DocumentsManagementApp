import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import Colors from "../constants/colors";
import Dimensions from "../constants/dimensions";

const editItem = props => {
  const type = props.navigation.getParam("type");
  const imageURI = props.navigation.getParam("imageURI");
  const ID = props.navigation.getParam("ID");
  props.navigation.navigate("editItemScreen", {
    serviceName: type,
    imageURI,
    ID,
  });
};

const DocumentAuto = props => {
  const type = props.navigation.getParam("type");
  const expire = props.navigation.getParam("expire");
  const imageURI = props.navigation.getParam("imageURI");
  return (
    <View style={styles.container}>
      <Image style={styles.cardStyle} source={{ uri: imageURI }} />
      <Text style={styles.typeTextStyle}>{type}</Text>
      <Text style={[styles.itemText, styles.dateTextStyle]}>{expire}</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => editItem(props)}
        style={styles.TouchableOpacityStyle}
      >
        <Image
          source={{
            uri:
              "https://cdn0.iconfinder.com/data/icons/opensourceicons/32/edit.png"
          }}
          style={styles.FloatingButtonStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    height: Dimensions.cardHeight,
    width: Dimensions.cardWidth,
    backgroundColor: Colors.cardBackgroundColor,
    resizeMode: "contain",
    flexDirection: "row",
    marginBottom: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  typeTextStyle: {
    fontSize: Dimensions.primaryFontSize,
    fontWeight: "bold",
    textAlign: "center"
  },
  dateTextStyle: {
    fontSize: Dimensions.secondaryFontSize
  },
  textStyle: {
    color: Colors.blue
  },
  TouchableOpacityStyle: {
    position: "absolute",
    width: Dimensions.floatingButtonWidth,
    height: Dimensions.primaryHeight,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30
  },
  FloatingButtonStyle: {
    resizeMode: "contain",
    width: Dimensions.floatingButtonWidth,
    height: Dimensions.floatingButtonHeight
  }
});
export default withNavigation(DocumentAuto);
