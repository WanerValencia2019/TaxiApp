import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar } from "react-native-elements";
import userImagen from "../../assets/conductorExample.jpg";
import UserOptions from "./userOptions";
function UserInfo(props) {
  return (
    <View style={styles.user}>
      <View style={styles.userInfo}>
        <Avatar
          type="xlarge"
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
          source={userImagen}
          showEditButton
        />
        <View style={styles.info}>
          <Text>Anónimo</Text>
          <Text>correo@dirección.com</Text>
        </View>
      </View>
      <View style={{ flexDirection: "column", width: "100%" }}>
        <UserOptions />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  user: {},
  info: {
    width: "100%",
    flexDirection: "column",
    marginLeft: 15
  },
  avatar: {
    marginRight: 10
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10
  }
});

export default UserInfo;
