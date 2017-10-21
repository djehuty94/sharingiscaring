import React, { Component } from "react";
import { 
  Alert,
  ScrollView,
  StyleSheet,
  Switch,
  Platform,
  TouchableOpacity
 } from "react-native";

 // import { email } from "react-native-communications"; // TO be used to send Feedback
import {
  Container,
  View, 
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
} from "native-base";

import firebase from 'firebase'; // Import Firebase login
import { firebaseConfig } from '../../config/firebase_config.js'; // Import of Firebase config

//import styles from "./styles";





class UserPage extends Component {

  constructor() {
    super();
    this.state = {
      notif: false,
    };
  }

  render() {
    return (
      <Container>
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
            <Title>My Account</Title>
          </Body>
          <Right />
      </Header>
      

      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.sectionHeaderText}>ACCOUNT</Text>
            <View style={styles.sectionHeaderUnderline} />
          </View>
          <View style={styles.fieldContainer}>
            <Text>Name</Text>
  
          </View>
          <View style={styles.fieldContainer}>
            <Text>Phone number</Text>

          </View>
          <View style={styles.switchFieldContainer}>
              <Text>Push notifications</Text>
            <Switch // PUSH NOTIFICATIONS TO BE IMPLEMENTED
              onValueChange={() => this.setState({ notif: !this.state.notif })}
              value={this.state.notif}
            />
          </View>
        </View>
        <View>
          
        <TouchableOpacity
            /* onPress={() => {
              email(
                ["datwheat@gmail.com"],
                null,
                null,
                `PÜL Feedback <${this.props.authStore.userId}>`,
                null
              );
            }}*/
            style={styles.fieldContainer}
          >
            <Text>Send feedback</Text>
          </TouchableOpacity>
            <Text></Text> 
            <Text></Text>


          <TouchableOpacity // LOG OUT TO BE IMPLEMENTED
            onPress={() => {
              Alert.alert(
                Platform.OS === "ios" ? "Log Out" : "Log out",
                "Are you sure? Logging out will remove all data from this device.",
                [
                  {
                    text: "Cancel",
                    onPress: () => {},
                    style: "cancel"
                  },
                  {
                    text: "OK",
                    //onPress: () => { }
                  }
                ]
              );
            }}
            style={styles.fieldContainer}
          >
            <Text>Log out</Text>

          </TouchableOpacity>
          
        
        </View>
      </ScrollView>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: colors.eggshell,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    paddingVertical: 16
  },
  sectionHeaderContainer: {
    paddingBottom: 16
  },
  sectionHeaderText: {
    fontSize: 16,
    //color: colors.blue
  },
  sectionHeaderUnderline: {
    marginTop: 8,
    height: 2,
    borderRadius: 4,
    //backgroundColor: colors.blue
  },
  fieldContainer: {
    paddingBottom: 16
  },
  switchFieldContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16
  }
});

export default UserPage;
