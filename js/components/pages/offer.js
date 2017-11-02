
/************************************************************************ */
/* FILE TITLE : pages/offerDisplay.js                                     
/* FILE AIM :                                                             
/*            1.Get datas from DB of specified section                    
/*            2.Build an array with announces to be display               
/*            3.Display announces using card                              
/*                                                                        
/* Input : section from this.props.navigation.state.params.section;       
/*                                                                        
/* Exported functions:                                                    
/*                                                                        
/*                                                                        
/* Exported Variables:                                                    
/*                                                                        
/* DOCUMENTATION USED:                                                    
/*   https://firebase.google.com/docs/reference/js/firebase.database.DataSnapshot#forEach                                                                      */
/**************************************************************************/

import React, { Component } from 'react';

import styles from "./styles"; // Import styles

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

import firebase from 'firebase'; // Import Firebase login

class Offer extends Component {

  constructor(){
    super();
    this.state = {
      phoneNumber:"", 
      email:"",
      displayName:"",
    };
   }
  componentWillMount() {
    this.get("email")
    .then(() => this.get("displayName"))
    .then(() => this.get("phoneNumber"))
  }
    
  get = async (value) => {
    var a
    await firebase.database().ref('users/' + /*this.props.navigation.state.params.uid'*/'AdmeWt4gVFcG8faBcP2SPI77zCT2/' + 'userDetails').once('value')
    .then(function(snapshot){
    a = snapshot.child(value).val();
    })
    .then (() => this.state.value = a) // Wait for data before assigning the value to "announceNumber"
    .then (() => console.log(this.state.value));
    }


      
  render() {
    return (
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
                      <Title>{this.props.navigation.state.params.section} Offer</Title> 
                </Body>
                    <Right/>
        </Header>
        
        
              <Text>Title: {this.props.navigation.state.params.offer}</Text>
              <Text>Description: {this.props.navigation.state.params.description}</Text>
              <Text>Price: {this.props.navigation.state.params.price}</Text>
              <Text>Date: {this.props.navigation.state.params.date}</Text>
              <Text>{this.props.navigation.state.params.key}</Text>
              <Text>{this.props.navigation.state.params.uid}</Text>
              
        
        



      </Container>
    );
  }


    }
    
    
    export default Offer;