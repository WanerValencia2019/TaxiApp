import React from 'react';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs"
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { Icon } from "react-native-elements";
import { Text,TouchableOpacity } from "react-native";
import SideBar from "./../components/sideBar";


import Account from "./../screens/Account";
import Info from "./../screens/Info";
import Service from "./../screens/Service";
import Travels from "./../screens/Travels";


const Tabs=createBottomTabNavigator({
    Account:{
        screen:Account,
        navigationOptions:{
            title:"Mi cuenta",
            tabBarLabel:"Mi cuenta",
            tabBarIcon:({tintColor})=>{
                <Icon name="account-outline" type="material-community" color={tintColor}  />
            }
        }
    },
    Service:{
        screen:Service,
        navigationOptions:{
            title:"Servicio",
            tabBarIcon:({tintColor})=>{
                <Icon name="account-outline" type="material-community" color={tintColor}  />
            }
        }
    },
    Travels:{
        screen:Travels,
        navigationOptions:{
            title:"Mis rutas",
            tabBarIcon:({tintColor})=>{
                <Icon name="account-outline" type="material-community" color={tintColor} />
            }
        }
    }  

},{
    initialRouteName:"Service",
    order:['Service','Travels','Account'],
    tabBarOptions:{
        inactiveTintColor:"#fff",
        activeTintColor:"rgba(255,255,25,1)",
        tabStyle:{backgroundColor:'#303248'}
      }
})
const DrawerNavigator=createDrawerNavigator({
    "Home":{
        screen:Tabs,
        navigationOptions:{
            title:"Inicio"
        }
    },"Info":{
        screen:Info,
        navigationOptions:{
            title:"Ayuda"
        }
    }
},{
    initialRouteName:"Home",
    contentComponent:SideBar
})

/*const StackNavigator = createStackNavigator({
    DrawerNavigator:{
        screen: DrawerNavigator
    }
},{
    
}); */
export default DrawerNavigator;