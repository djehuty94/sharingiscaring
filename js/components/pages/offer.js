
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
    .then(() => this.setState({ email : this.state.email }))
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
            
            <View style={{
        flex: 0.5,
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}>
        <View style={{width: 0, height: 2, backgroundColor: '#FFFFFF'}} />
                <Text><Title>Title:               {this.props.navigation.state.params.offer}</Title></Text>
        <View style={{width: 100, height: 20, backgroundColor: '#FFFFFF'}} />
                  <Text>Description: {this.props.navigation.state.params.description}</Text>
        <View style={{width: 100, height: 10, backgroundColor: '#FFFFFF'}} />
                  <Text>Date: {this.props.navigation.state.params.date}</Text>
        <View style={{width: 100, height: 10, backgroundColor: '#FFFFFF'}} />
                  <Text><Title>                                                             Price: {this.props.navigation.state.params.price}.- CHF</Title></Text>
                  <Text>{this.state.email}</Text>
        <View style={{width: 100, height: 60, backgroundColor: '#FFFFFF'}} />        
          
      
         
      </View>
                  
                  
                  
           
           
    
    
    
          </Container>
        );
      }
    }
    
    
    export default Offer;