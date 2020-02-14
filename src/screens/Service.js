import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import HeaderC from "./../components/Header";
import MapShow from "./../components/MapShow";
import CodeScanner from "./../components/CodeScanner";

function RutaDestino(props) {
  return <CodeScanner />;
}

function Service(props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerMap}>
        <MapShow inicarCarrera={props.navigation.navigate} />
        <Button
          title="Ir a servicios"
          onPress={() => props.navigation.navigate("RutaDestino")}
        />
      </View>
    </View>
  );
}

const ServiceStack = createStackNavigator(
  {
    Service: {
      screen: Service,
      navigationOptions: {
        header: props => <HeaderC {...props} navifation={props.navigation} />
      }
    },
    RutaDestino: {
      screen: RutaDestino
    }
  },
  {
    initialRouteName: "RutaDestino"
  }
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ServiceStack;
