/* @flow */

import React from "react";
import { DrawerNavigator } from "react-navigation";

import Home from "./components/home/";
//import Header from "./components/Header/";
import Page from "./components/pages/";

import SideBar from "./components/sidebar";

//Declare DrawerNavigator
const Drawer = DrawerNavigator(
    {
        //Declare elemtents part of the Drawer navigation
        Home: { screen: Home },
        Page: { screen : Page },
    },
    {
      //Declare initial routename
      initialRouteName: "Home",
      contentOptions:{
        activeTintColor:"#e91e63"
      },

      //Declare DrawerNavigation parameters for navigation
      contentComponent: props => <SideBar {...props} />
    }
  );


export default Drawer;
