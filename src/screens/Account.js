import React from 'react'
import { View, Text } from 'react-native'
import { Button } from "react-native-elements";
import UserInfo from "./../components/userInfo";

import HeaderC from "./../components/Header";
function Account (props) {
    //console.log(props);
    const logout=()=>{
        props.navigation.navigate('Login')
    }
    return (
        <View>
            <HeaderC navigation={props.navigation}/>
              <UserInfo/>    
              <Button titleStyle={{textAlign:"center",fontSize:18}} title={"Cerrar Sesión"} onPress={()=>logout()} buttonStyle={{backgroundColor:"#2e3248",width:"90%"}} containerStyle={{backgroundColor:"#2e3248",width:"90%",alignSelf:"center",marginTop:20,alignContent:"center"}}/>
        </View>
    )
}

export default Account;