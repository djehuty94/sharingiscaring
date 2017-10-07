import Expo from "expo";
import React from "react";

//Call file App.js where app code is located
import App from "./js/App";

export default class sharingiscaring extends React.Component {
  //Initial function
  constructor() {
    super();
    //Set app state to falst
    this.state = {
      isReady: false
    };
  }

  //Load font-familty
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")

    });
    //Change state isReady to True
    this.setState({ isReady: true });
  }
  render() {
    //Check isReady to see if app ressources have been loaded
    if (!this.state.isReady) {
      //State while loading 
      return <Expo.AppLoading />;
    }
    //Launch app if the app isReady
    //Display ./js/App
    return <App />;
  }
}
