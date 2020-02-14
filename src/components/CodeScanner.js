import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { conductores } from "./Conductores";
import Conductor from "./renderConductor";
export default function CodeScanner() {
  const [hasPermission, setHasPermission] = useState(true);
  const [scanned, setScanned] = useState(false);
  const [find, setfind] = useState(false);
  const [infoConductor, setinfoCondutor] = useState({name:null,last_name:null,cc:null,rating:null,company:null});
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    const id=String(data);
    console.log(id);
    conductores.forEach((value)=>{
        if(value.id==String(id)){
         // alert(`Información del Conductor \n Nombre: ${value.name} \n Apellidos: ${value.last_name} \n Identificación: ${value.cc} \n Empresa: ${value.company} \n Valoración del conductor(0-10): ${value.rating}`);
          setinfoCondutor({name:value.name,last_name:value.last_name,cc:value.cc,rating:value.rating,company:value.company})
          setfind(true);
        }
    })
    

  };

  if (hasPermission === null) {
    return <Text>Necesitas permisos para acceder a la cámara</Text>;
  }
  if (hasPermission === false) {
    return <Text>No se pudo acceder a la camara,por favor dale los permisos</Text>;
  }

  if(find==false || find==null){
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && (
        <Button title={'Toca para escanear de nuevo'} onPress={() => setScanned(false)} />
      )}
    </View>
  );
  }else{
    return(
    <View>
      <Conductor info={infoConductor}/>
    </View>
    );
  }
}
