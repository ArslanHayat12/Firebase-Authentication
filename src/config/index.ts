import  firebase from "firebase";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyAp5MGF0MjTlkb9Q5RhfVk8_T2EciDtkH4",
  authDomain: "authentication-de0dd.firebaseapp.com",
  databaseURL: "https://authentication-de0dd.firebaseio.com",
  projectId: "authentication-de0dd",
  storageBucket: "authentication-de0dd.appspot.com",
  messagingSenderId: "666664879122",
  appId: "1:666664879122:web:4b85853c796d73bc"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
export {firebase};
export const auth = firebase.auth();
export const db = firebase.database();