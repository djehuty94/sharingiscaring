//DOCUMENTATION
// https://firebase.google.com/docs/auth/web/manage-users

import firebase from 'firebase'; // Import Firebase login
import { firebaseConfig } from './config/firebase_config.js'; // Import of Firebase config

//console.log(firebaseConfig);
//firebase.initializeApp(firebaseConfig);


//Checked if user is logged

//Return the corresponding boolean true/false


//Check if user is logged in and return the session variable user
export const isSignedIn = () =>{
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              console.log("checked logged true");
              console.log(user);
              resolve(true);
            } else {
              // No user is signed in.
              console.log("checked logged false");
              console.log(false);
              resolve(true); // TO BE CHANGED to true to bypass login
            }
        });
    });
};

export const onSignOut =() => {
    firebase.auth().signOut().then(function() {
    console.log("Sign Out successfull");
    // Sign-out successful.
  }, function(error) {
    console.log(error);
    // An error happened.
  });
}