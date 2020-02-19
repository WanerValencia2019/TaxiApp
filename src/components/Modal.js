import React,{useState,useEffect} from 'react'
import {View,Text} from "react-native"
import {Overlay} from "react-native-elements"


function Modal (props) {
    const {isVisible,setIsVisible,children}=props

    const cerrarModal=()=>{
      setIsVisible(false);
    }

    return (
        <Overlay
        isVisible={isVisible}
        onBackdropPress={()=>cerrarModal()}
        width="auto"
        height="auto"
      >
       {children}
      </Overlay>
    )
}

export default Modal;