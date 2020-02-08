import React from "react";
import { View, Text } from "react-native";
import HeaderC from "./../components/Header";
import ListTravels from "../components/ListTravels";

function Travels(props) {
  return (
    <View>
      <HeaderC navigation={props.navigation} />
      <ListTravels />
    </View>
  );
}

export default Travels;
