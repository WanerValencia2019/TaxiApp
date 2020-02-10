import React from "react";
import { View, Text } from "react-native";

import { Header, Icon } from "react-native-elements";
import { DrawerActions } from "react-navigation-drawer";
function HeaderC(props) {
  const { navigation,type } = props;
  //console.log(navigation.navigate('Home'));
  return (
    <Header
      containerStyle={{ backgroundColor: "#303248", marginTop: 24, height: 70 }}
      placement="center"
      
      leftComponent={{
        size: 35,
        icon: "menu",
        color: "#fff",
        onPress: () => {
          navigation.dispatch(DrawerActions.openDrawer());
        }
      }}
      centerComponent={{
        text: "Taxis Secure",
        style: { color: "#fff", fontSize: 17 }
      }}
      rightComponent={{
        size: 35,
        icon: "home",
        color: "#fff",
        onPress: () => {
          navigation.navigate("Home");
        }
      }}
    />
  );
}

export default HeaderC;
