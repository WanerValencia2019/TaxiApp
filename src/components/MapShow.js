import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableHighlight,
  Header
} from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
const { width, height } = Dimensions.get('screen');

import * as Permissions from 'expo-permissions';
import MapRace from './MapRace';

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

function MapShow(props) {
  const { conductor, cordenadas, navigation } = props;
  if (conductor) {
    return <MapRace conductor={conductor} cordenadas={cordenadas} />;
  }

  const [error, setError] = useState('No hay coordenadas,Por favor verifica tu conexión');
  const [region, setRegion] = useState(null);
  const [marker, setmarker] = useState([]);
  const [line, setline] = useState(null);
  useEffect(() => {
    (async () => {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude, accuracy } = position.coords;

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
        });
      
    })();
  }, []);

  const ponerMarcador = (coordinate) => {
    setmarker([{ coordinate, inicio: region }]);
    //console.log(marker);
    const marcador = marker[0];
    console.log(marcador);
    const { latitude, longitude } = region;
    setline([
      { latitude, longitude },
      {
        latitude: coordinate.latitude,
        longitude: coordinate.longitude
      }
    ]);
  };

  const onUserPostionChange = (cordinate) => {
    const { latitude, longitude } = cordinate;
    //console.log(`Nuevas coordenadas, lon:${longitude}, lati:${latitude}`);
    setRegion({
      ...region,
      latitude,
      longitude
    });
  };

  return (
    <View style={styles.container}>
      {region ? (
        <>
          <MapView
            onUserLocationChange={(e) =>
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
            onPress={(e) => {
              ponerMarcador(e.nativeEvent.coordinate);
            }}>
            {marker.map((marker) => {
              return <Marker {...marker} title='Lugar Destino'></Marker>;
            })}

            {line ? (
              <Polyline
                strokeWidth={3}
                coordinates={line}
                strokeColor='gray'
                strokeColors={['#238C23', '#7F0000']}
              />
            ) : null}
          </MapView>
          <View
            style={{
              flex: 1,
              position: 'absolute',
              bottom: 0,
              left: '5%',
              backgroundColor: '#303248',
              borderRadius: 20,
              padding: 16,
              opacity: 0.98
            }}>
            <TouchableHighlight
              onPress={(e) => {
                if (!marker.length) {
                  alert('Debes Seleccionar un lugar de destino');
                  return;
                }
                navigation.navigate('ConductorScanner', {
                  cordenadas: [
                    {
                      ...region,
                      title: 'Destino',
                      descripcion: 'Lugar de arrivo'
                    },

                    {
                      ...marker[0].coordinate,

                      title: 'Destino',
                      descripcion: 'Lugar de llegada'
                    },
                    {
                      ruta: line
                    }
                  ]
                });
              }}>
              <Text style={{ color: 'yellow' }}>Iniciar Carrera</Text>
            </TouchableHighlight>
          </View>
        </>
      ) : (
        <Text style={{color:"rgba(255,0,0,.7)",fontSize:20,marginTop:30}}>{error}</Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  mapStyle: {
    width: 360,
    height
  }
});
export default MapShow;
