import React from "react";
import { View, CardItem, Body, Right, Left } from "native-base";
import { StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";

const ListItem = ({ rutaInicio, rutaFinal, Taxista }) => {
  return (
    <CardItem
      style={{
        padding: 30,
        backgroundColor: "yellow",
        margin: 20,
        borderRadius: 20
      }}
    >
      <Left>
        <Text>{rutaInicio}</Text>
      </Left>
      <View style={{ marginRight: 20 }}>
        <Icon
          size={35}
          type="material-community"
          name="arrow-right-bold"
        ></Icon>
      </View>

      <Right>
        <Text>{rutaFinal}</Text>
      </Right>
    </CardItem>
  );
};

const ListTravels = () => {
  return (
    <View>
      <ListItem
        Taxista="yoiler cordoba"
        rutaFinal="cra 4 calle 20  "
        rutaInicio="Cra 4 calle 15 "
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    height: 10
  },
  text: {
    fontSize: 17,
    marginRight: 10
  },
  margenIzquierdo: {
    marginLeft: 10
  }
});

export default ListTravels;
