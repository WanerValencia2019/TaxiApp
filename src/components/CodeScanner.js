import React, { useState, useEffect } from "react";
import { Text, View, ImageBackground, Button, Dimensions } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { conductores } from "./Conductores";
import Conductor from "./renderConductor";
const { width, height } = Dimensions.get("window");

export default function CodeScanner(props) {
  const [hasPermission, setHasPermission] = useState(true);
  const [scanned, setScanned] = useState(false);
  const [find, setfind] = useState(false);
  const [infoConductor, setinfoCondutor] = useState({
    name: null,
    last_name: null,
    cc: null,
    rating: null,
    company: null
  });
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    const id = String(data);
    //console.log(id);
    conductores.forEach(value => {
      if (value.id == String(id)) {
        setinfoCondutor({
          name: value.name,
          last_name: value.last_name,
          cc: value.cc,
          rating: value.rating,
          company: value.company
        });
        setfind(true);
      }
    });
  };

  if (hasPermission === null) {
    return <Text>Necesitas permisos para acceder a la cámara</Text>;
  }
  if (hasPermission === false) {
    return (
      <Text>No se pudo acceder a la camara,por favor dale los permisos</Text>
    );
  }

  if (find == false || find == null) {
    return (
      <View>
        <View>
          <ImageBackground
            source={require("../../assets/fondoTaxis.png")}
            style={{ width: "100%", height: 340 }}
          >
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={{
                marginTop: 0,
                width: 340,
                height: 340
              }}
            />
          </ImageBackground>
          <View
            style={{
              margin: 10,
              padding: 10,
              backgroundColor: "green",
              borderRadius: 50
            }}
          >
            <Text style={{ fontSize: 16, textAlign: "center", color: "white" }}>
              Escanea el codigo del coductor
            </Text>
          </View>
        </View>
        {scanned ? (
          <View
            style={{
              marginTop: 20,
              backgroundColor: "#303248",
              opacity: 0.7
            }}
          >
            <Button
              color={"#303248"}
              title={"Toca para escanear de nuevo"}
              onPress={() => setScanned(false)}
            />
          </View>
        ) : (
          <View
            style={{
              backgroundColor: "#303248",
              padding: 10,
              margin: 10,
              borderRadius: 50
            }}
          >
            <Text
              style={{
                fontSize: 17,
                textAlign: "center",
                color: "yellow",
                opacity: 0.7
              }}
            >
              No has escaneado ningun
            </Text>
          </View>
        )}
      </View>
    );
  } else {
    return props.navigation.navigate("CoductorView", {
      carrera: {
        info: infoConductor,
        cordenadas: props.cordenadas,
        
      }
    });
  }
}
