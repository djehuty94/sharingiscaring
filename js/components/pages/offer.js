
/************************************************************************ */
/* FILE TITLE : pages/offer.js                                     
/* FILE AIM :                                                             
/*            1.Get datas from offerDisplay.js
/*            2.Display offers' details                         
/*                                                                        
/* Input : uid of user that added the offer from this.props.navigation.state.params.uid    
/*                                                                        
/* Exported functions:                                                    
/*                                                                        
/*                                                                        
/* Exported Variables:                                                    
/*                                                                        
/* DOCUMENTATION USED:                                                    
/*                                                                       */
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
    Button, //*
    Content, //*
    Card, //*
    CardItem, // *
  } from "native-base"; // Import native base elements

import firebase from 'firebase'; // Import Firebase login
import { email } from "react-native-communications"; // TO be used to send Feedback
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
    /*this.get("email")
    .then(() => this.get("displayName"))
    .then(() => this.get("phoneNumber"))
    .then(() => this.forceUpdate())*/
    this.get("email")
    .then(() => this.forceUpdate())
  }
  
  get = async (value) => {
    await firebase.database().ref('users/' + this.props.navigation.state.params.uid +'/userDetails').once('value')
    .then(function(snapshot){
    a = snapshot.child(value).val();
    })
    .then (() => this.state.email = a) // Wait for data before assigning the value to "announceNumber"
    .then (() => console.log(this.state.email));
    }


      
      render() {
        return (
            <Container style={styles.container}>
            <Header 
            style={styles.Header}
					  androidStatusBarColor='#6FAF98'
					  backgroundColor='#6FAF98'>
                    <Left>
                        <Button
                        transparent
                        light
                        onPress={() => this.props.navigation.navigate("OfferDisplay", {section: this.props.navigation.state.params.section})}
                        >
                        <Icon name="ios-arrow-back" color= 'white' />
                        </Button>
                    </Left>
                    <Body>
                         <Title>{this.props.navigation.state.params.section} Offer</Title> 
                    </Body>
                        <Right/>
            </Header>

            <Content>
            <Card>
        <Text><Title>Title: {this.props.navigation.state.params.offer}</Title></Text>
        <View style={{width: 10000, height: 1, backgroundColor: 'grey'}} />
                  <Text>Description: {this.props.navigation.state.params.description}</Text>
        <View style={{width: 10000, height: 1, backgroundColor: 'grey'}} />
                  <Text color='grey'>Date: {this.props.navigation.state.params.date}</Text>
        <View style={{width: 10000, height: 1, backgroundColor: 'grey'}} />
                  <Text><Title>Price: {this.props.navigation.state.params.price}.- CHF</Title></Text>
        <View style={{width: 10000, height: 1, backgroundColor: 'grey'}} />     
        
        
        
        <Button
        onPress={() => {
              email(
                [this.state.email],
                null,
                null,
                `Contact for <${this.props.navigation.state.params.offer}>`,
                null
              );
            }}
            >
          <Text>Contact by mail</Text>
        </Button>

          
            </Card>
            </Content>
                  
          </Container>
                  
                  
           
           
    
    
    
       




        );
      }
    }
    
    
    export default Offer;