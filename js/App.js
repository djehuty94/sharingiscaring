import React from "react";

//Import components for APP
import { Platform } from "react-native";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";

//Import content for the drawer and header (NAVIGATION)
import Drawer from "./Drawer";
import Header from "./components/Header/";


//Import page header1 and header2 
//import Header1 from "./components/Header/1";
//import Header2 from "./components/Header/2";

import Page1 from "./components/pages/pageTemplate"
import Home from "./components/home";

//Build the stack navigator
const AppNavigator = StackNavigator(
    {

      //Home contains Home design, however Drawer will be the home 
      Home: {screen:Home},

      //Declare navigation  
      Drawer: {screen: Drawer},

      //Declare pages
      Page1: {screen:Page1},
      //Header1: {screen:Header1},
      //Header2: {screen:Header2},
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
