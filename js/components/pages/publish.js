import React, { Component } from 'react';
import {
  Alert,
  Image,
  TextInput,
  TouchableHighlight,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'; // Import React-Native elements

import {
    Container, // *
    Header, // *
    Title, // *
    Text, // *
    Icon, // *
    Left, // *
    Right, // *
    Body, // *
    View, // *
    Button, // *
  } from "native-base"; // Import native base elements

import { ImagePicker } from 'expo'; // Take a picture
import { FormLabel, FormInput, FormValidationMessage, Divider } from 'react-native-elements';


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

     componentWillMount() { // Only for test purpose TO BE REMOVED
      console.log(this.props.navigation.state.params.section)
    }

  // Take a picture with camera and return the path to the render "fileUri".
  // However for the moment the image upload still need to be implemented.  
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
  // Take a picture from the camera roll and return the path to the render "fileUri".
  pickImage = async () => {
    // Display the camera to the user and wait for them to take a photo or to cancel
    // the action
    let newphoto = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    this.setState(
    {
     result: newphoto
    }
    )
    uploadImageAsync(newphoto)

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
    return b = await firebase.database().ref(this.props.navigation.state.params.section).once("value") // Return serve as a promise to wait
      .then(function(snapshot) {
        a = snapshot.numChildren(); // ("number of announces")
      })
      .then (() => this.state.announceNumber = a); // Wait for data before assigning the value to "announceNumber"
      
  }

  addOneTo = (announceNumber) => {
    announceNumber = announceNumber + 1
    return announceNumber;
  }
  
  uploadOffer = async (announceNumberInc, uid) => {


        console.log("           --------------------------------           ")
        console.log("Publishing of the announce n°" + announceNumberInc)
    
        let date = String(new Date()) // get current date and transform it into a String
        //let userUID = this.state.user // get user id
        let offer = this.state.offer // get offer title
        let description = this.state.description // get description
        let price = this.state.price // get price

        console.log("Date: " + date)
        console.log("Offer title: " + offer)
        console.log("Description: " + description)
        console.log("Price: " + price + " CHF")
        console.log("User UID: " + uid)
        
        try {
          // write announces properties to firebase
          firebase.database().ref(this.props.navigation.state.params.section + '/' + announceNumberInc).set({
            date,
            offer,
            description,
            price,
            uid,
           
          });
    
        }
        catch (error) {
          console.log(error);
        }
    
  }

  fetchAndUpload() {
      this.numberOfOnlineAnnounce() // Retreive the number of announces 
      .then (() => this.uploadOffer(this.addOneTo(this.state.announceNumber), firebase.auth().currentUser.uid)) // Add one to the number of offers and post it. 
    }

  
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <Container style={styles.container}>
        <Header>
                <Left>
                    <Button
                    transparent
                    onPress={() => this.props.navigation.navigate("OfferDisplay", {section: this.props.navigation.state.params.section})}
                    >
                    <Icon name="ios-arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>New offer</Title>
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
            placeholder='Description of what you propose'
            onChangeText={(description) => this.setState({description : description})}
            
          />
        </View>
        <View>
          <FormLabel>How much does it cost?</FormLabel>
          <FormInput
          keyboardType={'phone-pad'}
          style={{height: 50}}
          value={this.props.price}
          placeholder='CHF'
          onChangeText={(price) => this.setState({price : price})}
            />
        </View>
        <Button
              onPress={() => {this.takePhoto(); }}
              rkType='large'
              style={styles.save1Publish}>
              <Text>Upload Image</Text>
        </Button>
        <Button
              onPress={() => {this.pickImage(); }}
              rkType='large'
              style={styles.save1Publish}>
              <Text>Pick Image</Text>
        </Button>
        <Image
          style={styles.image}
          source={this.state.localUri ? {uri: this.state.localUri} : null}
        /> 

        
        <Button
              onPress={() => { this.fetchAndUpload(); }}
              rkType='large'
              style={styles.save2Publish}>
              <Text>Share</Text>
        </Button>




      </Container>

      </TouchableWithoutFeedback>
    );
  }
}


export default Publish;