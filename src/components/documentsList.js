import React, { useEffect } from "react";
import { Text, View, FlatList, Image } from "react-native";
import { Dimensions as ScreenDimensions, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import Dimensions from "../constants/dimensions";

import withFireBase from "./withFirebase";

const headerImageUri =
  "https://aa-boschbcs-by.resource.bosch.com/media/_tech/images/backgrounds/visual_workshopfinder.jpg";

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
  const renderItem =  ({ item })  => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }

    return (
      <View style={styles.item}>
        <Image style={styles.item} source={{ uri: item.imageURI }} />
        <Text style={[styles.itemText, styles.typeTextStyle]}>{item.type}</Text>
        <Text style={[styles.itemText, styles.dateTextStyle]}>
          {item.expire}
        </Text>
      </View>
    );
  };

  const { numColumns, items } = props;
  return (
    <View style={styles.viewContainer}>
      <React.Fragment>
        <Image style={styles.headerImage} source={{ uri: headerImageUri }} />
        <FlatList
          data={getDocuments(items, numColumns)}
          style={styles.container}
          renderItem={renderItem}
          numColumns={numColumns}
        />
      </React.Fragment>
    </View>
  );
};

let width = ScreenDimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.containerBackgroundColor
  },
  headerImage: {
    height: 80,
    width: width,
    marginBottom: Dimensions.marginBottom
  },
  viewContainer: {
    backgroundColor: Colors.containerBackgroundColor
  },
  typeTextStyle: {
    fontSize: Dimensions.primaryFontSize,
    fontWeight: "bold",
    textAlign: "center"
  },
  dateTextStyle: {
    fontSize: Dimensions.secondaryFontSize
  },
  item: {
    height: 150,
    width: 100,
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
  itemText: {
    color: Colors.textColor
  }
});

DocumentsList.defaultProps = {
  numColumns: 3
};

export default withFireBase(DocumentsList);
