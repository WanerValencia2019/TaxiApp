import React, { useState } from "react";
import { View, Text } from "react-native";
import { ListItem} from "react-native-elements";
import Modal from "./Modal"

//import PasswordChange from "./passwordCHange";
//import EmailChange from "./emailChange";
//import UsernameChange from "./usernameChange";
function UserOptions() {
  const [isVisible, setIsVisible] = useState(false);
  const [form, setForm] = useState(null);
  const formSelected=(id)=>{
    if(id=="username"){
      
     console.log("hi");
    }else{
      console.log("error")
    }
  }

  const list = [
    {
      title: "Modificar nombre de usuario",
      typeIcon: "material-community",
      letfIconName: "account-circle-outline",
      onPress: formSelected("username")
    },
    {
      title: "Modificar contraseña",
      typeIcon: "material-community",
      letfIconName: "lock-reset",
      //onPress: formSelected("password")
    },
    {
      title: "Modificar correo electrónico",
      typeIcon: "material-community",
      letfIconName: "at",
      //onPress: formSelected("email")
    }
  ];
  
 
  return (
    <View>
      {list.map((menu, ind) => (
        <ListItem
          key={ind}
          title={menu.title}
          leftIcon={{
            type: menu.typeIcon,
            name: menu.letfIconName
          }}
          onPress={menu.onPress}
          bottomDivider
          chevron
        />
      ))}
      
      <Modal isVisible={true}>
          {form}
      </Modal>
    </View>
  );
}


export default UserOptions;
