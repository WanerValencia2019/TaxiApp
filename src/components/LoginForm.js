import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity,Image } from "react-native";
import {
  Input,
  Button,
  Icon,
  Divider,
  SocialIcon,
} from "react-native-elements";


function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {navigation}=props
  console.log(props);
  const login = () => {
    //console.log();
    navigation.navigate("Inicio")
  };
  console.log(props);
  return (
    <View style={styles.container}>


      <View style={styles.containerImg}>
        <Image source={require("./../../assets/logo.jpg")} style={{maxHeight:150,maxWidth:150}} />
      </View>


      <Input
        value={email}
        onChange={(e) => {
          setEmail(e.nativeEvent.text);
        }}
        label='Correo Electrónico'
        placeholder='Correo Electrónico'
        leftIcon={
          <Icon
            name='email'
            size={24}
            type='material-community'
            color='rgba(0,0 , 0,.4 )'
          />
        }
      />
      <Input
        value={password}
        onChange={(e) => {
          setPassword(e.nativeEvent.text);
        }}
        password={true}
        secureTextEntry={true}
        label='Contraseña'
        placeholder='Contraseña'
        leftIcon={
          <Icon
            name='lock-question'
            size={24}
            type='material-community'
            color='rgba(0,0 , 0,.4 )'
          />
        }
      />
      <View style={styles.ViewBtn}>
        <Button
          buttonStyle={styles.btnStyle}
          containerStyle={styles.containerBtn}
          titleStyle={styles.Title}
          title='Iniciar Sesión'
          type='outline'
          onPress={login}
        />
        <View style={styles.Register}>
          <TouchableOpacity
            onPress={() => navigation.navigate("")}
            style={{ padding: 5, fontSize: 14 }}>
            <Text>
              ¿No tienes una cuenta?{" "}
              <Text style={{ color: "#00a680" }}>Regístrate</Text>
            </Text>
          </TouchableOpacity>
        </View>
        <Divider />
        <SocialIcon
          title='Iniciar Sesión con facebook'
          button
          type='facebook'
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    alignContent: "center",
    justifyContent:"center",
    width: "100%",
  },
  containerOpt: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  Title: {
    color: "rgba(000,000,000,1)"
  },
  containerBtn: {
    width: "60%",
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: "#FFEA1A",
    borderColor: "rgba(000,000,000,1)"
  },
  btnStyle: {
    borderColor: "rgba(000,000,000,1)"
  },
  ViewBtn: {
    flex: 1,
    alignItems: "center"
  },
  containerImg: {
    marginTop:40,
    width:10,
    height:10,
    flex:1,
    alignItems:'center',
    
  }
});

export default LoginForm;
