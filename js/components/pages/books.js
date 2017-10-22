import React, { Component } from "react";
import { Image, Dimensions } from "react-native";

import firebase from 'firebase'; // Import Firebase login
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Thumbnail,
  Left,
  Right,
  Body,
  IconNB,
  Fab,
  View,
} from "native-base";

import styles from "./styles";

const deviceWidth = Dimensions.get("window").width;

const logo = require("../../../img/logo.png");
const cardImage = require("../../../img/drawer-cover.png");

class Books extends Component {

  constructor() {
    super();
    this.state = {
      Fab: false,
      announceNumber: 0,
      retrieved: "",

    };
  }

  numberOfOnlineAnnounce = async () => {
    var a; 
    var b;
    return b = await firebase.database().ref("/announces/").once("value") // Return serve as a promise to wait
      .then(function(snapshot) {
        a = snapshot.numChildren(); // ("number of announces")
      })
      .then (() => this.state.announceNumber = a); // Wait for data before assigning the value to "announceNumber"
      
  }

  retrieve = async (announceNumber) => { // Stock the announce into this.state.retrieved
    var a
    return a = await firebase.database().ref("/announces/" + announceNumber).once("/Details/")
      .then(function(snapshot) {
        announce = snapshot.val().announce;
    })
      .then (() => this.state.retrieved = announce);
  }

  createList() {
    //var numberOfOnlineAnnounce = this.numberOfOnlineAnnounce()
    let numberOfOnlineAnnounce = 1
    let announce = this.retrieve(numberOfOnlineAnnounce)
    
    console.log(announce)
  }


  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
              >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Card Showcase</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          
          <Card style={styles.mb}>
            <CardItem bordered>
              <Left>
                <Thumbnail source={logo} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem>
              <Body>
                <Image
                  style={{
                    alignSelf: "center",
                    height: 150,
                    resizeMode: "cover",
                    width: deviceWidth / 1.18,
                    marginVertical: 5
                  }}
                  source={cardImage}
                />
                <Text>
                  NativeBase is a free and source framework that enable
                  developers
                  to build high-quality mobile apps using React Native iOS and
                  Android apps
                  with a fusion of ES6.
                  NativeBase builds a layer on top of React Native that provides
                  you with
                  basic set of components for mobile application development.
                </Text>

              </Body>
            </CardItem>
            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent>
                  <Icon name="logo-github" />
                  <Text>4,923 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>

          <Button // BUTTON TO BE REMOVED
            style={{ backgroundColor: '#3B5998' }}
            onPress={() => this.createList()}>
          </Button>


        </Content>
        <Fab // Floating button "add an announce"
          active={this.state.Fab}
          direction="up"
          containerStyle={{ }}
          style={styles.FAB}
          position="bottomRight"
          onPress={() => this.setState({ Fab: !this.state.Fab })}>
          
          <Icon name="add" />
          <Button 
            style={{ backgroundColor: '#3B5998' }}
            onPress={() => this.props.navigation.navigate("Publish")}>
            <Icon name="mail" />
          </Button>
          
        </Fab>
      </Container>
    );
  }
}

export default Books;
