import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import MapView,{Marker} from "react-native-maps";
function MapShow() {
  return (
    <View>
      <View style={styles.container}>
        <MapView
        showsUserLocation
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          
          style={styles.mapStyle}
        />
        <Marker
            coordinate={{latitude: 37.78825,
            longitude: -122.4324}}
            title={"title"}
            description={"description"}
         />

      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "flex-end"
        }}>
        <Text>Hola aqu vas</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 300
  }
});
export default MapShow;
