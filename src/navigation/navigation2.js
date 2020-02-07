import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator,createTabNavigator } from "react-navigation-tabs";
import { createAppContainer,createSwitchNavigator } from "react-navigation";
import  DrawerNavigator from "./navigation";


const Container=createAppContainer(createSwitchNavigator({
    "Inicio":{
        screen:DrawerNavigator,
    }

},{
    tabBarOptions:{

    }
})

)

export default Container;