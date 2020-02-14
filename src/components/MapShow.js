import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
const { width, height } = Dimensions.get("window");
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

const calcularDelta = (longitud, latitud, accuracy) => {
  const oneDegreeOfLongitudMeters = 111.32;
  const circunference = 40075 / 360;
  const latDelta = accuracy * (1 / (Math.cos(latitud) * circunference));
  const lonDelta = accuracy / oneDegreeOfLongitudMeters;
  return {
    latDelta,
    lonDelta
  };
};

function MapShow() {
  const [long, setlong] = useState(null);
  const [lati, setlati] = useState(null);
  const [error, setError] = useState("No hay coordenadas");
  const [region, setRegion] = useState(null);
  const [marker, setmarker] = useState([
    { coordinate: { latitude: 45.5209087, longitude: -122.6705107 } }
  ]);
  const [line, setline] = useState(null);
  useEffect(() => {
    console.log("paso por aqui \n");
    (async () => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      }
      if (status == "granted") {
        let location = await Location.getCurrentPositionAsync({});
        location.coords.accuracy;
        location.coords;

        const { latitude, longitude, accuracy } = location.coords;

        const { lonDelta, latDelta } = calcularDelta(
          longitude,
          latitude,
          accuracy
        );

        setRegion({
          latitude,
          longitude,
          latitudeDelta: latDelta,
          longitudeDelta: lonDelta
        });
        console.log(region);

        const unsubcribe = await Location.watchPositionAsync(
          { distanceInterval: 1, timeInterval: 1000 },
          position => {
            /*
            const { latitude, longitude } = position.coords;
            setRegion({
              latitude,
              longitude,
              latitudeDelta: latDelta,
              longitudeDelta: lonDelta
            });
            */
          }
        );
      }
    })();
  }, []);

  const onUserPostionChange = e => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    console.log("cambio la posicion");
    console.log(`Nuevas coordenadas, lon:${longitude}, lati:${latitude}`);
    setRegion({
      ...region,
      latitude,
      longitude
    });
  };
  const change=(e)=>{
    console.log(e.latitude,e.longitude);
  }
  const marcador = e => {
    console.log(e.nativeEvent.coordinate);
    setmarker([{ coordinate: e.nativeEvent.coordinate }]);
    //console.log(marker);
  
    setline([
      { latitude: lati, longitude: long },
      {
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude
      }
    ]);
  };
  return (
    <View style={styles.container}>
      {region ? (
        <MapView
          onUserLocationChange={e => onUserPostionChange(e)}
          style={styles.mapStyle}
          followsUserLocation
          loadingEnabled
          minZoomLevel={15}
          maxZoomLevel={20}
          onPress={(e)=>{marcador(e)}}
          showsUserLocation={true}
          initialRegion={region}
          region={region}      

        > {marker.map(marker => {
          return <Marker {...marker} title="Parece falso"></Marker>;
        })}

        {line ? (
          <Polyline
            strokeWidth={6}
            coordinates={line}
            strokeColor="#000"
            strokeColors={["#238C23", "#7F0000"]}
          />
        ) : null}
        
        </MapView>
      ) : (
        <Text>{error}</Text>
      )}

      <View
        style={{
          flex: 1,
          position: "absolute",
          bottom: "20%",
          left: "5%",
          backgroundColor: "#303248",
          borderRadius: 20,
          padding: 13,
          opacity: 1
        }}
      >
        <TouchableHighlight
          onPress={e => {
            alert(JSON.stringify(region));
          }}
        >
          <Text style={{ color: "yellow" }}>Mi nuevo boton</Text>
        </TouchableHighlight>
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
    width: 360,
    height
  }
});
export default MapShow;
