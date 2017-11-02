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

class Offer extends Component {
    

      
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