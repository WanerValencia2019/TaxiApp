import React from 'react'
import { View, Text } from 'react-native'

import HeaderC from "./../components/Header";
function Account (props) {
    //console.log(props);
    return (
        <View>
            <HeaderC navigation={props.navigation}/>
            <Text>Account</Text>        
        </View>
    )
}

export default Account;