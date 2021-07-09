import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCDwA1KWdDQZm8P0hm5rY2kFIMSGgB82yM",
    authDomain: "fir-officechat.firebaseapp.com",
    projectId: "fir-officechat",
    storageBucket: "fir-officechat.appspot.com",
    messagingSenderId: "781387439242",
    appId: "1:781387439242:web:cb1a1aaead84c8ab826173",
    measurementId: "G-P5CV1RQ7PE"
}

firebase.initializeApp(config);

export const auth = firebase.auth;
export const fs = firebase.firestore();
export const db = firebase.database();