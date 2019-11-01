import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config ={
    apiKey: "AIzaSyAR2ZETvYbtF13F-nIsb-wbf0zohs6N4YI",
    authDomain: "trillo-db.firebaseapp.com",
    databaseURL: "https://trillo-db.firebaseio.com",
    projectId: "trillo-db",
    storageBucket: "trillo-db.appspot.com",
    messagingSenderId: "256311964631",
    appId: "1:256311964631:web:5d21d07e95bb78f9141192",
    measurementId: "G-1CYFV6ZEP6"
  }
  firebase.initializeApp(config);
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth)return;
  }
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider()
  // provider.setCustomParameters({'prompt':'select account'});
  export const signInWithGoogle =()=> auth.signInWithPopup(provider)

  
  export default firebase;