import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9bFbcSK3OJJkIFrDN_NEGo5teRKn3mek",
    authDomain: "robinhood-clone-e0b15.firebaseapp.com",
    databaseURL: "https://robinhood-clone-e0b15.firebaseio.com",
    projectId: "robinhood-clone-e0b15",
    storageBucket: "robinhood-clone-e0b15.appspot.com",
    messagingSenderId: "290995844695",
    appId: "1:290995844695:web:3f44906a3d29e781dbd512",
    measurementId: "G-1TC1JVVPZX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };