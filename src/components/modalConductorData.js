import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Card, Image } from "react-native-elements";
import FOTO_CONDUCTOR from "../../assets/conductorExample.jpg";
function ModalConductor(props) {
    const {info}=props
    return (
      <View style={styles.container}>
        <Card
          containerStyle={styles.card}
          title={"Información del conductor"}
        >
        <View style={{ alignSelf: "center", marginBottom: 10 }}>
          <Image
            source={FOTO_CONDUCTOR}
            style={{ width: 150, height: 150 }}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>
          <Text>
            <Text style={styles.bold}>Nombre: </Text>
            {info.name}
          </Text>
          <Text>
            <Text style={styles.bold}>Apellidos: </Text>
            {info.last_name}
          </Text>
          <Text>
            <Text style={styles.bold}>Identificación: </Text>
            {info.cc}
          </Text>
          <Text>
            <Text style={styles.bold}>Empresa: </Text>
            {info.company}
          </Text>
          <Text>
            <Text style={styles.bold}>Valoración(0-10): </Text>
            {info.rating}
          </Text>
        </Card>
  
       
      </View>
    );
  }
 export default ModalConductor; 

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      marginTop:2
    },
    bold: {
      margin: 10,
      fontSize: 17,
      textTransform: "capitalize",
      fontWeight: "bold"
    },
    card:{
        width: "100%",
        marginTop: 0,
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 10,
        borderEndColor: "black"
    }
  });