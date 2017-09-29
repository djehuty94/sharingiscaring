import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import Expo, { Constants } from 'expo';

import { StackNavigator, TabNavigator } from 'react-navigation';


import Homescreen from './screens/Homescreen';
import screen2 from './screens/screen2';



class HomeScreen extends Component {
  /*static navigationOptions = {
    title: 'Welcome',
  };*/
  
  render() {
    //const{navigate} = this.props.navigation;
    return (
      //<View>
        <Text>Hello, Chat App!</Text>
        /*<Button
          onPress={() => navigate('screen_2')}
          title="Chat with Lucy"
        />
    </View>*/
    );
  }
}


class Screen2 extends Component {
  /*static navigationOptions = {
    title: 'Welcome to screen 2',
  };*/
  render() {
    return(
     // <View>
        <Text>Hello, Screen 2!</Text>
      //</View>
    );
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: HomeScreen },
  All: { screen: Screen2 },
});

/*

const MainNavigator = StackNavigator({
  main_scr:{screen: HomeScreen},
  screen_2:{screen:Screen2}
});
*/
export default class App extends Component {
  render() {
  /*
    const MainNavigator = StackNavigator({
      main_scr:{screen: HomeScreen},
      screen_2:{screen:Screen2}
    });
*/
  return(
    <View style={styles.container}>
      <TabNavigator/>
    </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }
})/*

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

AppRegistry.registerComponent('App', () => App);
  /*
export default class SimpleApp = StackNavigator({
  Home:{screen: HomeScreen},
  screen_2:{screen:Screen2},
});


/*
export default const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

export default const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
});

export default class class App extends React.Component {
  render() {
    const MainNavigator = StackNavigator({
      Home:{screen: HomeScreen},
      screen_2:{screen:Screen2},
    })


/*

class Screen2 extends Component {
  static navigationOptions = {
    title: 'Welcome to screen 2',
  };
  render() {
    return(
      <View>
        <Text>Hello, Screen 2!</Text>
      </View>
    );
  }
}

//ADD Button to switch screen

export default class App extends React.Component {
  render() {
    const MainNavigator = StackNavigator({
      Home:{screen: HomeScreen},
      screen_2:{screen:Screen2},
    })

  
    return (
        <View style={styles.container}>
          <MainNavigator />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/