import React from 'react'
import { View, Text } from 'react-native'
import HeaderC from "./../components/Header";
function Info (props) {
    return (
        <View>
            <HeaderC navigation={props.navigation}/>
            <Text>Info</Text>
        </View>
    )
}

export default Info;