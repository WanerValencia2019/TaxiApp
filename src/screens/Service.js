import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import HeaderC from "./../components/Header";
import MapShow from "./../components/MapShow";
import CodeScanner from "./../components/CodeScanner";
import Conductor from "./../components/renderConductor";
import MapRace from "../components/MapRace";

function ConductorScanner(props) {
  const { navigation } = props;
  const cordenadas = props.navigation.getParam("cordenadas");
  return (
    <View>
      <CodeScanner cordenadas={cordenadas} navigation={navigation} />
    </View>
  );
}

function Service(props) {
  const carrera = props.navigation.getParam("carrera");
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.containerMap}>
        <MapShow navigation={navigation} />
      </View>
    </View>
  );
}

function RenderRace(props) {
  const carrera = props.navigation.getParam("carrera");
  return (
    <View>
      <MapRace carrera={carrera} />
    </View>
  );
}

function CoductorView(props) {
  const carrera = props.navigation.getParam("carrera");

  const { info, cordenadas } = carrera;

  return <Conductor info={info} cordenadas={cordenadas} />;
}

const ServiceStack = createStackNavigator(
  {
    Service: {
      screen: Service,
      navigationOptions: {
        header: props => <HeaderC {...props} navifation={props.navigation} />
      }
    },
    ConductorScanner: {
      screen: ConductorScanner
    },
    MapRace: {
      screen: RenderRace
    },
    CoductorView: {
      screen: CoductorView
    }
  },
  {
    initialRouteName: "Service"
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
