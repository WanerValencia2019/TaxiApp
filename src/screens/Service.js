import React from 'react'
import { View, Text ,StyleSheet} from 'react-native'
import HeaderC from "./../components/Header";
import MapShow from "./../components/MapShow";

function Service (props) {
    return (
        <View style={styles.container}>
        <HeaderC navigation={props.navigation} />
        <View style={styles.containerMap}>
            <MapShow/>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:46
      
    },
    containerMap:{
    }

  });

export default Service;