/* DRAWER NAVIGATION -- TO DISPLAY IF LOGGEDin  */

import React from "react";
import { DrawerNavigator } from "react-navigation";

import Home from "./components/home/";
//import Header from "./components/Header/";

import SideBar from "./components/sidebar";

import advtut from "./components/pages/advtut"
import associations from "./components/pages/associations"
import books from "./components/pages/books"
import events from "./components/pages/events"
import furniture from "./components/pages/furniture"
import housing from "./components/pages/housing"
import other from "./components/pages/other"
import unigle from "./components/pages/unigle"
import userpage from "./components/pages/userPage"
import publish from "./components/pages/publish"

import login from "./components/user/login"
import SignOut from "./SignedOut"


//Declare DrawerNavigator
const Drawer = DrawerNavigator(
    {
        //Declare elements part of the Drawer navigation
             //Home contains Home design, however Drawer will be the home 
        Home: {screen:Home},
  
        //Declare pages
        Advtut: {screen: advtut},
        Associations: {screen: associations},
        Books: {screen: books},
        Events: {screen: events},
        Furniture: {screen: furniture},
        Housing: {screen: housing},
        Other: {screen: other},
        Unigle: {screen: unigle},
        UserPage: {screen: userpage},
        Publish: {screen: publish},
        SignOut: {screen: login}
    },
    {
      //Declare initial routename (dispalyed page)
      initialRouteName: "Home",
      contentOptions:{
        activeTintColor:"#e91e63"
      },
      headerMode:"none",

      //Declare drawer design in ./sidebar
      contentComponent: props => <SideBar {...props} />
    }
  );


export default Drawer;
