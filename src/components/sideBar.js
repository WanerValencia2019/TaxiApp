import React from "react";
import { StyleSheet } from "react-native";
import { Divider, Avatar } from "react-native-elements";
import { DrawerItems } from "react-navigation-drawer";
import { Container, Text, CardItem, Left, Thumbnail, Body } from "native-base";

const imagenUsuario = require("../../assets/adorable.png");
function SideBar(props) {
  return (
    <Container style={{ marginTop: 24 }}>
      <CardItem style={styles.CardItem}>
        <Left>
          <Avatar source={imagenUsuario} size="large" rounded />
          <Body style={{ marginHorizontal: 10 }}>
            <Text style={{ color: "white", fontSize: 16, marginBottom: 10 }}>
              Yoiler cordoba{" "}
            </Text>
            <Text style={{ color: "white", fontSize: 16 }}>Recorridos : 4</Text>
          </Body>
        </Left>
      </CardItem>
      <Divider></Divider>
      <DrawerItems {...props} />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,0.7)",
    height: "100%",
    color: "white",
    marginTop: 24
  },
  CardItem: {
    borderRadius: 0,
    height: 150,
    backgroundColor: "#303248",
    color: "white"
  }
});

export default SideBar;
