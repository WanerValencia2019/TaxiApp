import React from 'react'
import { View, Text } from 'react-native'
import HeaderC from "./../components/Header";
function Travels (props) {
    return (
        <View>
        <HeaderC navigation={props.navigation}/>
            <Text>Travels</Text>
        </View>
    )
}

export default Travels;