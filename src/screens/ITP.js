import React from 'react';
import { View , Text} from 'react-native';

const ITP  = props =>
{
    console.log("ITP=>",props);
    return <View>
      <Text style={{color:'blue'}}>
        {props.type}
        TEST
      </Text>
    </View>
};

 export default ITP;
