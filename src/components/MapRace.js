import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";

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
const { width, height } = Dimensions.get("window");

function MapRace(props) {
  const [error, setError] = useState("No hay coordenadas");
  const { carrera } = props;
  const { conducor, cordenadas } = carrera;
  const [region, setRegion] = useState({
    latitude: cordenadas.latitude,
    longitude: cordenadas.longitude,
    latitudeDelta: cordenadas.latitudeDelta,
    longitudeDelta: cordenadas.longitudeDelta
  });

  useEffect(() => {
    (async () => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== "granted") {
        setError("Permission to access location was denied");
        return;
      }
      if (status == "granted") {
        let location = await Location.getCurrentPositionAsync({});

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

        removerWacth = await Location.watchPositionAsync(
          { distanceInterval: 5, timeInterval: 100000 },
          position => {}
        );

        return () => {
          removerWacth.remove();
          console.log("se esta desmontando");
        };
      }
    })();
  }, []);

  const onUserPostionChange = coordinate => {
    const { latitude, longitude } = coordinate;
    console.log(`Nuevas coordenadas, lon:${longitude}, lati:${latitude}`);
    setRegion({
      ...region,
      latitude,
      longitude
    });
  };

  return (
    <View style={styles.container}>
      {carrera ? (
        <>
          <MapView
            onUserLocationChange={e =>
              onUserPostionChange(e.nativeEvent.coordinate)
            }
            style={styles.mapStyle}
            followsUserLocation
            loadingEnabled
            minZoomLevel={15}
            maxZoomLevel={20}
            showsUserLocation={true}
            initialRegion={region}
            region={region}
          >
            {carrera.cordenadas.map((marker, i) => {
              return (
                <Marker key={i} {...marker} title="Lugar Destino"></Marker>
              );
            })}
          </MapView>
          <View
            style={{
              flex: 1,
              position: "absolute",
              bottom: 0,
              left: "5%",
              backgroundColor: "#303248",
              borderRadius: 20,
              padding: 16,
              opacity: 0.98
            }}
          >
            <TouchableHighlight>
              <Text style={{ color: "yellow" }}> Panico</Text>
            </TouchableHighlight>
            <TouchableHighlight>
              <Text style={{ color: "yellow" }}>
                {" "}
                Ver informacion conductor
              </Text>
            </TouchableHighlight>
          </View>
        </>
      ) : (
        <Text> no llego nada</Text>
      )}
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
export default MapRace;

/*{!carrera.cordenadas ? (
    <Polyline
      strokeWidth={3}
      coordinates={carrera.cordenadas}
      strokeColor="gray"
      strokeColors={["#238C23", "#7F0000"]}
    />
  ) : null}

  */
