import React, { Component } from 'react';
import {StyleSheet, Text, View, FlatList, Dimensions as ScreenDimensions, Image } from 'react-native';
import boundMethod from 'autobind-decorator';
import Dimensions from '../constants/dimensions';

let width = ScreenDimensions.get('window').width;

const rcaImageuri =  'https://gdb.rferl.org/DE8BE3A3-E1D5-4C0F-B9DC-AB4A92A23B06_cx0_cy9_cw0_w1023_r1_s.png';
const headerImageUri =  'https://aa-boschbcs-by.resource.bosch.com/media/_tech/images/backgrounds/visual_workshopfinder.jpg';

import Colors from '../constants/colors';
const data = [
  { key: '1', uri: rcaImageuri, type: 'ITP', expire: '21-12-2012' },
  { key: '2', uri: rcaImageuri, type:'rca', expire:' 21-12-2012'},
  { key: '3', uri: rcaImageuri, type:'rca', expire:' 21-12-2012'},
  { key: '4', uri: rcaImageuri , type:'taxa de drum', expire:' 21-12-2012'},
  { key: '5', uri: rcaImageuri, type:'rca', expire:' 21-12-2012'},
  { key: '6', uri: rcaImageuri , type:'rca', expire:' 21-12-2012'},
  { key: '7', uri: rcaImageuri  , type:'rca', expire:' 21-12-2012'}
];

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);

  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }
  return data;
};

const numColumns = 3;
class DocumentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }

  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View
        style={styles.item}
      >
        <Image
          style={{width: '100%', height: '70%' }}
          source={{ uri: item.uri }}
        />
        <Text style={[styles.itemText, styles.typeTextStyle]}>{item.type}</Text>
        <Text style={[styles.itemText, styles.dateTextStyle]}>{item.expire}</Text>
      </View>
    );
  };
  @boundMethod
  render(){
    return (
      <View style={styles.viewContainer} >
        <Image
          style={styles.headerImage}
          source={{uri: headerImageUri}}
        />
        <FlatList
          data={formatData(data, numColumns)}
          style={styles.container}
          renderItem={this.renderItem}
          numColumns={numColumns}
        />
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.containerBackgroundColor,
  },
  headerImage: {
      height: 80,
      width: width,
      marginBottom: Dimensions.marginBottom,
  },
  viewContainer: {
    backgroundColor: Colors.containerBackgroundColor
  },
  typeTextStyle:
  {
    fontSize: Dimensions.primaryFontSize,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dateTextStyle: {
    fontSize: Dimensions.secondaryFontSize,
  },
  item: {
    backgroundColor: Colors.cardBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    borderRadius: 3,
    height: ScreenDimensions.get('window').width / numColumns,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: Colors.textColor,
  },
});

export default DocumentsList;
