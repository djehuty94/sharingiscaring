
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
    Button, // *
  } from "native-base"; // Import native base elements

import firebase from 'firebase'; // Import Firebase login

array_offerDatas = []

var var_displayName;
var var_phoneNumber;
var var_email;

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
  }
  
  get = async (value) => {
    await firebase.database().ref('users/' + this.props.navigation.state.params.uid +'/userDetails').once('value')
    .then(function(snapshot){
      console.log(snapshot.child("displayName").val()+ "  "+ snapshot.child("phoneNumber").val());
      var_displayName = snapshot.child("displayName").val();
      var_phoneNumber = snapshot.child("phoneNumber").val();
      var_email = snapshot.child("email").val();

      array_offerDatas.push({
       displayName : var_displayName,
       phoneNumber: var_phoneNumber,
       email: var_email});
    })
    .then(console.log(array_offerDatas))
    .then(console.log(var_displayName));
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