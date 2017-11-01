/************************************************************************ */
/* FILE TITLE : Drawer.js                                                 */
/* FILE AIM : Stack to display if user is logged in                       */
/* Exported functions:                                                    */
/*                                                                        */
/*                                                                        */
/* Exported Variables:                                                    */
/*     Drawer                                                             */
/*                                                                        */
/*                                                                        */
/* DOCUMENTATION USED:                                                    */
/*                                                                        */
/**************************************************************************/

//Import elements
import React from "react";
import { DrawerNavigator } from "react-navigation";

//Pages to be display if loggedIn
  import Home from "./components/home/";
  import SideBar from "./components/sidebar";
  //import Offers publish and display pages
  //Display receive a parameter that determines what offer to display
  import offerDisplay from "./components/pages/offerDisplay"
  import publish from "./components/pages/publish"
  //import User pages
  import userpage from "./components/pages/userPage" 
  import login from "./components/user/login"
  import SignOut from "./SignedOut"


//Declare Navigator to be used if logged-in
const Drawer = DrawerNavigator(
    {
        //Declare elements part of the Drawer navigation
        Home: {screen:Home},
        OfferDisplay: {
          screen: offerDisplay,
          path: 'offerDisplay/:section',},
        Publish: {
          screen: publish,
          path: 'publish/:section',},
        UserPage: {screen: userpage},
        SignOut: {screen: login}
    },
    {
      //Declare initial routename (Default displayed page)
      initialRouteName: "Home",
      contentOptions:{
        activeTintColor:"#e91e63"
      },
      headerMode:"none",
      //Drawer Menu design
      contentComponent: props => <SideBar {...props} />
    }
  );


export default Drawer;
