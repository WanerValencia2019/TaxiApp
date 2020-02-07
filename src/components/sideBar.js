import React from 'react';
import { View, Text } from 'react-native';
import { Divider, } from "react-native-elements";
import { DrawerItems } from "react-navigation-drawer";

function SideBar (props) {
    console.log(props.descriptors.Home);
    return (
        <View>
            <View style={{backgroundColor:'#303248',marginBottom:40,marginLeft:20,marginTop:20}}>
                <Text>Moreo Hurtado José</Text>
                <Text>CC: 201037437646</Text>
            </View>
            <Divider></Divider>
            <DrawerItems {...props}  />
        </View>
    )
}

export default SideBar;

