import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  Input,
  Icon,
  Button,
  Divider,
  SocialIcon
} from "react-native-elements";

function LoginForm(props) {
  const { toastRef } = props;
  const { navigation } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [iconPass, setIconPass] = useState("eye");
  const [securePass, setsecurePass] = useState(true);
  const [error, setError] = useState("");
  const [loadBtn, setloadBtn] = useState(false);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const validateEmail = (email) => {
    const correo=String(email)
    if (correo.length > 7) {
      setError("Tu correo es demsaiado largo");
    }else{
      navigation.navigate("Inicio")
    }

  };

  return (
    <View style={styles.container}>
      <View>
        <Text
          style={{
            textAlign:"center",
            fontSize: 25,
            marginBottom:20,
            fontWeight: "bold",
            fontFamily: "sans-serif",
            fontStyle: "italic"
          }}>
          Taxis Secure
        </Text>
        <Input
          value={email}
          errorMessage={error}
          onChange={(e) => {
            setEmail(e.nativeEvent.text);
          }}
          placeholder='Correo Electrónico'
          placeholderTextColor='rgba(000,000,000,.7)'
          leftIconContainerStyle={{ marginRight: 8 }}
          leftIcon={
            <Icon
              name='email'
              size={24}
              type='material-community'
              color='rgba(0,0 , 0,.7 )'
            />
          }
        />
        <Input
          value={password}
          placeholderTextColor='rgba(000,000,000,.7)'
          onChange={(e) => {
            setPassword(e.nativeEvent.text);
          }}
          password={true}
          secureTextEntry={securePass}
          placeholder='Contraseña'
          leftIconContainerStyle={{ marginRight: 8 }}
          rightIcon={
            <Icon
              name={iconPass}
              size={24}
              type='material-community'
              color='rgba(0,0 , 0,.7)'
              onPress={() => {
                if (iconPass == "eye") {
                  setIconPass("eye-off");
                  setsecurePass(false);
                } else {
                  setIconPass("eye");
                  setsecurePass(true);
                }
              }}
            />
          }
          leftIcon={
            <Icon
              name='lock-question'
              size={20}
              type='material-community'
              color='rgba(0,0 , 0,.7)'
            />
          }
        />
        <View style={styles.ViewBtn}>
          <Button
            buttonStyle={styles.btnStyle}
            containerStyle={styles.containerBtn}
            titleStyle={styles.Title}
            title='Iniciar Sesión'
            type='solid'
            onPress={()=>{validateEmail(email)}}
            loading={false}
            
          />
        </View>
        <View style={styles.Opc}>
          <TouchableOpacity
            onPress={() => {}}
            style={{ padding: 5, fontSize: 14 }}>
            <Text style={{ fontSize: 15 }}>
              ¿No tienes una cuenta?{" "}
              <Text style={{ color: "#00a680" }}>Regístrate</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ color: "#00a680", fontSize: 15 }}>
              Olvidé mi contraseña
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.containerOpt}>
        <SocialIcon
          title='Iniciar con google'
          underlayColor={false}
          light
          type='google'
        />
        <SocialIcon title='Iniciar con google' light type='facebook' />
      </View>
    </View>
  );
}

export default LoginForm;

const styles = StyleSheet.create({
  Opc: {

    textAlign: "center",
    alignItems: "center"
  },
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    width: "96%",
    borderRadius: 5,
    padding: 10
  },
  containerOpt: {
    flexDirection: "row",
    marginTop: 10,
    paddingLeft: 100
  },
  Title: {
    color: "rgba(255,255,255,1)"
  },
  containerBtn: {
    width: "90%",
    marginTop: 10,
    backgroundColor: "#fff"
  },
  btnStyle: {
     width: "100%",
    height: 50,
    backgroundColor: "#2e3248",
    borderColor: "#2e3248"
  },
  ViewBtn: {
    alignItems: "center"
  },
  containerImg: {
    marginTop: -4,
    flex: 1,
    alignItems: "center"
  }
});
