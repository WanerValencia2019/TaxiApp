import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
function Conductor(props) {
  const si = true;
  const { info } = props;
  console.log(info);

  return (
    <View style={styles.container}>
    <Card containerStyle={{width:"100%", marginTop:24,marginLeft:10,marginRight:10}} title={"Información del conductor"}>
        <Text>
          <Text style={styles.bold}>Nombre: </Text>
          {info.name}
        </Text>
        <Text>
          <Text style={styles.bold}>Apellidos: </Text>
          {info.last_name}
        </Text>
        <Text>
          <Text style={styles.bold}>Identificación: </Text>
          {info.cc}
        </Text>
        <Text>
        <Text style={styles.bold}>Empresa: </Text>
        {info.company}
      </Text>
      <Text>
        <Text style={styles.bold}>Valoración(0-10): </Text>
        {info.rating}
      </Text>
    </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 24
  },
  bold: {
    fontSize: 15,
    textTransform: "capitalize",
    fontWeight: "bold"
  }
});

export default Conductor;
