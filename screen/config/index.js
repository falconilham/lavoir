/* eslint-disable prettier/prettier */
import firebase from 'firebase';

let firebaseConfig = {
    apiKey: 'AIzaSyDIt6GppHfl5nITQDQDpGQqCR1Fx8iiQO4',
    authDomain: 'lavoir-wedding.firebaseapp.com',
    databaseURL: 'https://lavoir-wedding.firebaseio.com',
    projectId: 'lavoir-wedding',
    storageBucket: 'lavoir-wedding.appspot.com',
    messagingSenderId: '975334238799',
    appId: '1:975334238799:web:7ea2120026882acc8d183a',
    measurementId: 'G-9W348D6QZM',
};

let Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
