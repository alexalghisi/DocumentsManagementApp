import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { withNavigation } from 'react-navigation';
import Colors from "../constants/colors";
import Dimensions from "../constants/dimensions";

const DocumentAuto  = props =>
{
  const type = props.navigation.getParam("type");
  const expire = props.navigation.getParam("expire");
  const imageURI = props.navigation.getParam("imageURI");
  return <View style={styles.container}>
      <Image style={styles.cardStyle} source={{ uri: imageURI }} />
      <Text style={styles.typeTextStyle}>
           {type}
       </Text>
      <Text style={[styles.itemText, styles.dateTextStyle]}>
        {expire}
      </Text>
   </View>
};

const styles = StyleSheet.create({
  cardStyle: {
    height: Dimensions.cardHeight,
    width: Dimensions.cardWidth,
    backgroundColor: Colors.cardBackgroundColor,
    resizeMode: 'contain',
    flexDirection: "row"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    color: Colors.blue,
  }
});
export default withNavigation(DocumentAuto);
