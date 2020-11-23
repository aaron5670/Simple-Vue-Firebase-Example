import firebase from 'firebase/app';
import 'firebase/firestore';

export const db = firebase.initializeApp({
    apiKey: "YOUR-API-KEY",
    authDomain: "example.firebaseapp.com",
    databaseURL: "https://example.firebaseio.com",
    projectId: "example-project-17b61",
    storageBucket: "example.appspot.com",
    messagingSenderId: "123456",
    appId: "1:1234567890"
}).firestore();
