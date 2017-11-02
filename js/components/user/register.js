import React, { Component, PropTypes } from 'react';
import firebase from 'firebase'; // Import Firebase login
import { firebaseConfig } from '../../config'; // Import of Firebase config
import {
  Alert,
  AppRegistry,
  ListView,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  ScrollView,
} from 'react-native'; // Import React-Native elements
import { FormLabel, FormInput, FormValidationMessage, Button, Divider, SocialIcon, Icon } from 'react-native-elements';

import { // Import React-Native UI Kitten Design
  RkButton,
} from 'react-native-ui-kitten';
import { connect } from 'react-redux'; // Probably not useful
import DropdownAlert from 'react-native-dropdownalert'; // Alert component
import validator from "validator"; // Use to validate the forms


// Initialise and display Firebase info in console, be sure that we have the right config. 
 //   console.log(firebaseConfig);
  //  firebase.initializeApp(firebaseConfig);
 //   console.log("Firebase initialised")

 import styles from "./styles";


export default class RegisterAccount extends Component {

    static navigationOptions = {
        title: 'Account information'
      };

    // Use constructor to store email and password. 
    constructor(){
      super();
      this.state = {
        isLoggedIn : false, 
        email :"", 
        password : "", 
        firstname :"", 
        lastname : "", 
        phone : ""};
    }


   // Navigation function
  onNavPress = (screenname) => {
    this.props.navigation.navigate(screenname);
    };

  // Sending info to firebase
  _signupUser = async () => {

    
    if (!validator.isEmail(this.state.email)) {
      this.dropdown.alertWithType(
        "error", 
        "Error", 
        "Supply a correct email."
      );
      return;
    }
    if (this.state.password.length < 6) {
      this.dropdown.alertWithType(
        "error",
        "Error",
        "The password lenght must be 6 minimum."
      );
      return;
    }
   

      //var firstname = this.props.navigation.firstname
      //var lastname = this.props.navigation.lastname
      var firstname = this.props.navigation.state.params.firstname
      var lastname = this.props.navigation.state.params.lastname
      console.log(firstname)
      console.log(lastname)
      var phone = this.props.navigation.state.params.phone
      var displayName = firstname + ' ' + lastname;
      var email = this.state.email
      var password = this.state.password

      console.log(email);
      console.log(password);
      console.log(displayName);
      console.log(phone);
  
      try {
        let user = await firebase.auth().createUserWithEmailAndPassword(email, password);
        user.updateProfile({ displayName });
        // write user properties to firebase
        firebase.database().ref(`/users/${user.uid}/userDetails`).set({
          email,
          phone,
          firstname,
          lastname,
          displayName
        });
        console.log(user);
        this.onNavPress('login_scr')
        if (user) { // Display success message when logged in.
          this.dropdown.alertWithType('success', 'Success', "Registered");
        }
      }
      catch (error) {
        console.log(error);
        this.dropdown.alertWithType("error", "Error", String(error));
      }
  
  };




  // Visual container and text 
  render() {
    return (
      
      <ScrollView contentContainerStyle={styles.container}>


        <FormLabel>Enter Email</FormLabel>
        <FormInput
          value={this.state.email}
          autoCorrect={false}
          placeholder='maxime.schmit@student.unisg.ch'
          onChangeText={(email) => {this.setState({email}); }}
        />

        <FormLabel>Enter Password</FormLabel>
        <FormInput
          autoCorrect={false}
          value={this.state.password}
          placeholder='•••••••••'
          secureTextEntry={true}
          onChangeText={(password) => {this.setState({password}); }}
          returnKeyType="send"
          onSubmitEditing={() => this._signupUser()}
        />

        <FormLabel>  </FormLabel>
        
        <RkButton
              onPress={() => this._signupUser()}
              rkType='rounded'
              style={styles.save}>
              CREATE
        </RkButton>
             
        <DropdownAlert ref={ref => this.dropdown = ref}/>
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent('RegisterAccount', () => RegisterAccount);