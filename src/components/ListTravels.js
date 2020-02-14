import React, { useState } from "react";
import { View, CardItem, Right, Left } from "native-base";
import { StyleSheet, Text, Button, ScrollView } from "react-native";
import { Icon } from "react-native-elements";

const ListItem = ({ rutaInicio, rutaFinal, taxista }) => {
  return (
    <>
      <View
        style={{
          display: "flex",
          padding: 20,
          backgroundColor: "rgba(0,0,0,0.1)",
          margin: 15,
          justifyContent: "center",
          borderRadius: 20
        }}
      >
        <CardItem
          style={{
            backgroundColor: "white"
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
        <Text
          style={{
            textAlign: "center",
            marginTop: 5,
            fontSize: 16,
            marginBottom: 10
          }}
        >
          Conducor: {taxista}
        </Text>
        <Button color="#303248" title=" Ver detalles"></Button>
      </View>
    </>
  );
};

const recorridos = [
  {
    rutaInicio: "Sanvicente",
    rutaFinal: "Margaritas",
    taxista: "Samuel valencia "
  },
  {
    rutaInicio: "Pollos nachos",
    rutaFinal: "Malecon",
    taxista: "Samuel valencia "
  },
  {
    rutaInicio: "Cra 5 calle 14 y 15",
    rutaFinal: "Cra 5 calle 31 ",
    taxista: "Yasira palomeque "
  },
  {
    rutaInicio: "Sanvicente",
    rutaFinal: "UTCH",
    taxista: "Yoiler cordoba "
  }
];

const ListTravels = () => {
  return (
    <ScrollView automaticallyAdjustContentInsets={false}>
      {recorridos.map((recorrido, i) => (
        <ListItem
          key={i}
          rutaInicio={recorrido.rutaInicio}
          rutaFinal={recorrido.rutaFinal}
          taxista={recorrido.taxista}
        />
      ))}
    </ScrollView>
  );
};

export default ListTravels;
