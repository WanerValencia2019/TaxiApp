import React from "react";
import { View, Text } from "react-native";

import { Header,Icon } from "react-native-elements";
import { DrawerActions } from "react-navigation-drawer";
function HeaderC(props) {
    
    const {navigation}=props
    //console.log(navigation.navigate('Home'));
  return (
    <Header
      containerStyle={{backgroundColor:'#303248'}}
      placement='left'
      leftComponent={{ icon: "menu", color: "#fff", onPress:()=>{navigation.dispatch(DrawerActions.openDrawer())}  }}
      centerComponent={{ text: "Taxis Secure", style: { color: "#fff" } }}
      rightComponent={{ icon: "home", color: "#fff", onPress:()=>{navigation.navigate('Home')} }}
    />
  );
}

export default HeaderC;
