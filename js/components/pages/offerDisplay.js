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
  List,
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


var array_offerDatas = [
  { key : "0",  
    offer: "Base test",
    date: "Base date",
    description: "Base description",
    price:"Base price",
    uid:"Base uid",}
];

class OfferDisplay extends Component {

  constructor() {
    super();
    this.state = {
      Fab: false,
     // announceNumber: 0,
      retrieved: "",
      isLoaded:false
    };
  }

async componentWillMount() { // Only for test purpose TO BE REMOVED
    var_section = this.props.navigation.state.params.section;
    console.log(this.props.navigation.state.params.section);
    console.log("Request to get data for: "+this.props.navigation.state.params.section );

    this.func_getData(var_section)
    .then(res => this.setState({ isLoaded:true }));
  //  .catch(err => alert("An error occurred: "+err));
    console.log("array_offerDatas should be mounted");

    
  }
/*
  numberOfOnlineAnnounce = async () => {
    var a; 
    var b;
    return b = await firebase.database().ref("/announces/").once("value") // Return serve as a promise to wait
      .then(function(snapshot) {
        a = snapshot.numChildren(); // ("number of announces")
        console.log("a   "+a);
        console.log("b   "+b)
      })
      .then (() => this.state.announceNumber = a); // Wait for data before assigning the value to "announceNumber"
      
  }*/
/*
  retrieve = async (announceNumber) => { // Stock the announce into this.state.retrieved
    var c
    return c = await firebase.database().ref("/announces/" + announceNumber).once("/Details/")
      .then(function(snapshot) {
        announce = snapshot.val().announce;
        console.log("c:  "+c)
    })
      .then (() => this.state.retrieved = announce);
  }*/

/*
  createList_old() {
    // var numberOfOnlineAnnounce = this.numberOfOnlineAnnounce()
    let var_numberOfOnlineAnnounce = 1
    let announce = this.retrieve(var_numberOfOnlineAnnounce)
    

    //HOW TO GET DATA FROM FIREBASE
    // https://firebase.google.com/docs/reference/js/firebase.database.DataSnapshot#forEach
    var ref = firebase.database().ref('announces/1/Details');
    ref.once('value')
    .then(function(snapshot) {
      var date = snapshot.child("date").val();
      var offer = snapshot.child("offer").val();
      var price = snapshot.child("price").val();

      var key = snapshot.key;
      var childKey = snapshot.child("1/Details").key;

      console.log("Date: "+date+" Offer: "+offer+" Price:"+price );

    });
  }*/


  

  //WILL GET THE LIST OF DATA ONLINE AND RETURN AN ARRAY
 func_getData(db_section) {
  console.log("Db_section : "+ db_section);  
  return new Promise(function(resolve, reject){
    try {
      //HOW TO GET DATA FROM FIREBASE
    // https://firebase.google.com/docs/reference/js/firebase.database.DataSnapshot#forEach
         var ref = firebase.database().ref(db_section).orderByKey();
    
        ref.once('value')
        .then(function(snapshot) {
          //Loop foreach going through each child 
          //Must be limited to 20
          var var_funcIncrement = 0;
          const const_NUMARTICLES = 20;
    
          snapshot.forEach(function(childSnapshot){

            if(var_funcIncrement == const_NUMARTICLES){resolve(true);}
            else{
            //Increment to limit displayed articles to 20
            var_funcIncrement = var_funcIncrement + 1;
    
            var child_key = childSnapshot.key;
    
            var child_uid = childSnapshot.child("uid").val();
            var child_offer = childSnapshot.child("offer").val();
            var child_date = childSnapshot.child("date").val();
            var child_description = childSnapshot.child("description").val();
            var child_price = childSnapshot.child("price").val();
    
            array_offerDatas.push({    
              key : child_key,  
              offer: child_offer,
              date: child_date,
              description: child_description,
              price:child_price,
              uid:child_uid,});
            }
        });
        console.log(array_offerDatas);
        resolve(true);
      });
    }
     catch (error) {
      reject(Error(error));
      }
    });
  }


  render() {
    if (!this.state.isLoaded) {return <View><Text>Loading...</Text></View>;
    } 
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
            <Title>{this.props.navigation.state.params.section}</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <List
						dataArray={array_offerDatas}
						renderRow={data =>
          <Card style={styles.mb}>
            <CardItem bordered>
              <Left>
                <Thumbnail source={logo} />
                <Body>
                  <Text>{data.offer}</Text>
                  <Text note>{data.date}</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem>
              <Body>
                <Text>
                  Description : {data.description}
                  Key : {data.key}
                  uid : {data.uid}
                  prix : {data.price}
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
          </Card>}
          />

          <Button // BUTTON TO BE REMOVED
            style={{ backgroundColor: '#3B5998' }}
            onPress={() => this.func_getData()}>
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
            onPress={() => this.props.navigation.navigate("Publish", {section: this.props.navigation.state.params.section})}>
            <Icon name="mail" />
          </Button>
          
        </Fab>
      </Container>
    );
  }
}

export default OfferDisplay;
