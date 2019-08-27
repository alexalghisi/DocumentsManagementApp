import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Dimensions as ScreenDimensions, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import Dimensions from "../constants/dimensions";

const width = ScreenDimensions.get("window").width;

const navigateToScreen = (props, route, item) => {
  props.navigation.navigate(route, {
    type: item.type,
    imageURI: item.imageURI,
    expire: item.expire,
    ID: item.id,
    name: item.name,
    downloadURL: item.downloadURL
  });
};

const DocumentAuto = props => {
  const { item } = props;

  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigateToScreen(props, "DocumentDetailsScreen", item)}
      >
        <Image style={styles.card} source={{ uri: (item.downloadURL || item.imageURI) }} />
        <Text style={[styles.itemText, styles.typeTextStyle]}>{item.type}</Text>
        <Text style={[styles.itemText, styles.dateTextStyle]}>
          {item.expire}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.containerBackgroundColor
  },
  headerImage: {
    height: Dimensions.headerImageHeight,
    width: width,
    paddingBottom: Dimensions.primarySpacing
  },
  typeTextStyle: {
    fontSize: Dimensions.primaryFontSize,
    fontWeight: "bold",
    textAlign: "center"
  },
  dateTextStyle: {
    fontSize: Dimensions.secondaryFontSize
  },
  itemText: {
    color: Colors.textColor
  },
  card: {
    height: Dimensions.cardHeight,
    width: Dimensions.cardWidth,
    backgroundColor: Colors.cardBackgroundColor,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    margin: 1,
    borderRadius: 3
  }
});

export default DocumentAuto;
