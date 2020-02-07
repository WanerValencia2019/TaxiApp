import React from 'react'
import { View, Text } from 'react-native'
import { Button } from "react-native-elements";
import UserInfo from "./../components/userInfo";

import HeaderC from "./../components/Header";
function Account (props) {
    //console.log(props);
    return (
        <View>
            <HeaderC navigation={props.navigation}/>
              <UserInfo/>    
              <Button title={"Cerrar Sesión"} buttonStyle={{backgroundColor:"rgba(255,252,255,.1)"}} containerStyle={{backgroundColor:"rgba(000,000,000,1)"}}/>
        </View>
    )
}

export default Account;