/* @flow */

import React from "react";
import { DrawerNavigator } from "react-navigation";

import Home from "./components/home/";
import Header from "./components/Header/";

import SideBar from "./components/sidebar";

const Drawer = DrawerNavigator(
    {
        Home: { screen: Home },
        Header: { screen: Header },
    },
    {
      initialRouteName: "Home",
      contentOptions:{
        activeTintColor:"#e91e63"
      },
      contentComponent: props => <SideBar {...props} />
    }
  );


export default Drawer;
