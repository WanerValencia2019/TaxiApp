import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Avatar,Overlay } from "react-native-elements";

import UserOptions from "./userOptions";
function UserInfo(props) {
  return (
    <View style={styles.user}>
    <View style={styles.userInfo}>
      <Avatar
        type='xlarge'
        avatarStyle={styles.avatar}
        containerStyle={{ width: 100, height: 100, borderRadius: 50 }}
        rounded
        editButton={{
          name: "mode-edit",
          type: "material",
          color: "#fff",
          underlayColor: "#000",
          size: 34
        }}
        source={{
          uri:"https://api.adorable.io/avatars/266/abott@adorable.png"
        }}
        showEditButton
        
      />
      <View style={styles.info}>
        <Text>Anónimo</Text>
        <Text>correo@dirección.com</Text>
      </View>
      </View>
      <View style={{flexDirection: "column",width:"100%"}}>
        <UserOptions/>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  user: {

  },
  info: {
    width:"100%",
    flexDirection: "column",
    marginLeft: 15
  },
  avatar: {
    marginRight: 10
  },
  userInfo:{
    flexDirection:"row",
    alignItems:"center",
    marginBottom: 20,
    marginTop: 10
  }
});

export default UserInfo;
