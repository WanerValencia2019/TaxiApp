import React from "react";
import { View, Text } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import DrawerNavigator from "./navigation";
import LoginForm from "./../components/LoginForm";
import Login from "./../screens/Login";

const Container = createAppContainer(
  createSwitchNavigator(
    {
      Login: {
        screen: Login
      },
      Inicio: {
        screen: DrawerNavigator
      }
    },
    {
      initialRouteName: "Inicio"
    }
  )
);

export default Container;
