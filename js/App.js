import Expo from "expo";
import React from "react";

//This must

import firebase from 'firebase'; // Import Firebase login
import { firebaseConfig } from './config/firebase_config.js'; // Import of Firebase config


//Call file App.js where app code is located
import {createRootNavigator} from "./Router";
import { isSignedIn } from "./auth";

firebase.initializeApp(firebaseConfig); // Initialise firebase

export default class sharingiscaring extends React.Component {
  //Initial function
  constructor() {
    super();
    //Set app state to falst
    this.state = {
      isReady: false,
      signedIn:false,
      checkedSignIn:false
    };
  }

  async componentDidMount(){
    //BEFORE DISPLAYING LOAD FONTS
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });

    //Change state isReady to True
    this.setState({ isReady: true });
  }

  //Load font-familty
  componentWillMount() {
    //BEFORE DISPLAYING CHECK IF ALREADY SIGNED IN
    isSignedIn()
    .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
    .catch(err => alert("An error occurred: "+err));
  }
  render() {
    //Check isReady to see if app ressources have been loaded
    //As long as auth state has not been checked, keep displaying loading icon


    if (!this.state.isReady && !this.state.checkedSignIn) {
      //State while loading 
      return <Expo.AppLoading />;
    }

    console.log("this.state.signedIn response: " + this.state.signedIn);
    const App = createRootNavigator(this.state.signedIn);
    //Launch app if the app isReady
    //Display ./js/App
    return <App />;
  }
}


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