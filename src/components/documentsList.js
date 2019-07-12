import React, { useEffect } from "react";
import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import { Dimensions as ScreenDimensions, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import Dimensions from "../constants/dimensions";

import withFireBase from "./withFirebase";

const width = ScreenDimensions.get("window").width;

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

const navigateToScreen = (props, route, item) => {
  props.navigation.navigate(route, {
    type: item.type,
    imageURI: item.imageURI,
    expire: item.expire
  });
};

const DocumentsList = props => {
  // Fetch data from Firebase.
  useEffect(() => {
    props.fetchData();
  }, []);

  // Render function used by FlatList.
  const renderItem = ({ item }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }

    return(
      <View style={styles.item}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigateToScreen(props, "DocumentAuto", item)}
        >
          <Image style={styles.item} source={{ uri: item.imageURI }} />
          <Text style={[styles.itemText, styles.typeTextStyle]}>{item.type}</Text>
          <Text style={[styles.itemText, styles.dateTextStyle]}>
            {item.expire}
          </Text>
        </TouchableOpacity>
      </View>
    )
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
         <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.addItem}
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
      </React.Fragment>
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

export default withFireBase(DocumentsList);
