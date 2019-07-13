import React from 'react';
import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import Colors from './src/constants/colors'
import HomeScreen from './src/components/HomeScreen';
import WelcomeScreen from './src/components/WelcomeScreen';
import DocumentAuto from './src/screens/DocumentAuto';
import AddItem from './src/components/addItem';

const RootStack = createStackNavigator({
        Home: HomeScreen,
        WelcomeScreen,
        DocumentAuto,
        AddItemScreen:  AddItem ,
    }, {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: Colors.inputBackgorundColor,
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    },
);
const App = createAppContainer(RootStack);
export default App;
