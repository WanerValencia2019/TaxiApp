import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import Modal from "./Modal";
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
  
  const { carrera} = props.navigation.state.params;
  const cordenadas=carrera.cordenadas[0];
  const [initPosition,setInitPosition]=useState({longitude:cordenadas.longitude,latitude:cordenadas.latitude,title:"Ubicación Inicial"});
  
  const [marcador, setmarcador] = useState([carrera.cordenadas[1],initPosition]);
  console.log(marcador);
  const ruta=carrera.cordenadas[2].ruta;
 
  //console.log(carrera);
 //console.log();
  
  
  const [region, setRegion] = useState({
    latitude: cordenadas.latitude,
    longitude: cordenadas.longitude,
    latitudeDelta: cordenadas.latitudeDelta,
    longitudeDelta: cordenadas.longitudeDelta
  });

  useEffect(() => {
    (async () => {
        navigator.geolocation.getCurrentPosition((position )=>{
          const { latitude, longitude, accuracy } = position.coords;

        setRegion({
          latitude,
          longitude,
          latitudeDelta: latDelta,
          longitudeDelta: lonDelta
        });
        const { lonDelta, latDelta } = calcularDelta(
          longitude,
          latitude,
          accuracy
        );
        })

      
    })();
  }, []);

  const onUserPostionChange = coordinate => {
    const { latitude, longitude } = coordinate;
    //console.log(`Nuevas coordenadas, lon:${longitude}, lati:${latitude}`);
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
            {marcador.map((marker, i) => {
              return (
                <Marker key={i} coordinate={{longitude:marker.longitude,latitude:marker.latitude}} title={marker.title} pinColor={i==0 ? "gold":"indigo"} ></Marker>
              );
            })}
            {ruta ? (
              <Polyline
                strokeWidth={7}
                coordinates={ruta}
                strokeColor="#4BA5B1"
                strokeColors={["#238C23", "#7F0000"]}
              />
            ) : null}
          </MapView>
          <View
            style={{
              flex: 1,
              position: "absolute",
              bottom: "20%",
              left: "5%",
              backgroundColor: "#303248",
              borderRadius: 20,
              padding: 16,
              opacity: 0.98
            }}
          >
            <TouchableHighlight >
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    //marginTop:25
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
