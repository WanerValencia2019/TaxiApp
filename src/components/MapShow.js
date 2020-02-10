import React, { useState } from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
function MapShow() {
  const [long, setlong] = useState(null);
  const [lati, setlati] = useState(null);
  const [latDelta, setlatDelta] = useState(null);
  const [lonDelta, setlonDelta] = useState(null);
  const [marker, setmarker] = useState([
    { coordinate: { latitude: 45.5209087, longitude: -122.6705107 } }
  ]);

  const [line, setline] = useState(null);

  const Location = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const accuracy = position.coords.accuracy;
      const latitud = position.coords.latitude;
      const longitud = position.coords.longitude;
      setlati(latitud);
      setlong(longitud);
      calcularDelta(longitud, latitud, accuracy);
    });
  };
  Location();

  const calcularDelta = (longitud, latitud, accuracy) => {
    const oneDegreeOfLongitudMeters = 111.32;
    const circunference = 40075 / 360;
    const latDelta = accuracy * (1 / (Math.cos(latitud) * circunference));
    const lonDelta = accuracy / oneDegreeOfLongitudMeters;
    setlatDelta(latDelta);
    setlonDelta(lonDelta);
  };

  const marcador = (e) => {
    console.log(e.nativeEvent.coordinate);
    setmarker([{ coordinate: e.nativeEvent.coordinate }]);
    console.log(marker);
    setline([
      { latitude: lati, longitude: long },
      {
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude
      }
    ]);
  };

  return (
    <View>
      <View style={styles.container}>
        {latDelta ? (
          <MapView
            style={styles.mapStyle}
            showsUserLocation
            followsUserLocation
            loadingEnabled
            minZoomLevel={14}
            initialRegion={{
              latitude: lati,
              longitude: long,
              latitudeDelta: latDelta,
              longitudeDelta: lonDelta
            }}
            onPress={(e) => {
              marcador(e);
            }}>
            {marker.map((marker) => {
              return <Marker {...marker} title='Parece falso'></Marker>;
            })}

            {line ? (
              <Polyline
                strokeWidth={6}
                coordinates={line}
                strokeColor='#000'
                strokeColors={["#238C23", "#7F0000"]}
              />
            ) : null}
          </MapView>
        ) : null}
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
    height: Dimensions.get("window").height - 0
  }
});
export default MapShow;
