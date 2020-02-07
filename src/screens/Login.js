import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import LoginForm from "./../components/LoginForm";

function Login (props) {
    console.log(props);
    return (
        <View style={styles.container}>
             <LoginForm navigation={props.navigation}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(255,246,258,.4)",
        marginTop:24
    },
});

export default Login;
