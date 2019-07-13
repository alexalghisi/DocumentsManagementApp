import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import Colors from "../constants/colors";
import Dimensions from "../constants/dimensions";

const addItem = (props) => {
  const type = props.navigation.getParam("type");
  const imageURI = props.navigation.getParam("imageURI");

  props.navigation.navigate("AddItemScreen", {
    serviceName: type,
    imageURI,
  });
};

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
         <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => addItem(props)}
          style={styles.TouchableOpacityStyle}>
          <Image
            //We are making FAB using TouchableOpacity with an image
            //We are using online image here
             source={{
uri:'https://aboutreact.com/wp-content/uploads/2018/08/bc72de57b000a7037294b53d34c2cbd1.png',
            }}
            //You can use you project image Example below
            //source={require('./images/float-add-icon.png')}
            style={styles.FloatingButtonStyle}
          />
        </TouchableOpacity>
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
  },
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },

  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  }
});
export default withNavigation(DocumentAuto);
