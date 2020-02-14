import React from 'react'
import { createSwitchNavigator } from "react-navigation";
import Service from "./../../screens/Service";
import CodeScanner from "./../../components/CodeScanner";
import Conductor from "./../../components/renderConductor";

const StackServices=createSwitchNavigator({
    "Service":{
        screen:Service,
    },"CodeScanner":{
        screen:CodeScanner
    },"Conductor":{
        screen:Conductor
    }
},{
    initialRouteName:"Service"
})


 
export default StackServices;