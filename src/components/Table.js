import React, { Component } from 'react';
import {StyleSheet, Text, View, FlatList, Dimensions, Image, TouchableOpacity} from 'react-native';
import boundMethod from 'autobind-decorator';

let width = Dimensions.get('window').width; //full width
let height = Dimensions.get('window').height; //full height

import Colors from '../constants/colors';
const data = [
  { key: '1', type: 'ITP', expire: '21-12-2012' },
  { key: '2', type:'rca', expire:' 21-12-2012'},
  { key: '3', type:'rca', expire:' 21-12-2012'},
  { key: '4', type:'taxa de drum', expire:' 21-12-2012'},
  { key: '5', type:'rca', expire:' 21-12-2012'},
  { key: '6', type:'rca', expire:' 21-12-2012'},
  { key: '7', type:'rca', expire:' 21-12-2012'},
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
class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:data,
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
          source={require('../images/mechanic.jpg')}
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
          style={{width: width, height:80 }}
          source={require('../images/mechanic.jpg')}
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
  viewContainer: {
    backgroundColor: Colors.containerBackgroundColor
  },
  typeTextStyle:
  {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dateTextStyle: {
    fontSize: 16,
  },
  item: {
    backgroundColor: Colors.cardBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    borderRadius: 3,
    height: Dimensions.get('window').width / numColumns,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: Colors.textColor,
  },
});

export default Table;
