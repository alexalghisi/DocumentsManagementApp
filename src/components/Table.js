import React, { Component } from 'react';
import {StyleSheet, Text, View, FlatList, Dimensions, Image, TouchableOpacity} from 'react-native';
import boundMethod from 'autobind-decorator';

let width = Dimensions.get('window').width; //full width
let height = Dimensions.get('window').height; //full height

import Colors from '../constants/colors';
const data = [
  { key: '1', type: 'expire', expire: '21-12-2012' },
  { key: '2', type:'rca', expire:' 21-12-2012'},
  { key: '3', type:'rca', expire:' 21-12-2012'},
  { key: '4', type:'rca', expire:' 21-12-2012'},
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

const numColumns = 4;
class Table extends Component {
  constructor(props) {
    super(props);
    this.obj =
    {
      key: 1, type: 'asig', expire: '21-12-2012'
    };

    this.state = {
       obj: this.obj,
    };

  }

  renderItem = ( item ) => {
    //console.log(typeof item);
    console.log("item=>", typeof this.state.obj.type);
    console.log(typeof item.item.type.toString());
    console.log(this.state.obj.type.toString());
    if (item.empty === true && item.item.type.toString() === this.state.obj.type.toString()) {
      return (<View style={[styles.item, styles.itemInvisible]} >
          <Image
          style={{width: width }}
          source={require('../images/mecanic.jpg')}
        /></View>);
    }
    return (
      <View
        style={styles.item}
      >
        <Text style={styles.itemText}>{item.key}</Text>
      </View>
    );
  };

  @boundMethod
  render(){
    console.log(this.state.obj);
    Object.keys(this.state.obj).map((d,key) => console.log(d, key));
    return (
      <View style={styles.viewContainer} >
        <Image
          style={{width: width, height:80 }}
          source={require('../images/mecanic.jpg')}
        />
        <Text style={styles.typeTextStyle}>{this.state.obj.type}</Text>
        <Text style={styles.expireTextStyle}>{this.state.obj.expire}</Text>
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
    fontSize: 20,
    textAlign: 'center',
  },
  expireTextStyle: {
    fontSize: 16,
    textAlign: 'center',
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
