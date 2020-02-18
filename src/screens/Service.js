import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { Icon } from "react-native-elements";
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
      <MapRace carrera={carrera} navigation={props.navigation} />
    </View>
  );
}

function CoductorView(props) {
  const carrera = props.navigation.getParam("carrera");

  const { info, cordenadas } = carrera;

  return <Conductor info={info} navigation={props.navigation} carrera={carrera} />;
}

const ServiceStack = createStackNavigator(
  {
    Service: {
      screen: Service,
      navigationOptions: {
        header: props => <HeaderC {...props} navigation={props.navigation} />
      }
    },
    ConductorScanner: {
      screen: ConductorScanner
    },
    MapRace: {
      screen: RenderRace,
      navigationOptions:{
        headerTitle:"Taxi Secure",
        headerTitleAlign:"center",
        headerTitleStyle:{fontSize:20},
        headerLeft:false,
 
      }
    },
    CoductorView: {
      screen: CoductorView,
      navigationOptions:{
        title:"Conductor",
        headerShown:false
      }
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
