import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBoYHql9aL4Nk9Gn_4UXIhPKClgPVhX1nE",
    authDomain: "one-buy.firebaseapp.com",
    databaseURL: "https://one-buy.firebaseio.com",
    projectId: "one-buy",
    storageBucket: "one-buy.appspot.com",
    messagingSenderId: "38920921328"
};
firebase.initializeApp(config);
const database = firebase.database();
database.ref().set({
    name: 'jayanth babu'
});
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };