import React from 'react';
import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';

import Colors from './src/constants/colors'
import HomeScreen from './src/components/HomeScreen';
import DetailsScreen from './src/components/DetailsScreen';
const RootStack = createStackNavigator({
        Home: HomeScreen,
        Details: DetailsScreen,
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
