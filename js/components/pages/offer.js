
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

  componentDidMount() {
    // Resolve and display the user info
    this.get("email")
    .then(() => this.get("displayName"))
    .then(() => this.get("phoneNumber"))
    .then(() => this.forceUpdate())
    .then(() => console.log(this.state.email))
    .then(() => console.log(this.state.displayName))
    .then(() => console.log(this.state.phoneNumber));


  }
    
  func_getData() {
    array_userDatas = []
    db_section = this.props.navigation.state.params.section;
    db_uid = 'AdmeWt4gVFcG8faBcP2SPI77zCT2';
    /*this.props.navigation.state.params.uid*/
    //TO DELETE
    console.log("Db_uid : "+ db_uid);  
  
    //Return Resolved once datas have been fetched
    return new Promise(function(resolve, reject){
      try {
        //Get Object corresponding to the section from Firebase
        var ref = firebase.database().ref('user/'+db_section+'userDetails');
        ref.once('value')
        .then(function(snapshot) {
          
          //Loop foreach going through each child (Articles)
          snapshot.forEach(function(childSnapshot){
            
            //Check the number of articles
            if(var_funcIncrement == const_NUMARTICLES){resolve(true);}
            else{
            //Increment to limit displayed articles to 20
            var_funcIncrement++;
    
            //Get Article  (Child) information
            var child_key = childSnapshot.key;
            var child_uid = childSnapshot.child("uid").val();
            var child_offer = childSnapshot.child("offer").val();
            var child_date = childSnapshot.child("date").val();
            var child_description = childSnapshot.child("description").val();
            var child_price = childSnapshot.child("price").val();
    
            //Add Articles (Child) information to the array
            array_offerDatas.push({    
              section: db_section,
              key : child_key,  
              offer: child_offer,
              date: child_date,
              description: child_description,
              price:child_price,
              uid:child_uid,});
            }
          });
          resolve(true);
        });
      }
       catch (error) {
        this.dropdown.alertWithType("error", "Error", String(error));
        reject(Error(error));
        }
      });
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
                  <Text>The email is: {this.state.value}</Text>
        <View style={{width: 100, height: 60, backgroundColor: '#FFFFFF'}} />        
          
      
         
      </View>
                  
                  
                  
           
           
    
    
    
          </Container>
        );
      }
    }
    
    
    export default Offer;