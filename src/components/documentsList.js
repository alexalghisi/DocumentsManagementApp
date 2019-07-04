import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  Image
} from "react-native";
import styles from '../styles/documentListStyles';
import withFireBase from "./withFirebase";

const headerImageUri =
  "https://aa-boschbcs-by.resource.bosch.com/media/_tech/images/backgrounds/visual_workshopfinder.jpg";

const getDocuments = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  // Add the mandatory key for each item
  // displayed in the FlatList.
  data.map((item, index) => item.key=index);

  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }
  return data;
};



const DocumentsList = (props) => {
  // Fetch data from Firebase.
  React.useEffect(() => {
    props.getFirebaseData();
  });

  // Render function used by FlatList.
  const renderItem = item => {
    item = item.item;
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }

    return (
      <View style={styles.item}>
        <Image
          style={{ width: "100%", height: "70%" }}
          source={{ uri: item.imageURI }}
        />
        <Text style={[styles.itemText, styles.typeTextStyle]}>{item.type}</Text>
        <Text style={[styles.itemText, styles.dateTextStyle]}>
          {item.expire}
        </Text>
      </View>
    );
  };


  const { numColumns } = props;
  const { items } = props;

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

DocumentsList.defaultProps = {
  numColumns: 3
};

export default withFireBase(DocumentsList);
