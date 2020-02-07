import React from 'react'
import { View, Text } from 'react-native'
import UserInfo from "./../components/userInfo";

import HeaderC from "./../components/Header";
function Account (props) {
    //console.log(props);
    return (
        <View>
            <HeaderC navigation={props.navigation}/>
              <UserInfo/>    
        </View>
    )
}

export default Account;