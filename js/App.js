import React from "react";

import { Platform } from "react-native";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";

//Import content for the drawer and header
import Drawer from "./Drawer";
import Header from "./components/Header/";

//Import page header1 and header2
import Header1 from "./components/Header/1";
import Header2 from "./components/Header/2";
import Home from "./components/home";

//Build the stack navigator
const AppNavigator = StackNavigator(
    {
     
  
      Home: {screen:Home},

      Drawer: {screen: Drawer},
      Header1: {screen:Header1},
      Header2: {screen:Header2}
    },
    {
      initialRouteName: "Drawer",
      headerMode:"none",
    }
  );
  
  export default () =>
  <Root>
      <AppNavigator />
  </Root>;
