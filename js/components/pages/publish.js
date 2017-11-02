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


import DropdownAlert from 'react-native-dropdownalert'; // Alert component



import firebase from 'firebase'; // Import Firebase login
import { firebaseConfig } from '../../config'; // Import of Firebase config


import styles from "./styles"; // Import styles


class Publish extends Component {

    // Use constructor to store offer, description, localUri and filename. 
    constructor(){
      super();
      this.state = {
        share : false, // Share button
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

    static navigationOptions = {
      gesturesEnabled: false,
      swipeEnabled: false, 
    };

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

        if (this.state.offer.length < 6) {
          this.dropdown.alertWithType(
            "error",
            "Error",
            "Enter a valid title (more than 6 caracters)."
          );
          return;
        }

        if (this.state.description.length < 6) {
          this.dropdown.alertWithType(
            "error",
            "Error",
            "Enter a valid description (more than 10 caracters)."
          );
          return;
        }

        if (this.state.price < 1) {
          this.dropdown.alertWithType(
            "error",
            "Error",
            "Enter a valid price."
          );
          return;
        }


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
           
          })
        .then(() => this.props.navigation.navigate("OfferDisplay", {section: this.props.navigation.state.params.section}));
    
        }
        catch (error) {
          console.log(error);
          this.dropdown.alertWithType("error", "Error", String(error));
        }
    
  }

  fetchAndUpload() {
      this.setState({ share: !this.state.share }); // Disable the Share button
      console.log(this.state.share)
      this.numberOfOnlineAnnounce() // Retreive the number of announces 
      .then (() => this.uploadOffer(this.addOneTo(this.state.announceNumber), firebase.auth().currentUser.uid)) // Add one to the number of offers and post it.
      .then (() => this.setState({ share: !this.state.share })) // Enable the Share button after request
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
                    <Right/>
        </Header>
        
        <View> 
          <FormLabel>What are you offering?</FormLabel>
          <FormInput
            multiline
            style={{height: 60}}
            backgroundColor= '#dcdcdc'
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
            backgroundColor= '#dcdcdc'
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
          backgroundColor= '#dcdcdc'
          value={this.props.price}
          placeholder='CHF'
          onChangeText={(price) => this.setState({price : price})}
          
            />
        </View>
        <Button
              onPress={() => {this.takePhoto(); }}
              rkType='large'
              style={styles.save1Publish}>
              <Text>Take Picture</Text>
              
        </Button>
        <Button
              onPress={() => {this.pickImage(); }}
              rkType='large'
              style={styles.save1Publish}>
              <Text>Choose Picture</Text>
        </Button>
        <Image
          style={styles.image}
          source={this.state.localUri ? {uri: this.state.localUri} : null}
        /> 

        
        <Button 
              block success
              disabled={this.state.share}
              onPress={() => this.fetchAndUpload() }
              >
              <Text>Share</Text>
        </Button>
       


        <DropdownAlert ref={ref => this.dropdown = ref}/>
      </Container>
      
      </TouchableWithoutFeedback>
      
    );
  }
}


export default Publish;