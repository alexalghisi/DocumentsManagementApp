import React from 'react';
import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import Colors from './src/constants/colors'
import HomeScreen from './src/components/HomeScreen';
import WelcomeScreen from './src/components/WelcomeScreen';
import editItem from './src/components/editItem';

const RootStack = createStackNavigator({
        Home: HomeScreen,
        WelcomeScreen,
        editItemScreen:  editItem ,
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
