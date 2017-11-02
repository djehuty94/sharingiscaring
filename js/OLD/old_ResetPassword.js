const React = require("react-native");

const { StyleSheet } = React;


// Style sheet
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#ddd',
    },
    title: {
      marginTop: 40,
      marginBottom: 10,
      fontSize: 20,
      fontWeight: 'bold',
    },
    reloadButton: {
      fontSize: 16,
      fontWeight: 'bold',
      backgroundColor: 'blue',
      color: 'white',
      padding: 10,
    },
    loginField: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      margin: 10,
      padding: 10,
      backgroundColor: 'white',
    },
    passwordField: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      margin: 10,
      padding: 10,
      backgroundColor: 'white',
    },
    listView: {
      alignSelf: 'stretch',
      backgroundColor: 'white',
    },
    listViewRow: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      height: 50,
    },
    rowName: {
      padding: 10,
      fontSize: 16,
    },
    rowTemperature: {
      padding: 10,
      fontSize: 16,
    },
    image: {
      width: 200,
      height: 200
    },
    enterMail: {
      marginVertical: 15,
    },
    enterMailInput: {
    },
    resetButton: {
    },
  });