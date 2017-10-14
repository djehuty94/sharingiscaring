/* @flow */

import React from "react";
import { DrawerNavigator, StackNavigator } from "react-navigation";

import Home from "./components/home/";
//import Header from "./components/Header/";

import login from "./components/user/login"
import register from "./components/user/register"
import registerInfo from "./components/user/registerInfo"
import resetPassword from "./components/user/resetPassword"

const SignedOut = StackNavigator({
    Login: {screen: login},
    Register: {screen: register},
    RegisterInfo: {screen: registerInfo},
    resetPassword: {screen: resetPassword},
  },{
  initialRouteName: "Login",
  headerMode:"none",}
  );

export default SignedOut;
