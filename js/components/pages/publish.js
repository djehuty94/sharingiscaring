import React, { Component } from 'react';
//import { firebaseConfig } from './config'; // Import of Firebase config
import {
  Alert,
  Image,
  TextInput,
  TouchableHighlight,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'; // Import React-Native elements

import {
    Container,
    Header,
    Title,
    Content,
    Text,
    Thumbnail,
    Icon,
    Left,
    Right,
    Body,
    IconNB,
    View,
  } from "native-base"; // Import native base elements

import { ImagePicker } from 'expo'; // Take a picture
import { FormLabel, FormInput, FormValidationMessage, Button, Divider } from 'react-native-elements';

import { // Import React-Native UI Kitten Design
  RkButton,
} from 'react-native-ui-kitten';

import firebase from 'firebase'; // Import Firebase login
import { firebaseConfig } from '../../config'; // Import of Firebase config


import styles from "./styles"; // Import styles


class Publish extends Component {

    // Use constructor to store offer, description, localUri and filename. 
    constructor(){
      super();
      this.state = {
        offer : "", 
        description : "", 
        localUri : null, 
        filename : "", 
        result : "", 
        user : null,
        announceNumber : 0,
        price : 0,
        photo : "",
      };
     }

    // ToBeRemoved login
  login = async () => { // The "async" serve for the await function

      let email = "eberle.tom@gmail.com"
      let password = "123456789"
      try {
        let user = await firebase.auth().signInWithEmailAndPassword(email, password); 
        this.state.user = user.uid
        console.log("UserID is: "+ this.state.user)
      }
      catch (error) {
        console.log(error);
        let err_message = error.message;
      }
  }
  // Take a picture with camera and return the path to the render "fileUri"
  takePhoto = async () => {
    // Display the camera to the user and wait for them to take a photo or to cancel
    // the action
    let newphoto = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    this.setState(
    {
     result: newphoto
    }
    )

    if (this.state.result.cancelled) {
      return;
    }
  
    // ImagePicker saves the taken photo to disk and returns a local URI to it

    this.setState(
      {
        filename: this.state.result.uri.split('/').pop(),
        localUri: this.state.result.uri
      }
    )
    // Infer the type of the image
    let match = /\.(\w+)$/.exec(this.state.filename);
    let type = match ? `image/${match[1]}` : `image`;
    
    console.log(this.state.result.uri)
    console.log(this.state.filename)
    console.log(this.state.localUri)

  }

  // Function to get the number of announces already in the database. It is stored in "a" and then in "this.state.announceNumber"
  // We use .then to wait that the data is downloaded before proceeding. 
  numberOfOnlineAnnounce = async () => {
    var a; 
    var b;
    return b = await firebase.database().ref("/announces/").once("value") // Return serve as a promise to wait
      .then(function(snapshot) {
        a = snapshot.numChildren(); // ("number of announces")
      })
      .then (() => this.state.announceNumber = a); // Wait for data before assigning the value to "announceNumber"
      
  }

  addOneTo = (announceNumber) => {
    announceNumber = announceNumber + 1
    return announceNumber;
  }


  fetchAndUpload() {
    // Log the user, in the real version the user will already be logged. 
    // I used .then to wait that firebase contact the database. 

    this.login() // To be removed since the user will be logged. 
    var announceNumberInc
    this.numberOfOnlineAnnounce() // Retreive the number of announces 
    .then (() => announceNumberInc = this.addOneTo(this.state.announceNumber)) // Return the number in "announceNumber" incremented by one. 
    .then (() => this.uploadOffer(announceNumberInc))
   
  }

  uploadOffer = async (announceNumberInc) => {


        console.log("           --------------------------------           ")
        console.log("Publishing of the announce n°" + announceNumberInc)
    
        let date = String(new Date()) // get current date and transform it into a String
        let userUID = this.state.user // get user id
        let offer = this.state.offer // get offer title
        let description = this.state.description // get description
        let price = this.state.price // get price

        console.log("Date: " + date)
        console.log("Offer title: " + offer)
        console.log("Description: " + description)
        console.log("Price: " + price + " CHF")
        
        try {
          // write announces properties to firebase
          firebase.database().ref('/announces/' + announceNumberInc + '/Details').set({
            date,
            offer,
            description,
            price,
            userUID
          });
    
        }
        catch (error) {
          console.log(error);
        }
    
  }

  // Visual container and text 
  
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}
      style={{backgroundColor: "green"}}>

      <Container style={styles.container}>
        <Header>
                <Left>
                    <Button
                    transparent
                    onPress={() => this.props.navigation.navigate("Books")}
                    >
                    <Icon name="ios-arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>New announce</Title>
                </Body>
                    <Right />
        </Header>

        <View> 
          <FormLabel>What are you offering?</FormLabel>
          <FormInput
            multiline
            style={{height: 60}}
            value={this.props.offer}
            placeholder='Books, flats, events etc...'
            onChangeText={(offer) => this.setState({offer : offer})}
            
          />
        </View>
        <View>
          <FormLabel>Enter Description Here</FormLabel>
          <FormInput
            multiline
            style={{height: 100}}
            value={this.props.description}
            placeholder=''
            onChangeText={(description) => this.setState({description : description})}
            
          />
        </View>
        <View>
          <FormLabel>How much does it cost?</FormLabel>
          <FormInput
          keyboardType={'phone-pad'}
          style={{height: 50}}
          value={this.props.price}
          placeholder='$$$'
          onChangeText={(price) => this.setState({price : price})}
            />
        </View>
        <RkButton
              onPress={() => {this.takePhoto(); }}
              rkType='large'
              style={styles.save1Publish}>
              Upload Image
        </RkButton>
        <Image
          style={styles.image}
          source={this.state.localUri ? {uri: this.state.localUri} : null}
        /> 

        
        <RkButton
              onPress={() => { this.fetchAndUpload(); }}
              rkType='large'
              style={styles.save2Publish}>
              Share
        </RkButton>




      </Container>

      </TouchableWithoutFeedback>
    );
  }
}


export default Publish;