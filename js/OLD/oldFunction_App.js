
/*
import React from "react";

//Import components for APP
import { Platform, Stylesheet, View } from "react-native";
import { Root } from "native-base";
import { StackNavigator, TabNavigator } from "react-navigation";

//Import content for the drawer and header (NAVIGATION)
import Drawer from "./Drawer";
import SignedOut from "./SignedOut";

//Firebase components
import firebase from 'firebase'; // Import Firebase login
import { firebaseConfig } from './config'; // Import of Firebase config


// Initialise and display Firebase info in console, be sure that we have the right config. 
console.log(firebaseConfig);
firebase.initializeApp(firebaseConfig);
console.log("Firebase initialised")

//Set up core navigation
const AppNavigator = StackNavigator(
    {
      Drawer: {screen: Drawer},
      SignedOut: {screen: SignedOut}
    },
    {
      initialRouteName: "SignedOut",
      headerMode:"None",
    }
  );

  //Export Stacknavigator to app for display
  export default () =>
  <Root>
      <AppNavigator />
  </Root>;
*/