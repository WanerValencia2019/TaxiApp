import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { Icon } from "react-native-elements";
import SideBar from "./../components/sideBar";

import Account from "./../screens/Account";
import Info from "./../screens/Info";
import ServiceStack from "./../screens/Service";
import Travels from "./../screens/Travels";

const Tabs = createBottomTabNavigator(
  {
    Account: {
      screen: Account,
      navigationOptions: {
        title: "Mi cuenta",
        tabBarLabel: "Perfil",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="account-circle-outline"
            type="material-community"
            color={tintColor}
            size={30}
          />
        )
      }
    },
    Service: {
      screen: ServiceStack,
      navigationOptions: {
        title: "Servicio",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="map-marker-plus"
            type="material-community"
            color={tintColor}
            size={30}
          />
        )
      }
    },
    Travels: {
      screen: Travels,
      navigationOptions: {
        title: "Mis rutas",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="map-marker-path"
            type="material-community"
            color={tintColor}
            size={30}
          />
        )
      }
    }
  },
  {
    initialRouteName: "Service",
    order: ["Service", "Travels", "Account"],
    tabBarOptions: {
      inactiveTintColor: "#fff",
      activeTintColor: "rgba(255,255,25,1)",
      tabStyle: { backgroundColor: "#303248" }
    }
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Tabs,
      navigationOptions: {
        title: "Inicio",
        drawerIcon: () => <Icon name="home" />
      }
    },
    Info: {
      screen: Info,
      navigationOptions: {
        title: "Ayuda",
        drawerIcon: () => <Icon name="help" />
      }
    }
  },
  {
    initialRouteName: "Home",
    contentComponent: SideBar
  }
);

export default DrawerNavigator;
