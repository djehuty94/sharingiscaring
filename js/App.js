import React from "react";

//Import components for APP
import { Platform } from "react-native";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";

//Import content for the drawer and header (NAVIGATION)
import Drawer from "./Drawer";
//import Header from "./components/Header/";


//Import page header1 and header2 
//import Header1 from "./components/Header/1";
//import Header2 from "./components/Header/2";

import advtut from "./components/pages/advtut"
import associations from "./components/pages/associations"
import books from "./components/pages/books"
import events from "./components/pages/events"
import furniture from "./components/pages/furniture"
import housing from "./components/pages/housing"
import other from "./components/pages/other"
import unigle from "./components/pages/unigle"

import userpage from "./components/user/userpage"

import Home from "./components/home";

//Build the stack navigator
const AppNavigator = StackNavigator(
    {

      //Home contains Home design, however Drawer will be the home 
      Home: {screen:Home},

      //Declare navigation  
      Drawer: {screen: Drawer},

      //Declare pages
      Advtut: {screen: advtut},
      Associations: {screen: associations},
      Books: {screen: books},
      Events: {screen: events},
      Furniture: {screen: furniture},
      Housing: {screen: housing},
      Other: {screen: other},
      Unigle: {screen: unigle},

      //Declare user page
      Userpage: {screen: userpage},
      
    },
    {
      //Declare the initial page, Drawer 
      initialRouteName: "Drawer",
      headerMode:"none",
    }
  );

  //Export Stacknavigator to app for display
  export default () =>
  <Root>
      <AppNavigator />
  </Root>;
