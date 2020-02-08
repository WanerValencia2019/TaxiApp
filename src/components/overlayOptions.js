import React from 'react'
import {View,Text} from "react-native"
import {Overlay} from "react-native-elements"


function Modal (props) {
    const {isVisible,children}=props
    return (
        <Overlay
        isVisible={false}
        windowBackgroundColor="rgba(255, 255, 255, .5)"
        overlayBackgroundColor="red"
        width="auto"
        height="auto"
      >
       {children}
      </Overlay>
    )
}

export default Modal