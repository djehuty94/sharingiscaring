//REPLACE THE INDEX.JS


import React from "react";

//Import components for APP
import { Platform, StatusBar, Stylesheet, View } from "react-native";
import { Root } from "native-base";
import { StackNavigator, TabNavigator } from "react-navigation";

//Import content for the drawer and header (NAVIGATION)
import Drawer from "./Drawer";
import SignedOut from "./SignedOut";

/*
// Initialise and display Firebase info in console, be sure that we have the right config. 
console.log(firebaseConfig);
firebase.initializeApp(firebaseConfig);
console.log("Firebase initialised")
*/


//Set up core navigation
export const createRootNavigator = (signedIn = false) => {
    return StackNavigator(
    {
      Drawer: {screen: Drawer},
      SignedOut: {screen: SignedOut}
    },
    {
     initialRouteName: signedIn ? "Drawer":"SignedOut",
      headerMode:"None",
    }
  );
};

  /*
  //Export Stacknavigator to app for display
  export default () =>
  <Root>
      <AppNavigator />
  </Root>;
*/