import React, { useEffect } from "react";
import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import { Dimensions as ScreenDimensions, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import Dimensions from "../constants/dimensions";

import withFireBase from "./withFirebase";
import DocumentAuto from "./DocumentAuto";

const width = ScreenDimensions.get("window").width;

const headerImageUri =
  "https://vignette.wikia.nocookie.net/mysterymanoronfacebook/images/d/d2/Garage.jpg/revision/latest?cb=20130210222723";

const getDocuments = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  // Add the mandatory key for each item
  // displayed in the FlatList.
  data.map((item, index) => (item.key = index));

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  if (numberOfElementsLastRow) {
    while (numberOfElementsLastRow !== numColumns) {
      data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      ++numberOfElementsLastRow;
    }
  }
  return data;
};

const DocumentsList = props => {
  // Fetch data from Firebase.
  useEffect(() => {
    props.fetchData();
  }, []);

  // Render function used by FlatList.
  const renderItem = ({ item }) => {
    if (item.empty === true) {
      return <View style={[styles.card, styles.itemInvisible]} />;
    }

    return <DocumentAuto {...props} item={item} />;
  };

  const { numColumns, items } = props;
  return (
    <View style={styles.viewContainer}>
      <Image style={styles.headerImage} source={{ uri: headerImageUri }} />
      <Text style={styles.titleText}>Evenimente</Text>
      <FlatList
        data={getDocuments(items, numColumns)}
        style={styles.container}
        renderItem={renderItem}
        numColumns={numColumns}
      />
    </View>
  );
};

DocumentsList.defaultProps = {
  numColumns: 3
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
  view: {
      backgroundColor: Colors.containerBackgroundColor,
  },
  typeTextStyle: {
    fontSize: Dimensions.primaryFontSize,
    fontWeight: "bold",
    textAlign: "center"
  },
  dateTextStyle: {
    fontSize: Dimensions.secondaryFontSize
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
  },
  itemInvisible: {
    backgroundColor: "transparent"
  },
  titleText: {
    fontSize: Dimensions.titleFontSize,
    color: Colors.textColor,
    fontWeight: "bold",
    padding: Dimensions.padding
  }
});

export default withFireBase(DocumentsList);
