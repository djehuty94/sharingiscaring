const React = require("react-native");

const { StyleSheet } = React;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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
      margin: 10,
    },
    save: {
      marginVertical: 15
    },
    image: {
      width: 200,
      height: 200
    },
    registerContainer: {
      position: 'absolute',
      bottom: 0,
      alignSelf: "flex-end",
      backgroundColor: "rgba(0, 0, 0, 0.1)",
      paddingVertical: 16,
      width: Dimensions.get("window").width,
      justifyContent: "center",
      alignItems: "center",
    },
    registerText: {
      color: "black",
      fontSize: 16
    }
  });