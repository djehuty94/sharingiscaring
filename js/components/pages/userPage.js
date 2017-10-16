import React, { Component } from "react";
import { 
  ScrollView,
  AsyncStorage,
  StyleSheet,
  Switch,
  Platform,
  TouchableOpacity
 } from "react-native";

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
  Alert,
} from "native-base";

import firebase from 'firebase'; // Import Firebase login
import { firebaseConfig } from '../../config/firebase_config.js'; // Import of Firebase config

//import styles from "./styles";

getUser = () => {
  global.firebaseApp
    .database()
    .ref("users")
    .child(this.props.authStore.userId)
    .once("value")
    .then(userSnap => {
      this.user = userSnap.val();
      this.notifications = this.user.settings.notifications;
    })
    .catch(err => {
      this.props.alertWithType("error", "Error", err.toString());
    });
};

togglePushNotifications = value => {
  Permissions.askAsync(Permissions.REMOTE_NOTIFICATIONS)
    .then(({ status }) => {
      if (status === "granted") {
        Notifications.getExponentPushTokenAsync().then(token => {
          this.notifications = value;
          global.firebaseApp
            .database()
            .ref("users")
            .child(this.props.authStore.userId)
            .update({
              pushToken: token,
              settings: {
                notifications: value
              }
            })
            .then(() => {
              this.getUser();
            })
            .catch(error => {
              this.notifications = !value;
              this.props.alertWithType("error", "Error", error.toString());
            });
        });
      } else {
        this.notifications = !value;
        this.props.alertWithType(
          "error",
          "Error",
          "To stay in the loop, you need to enable push notifications."
        );
      }
    })
    .catch(() => {
      this.notifications = !value;
    });
};


/*componentWillMount() {
  this.getUser();
}*/

class UserPage extends Component {


  render() {
    return (
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
            <TouchableOpacity
              onPress={() => this.togglePushNotifications(!this.notifications)}
            >
              <Text>Push notifications</Text>
            </TouchableOpacity>
            <Switch
              onValueChange={this.togglePushNotifications}
              value={this.notifications}
            />
          </View>
        </View>
        <View>
          
            <Text>Send feedback</Text>

            <Text>Log out</Text>
          
        
        </View>
      </ScrollView>
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
