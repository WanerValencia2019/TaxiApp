import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LoginForm from "./../components/LoginForm";

function Login(props) {
  console.log(props);
  return (
    <View style={styles.container}>
      

      <LoginForm navigation={props.navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop:24,
    flex: 1,
    height:"100%",
    backgroundColor:"rgba(48,50,100,1)",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Login;
