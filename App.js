import React from 'react';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { StackNavigator } from 'react-navigation';


class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return <Text>Hello, Navigation!</Text>;
  }
}


class Screen2 extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return <Text>Hello, Navigation!</Text>;
  }
}

//ADD Button to switch screen

export default class App extends React.Component {
  render() {
    const MainNavigator = StackNavigator({
      Home:{screen: HomeScreen},
      screen_1:{screen:Screen2},
    })

  
    return (
      <Provider store={this.store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
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
