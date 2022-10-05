import firebase from 'firebase/compat/app';

import 'firebase/compat/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCprnlXXguDw4cmm-knf07S_6gRYlBDfZU",
    authDomain: "chap-app-5757f.firebaseapp.com",
    projectId: "chap-app-5757f",
    storageBucket: "chap-app-5757f.appspot.com",
    messagingSenderId: "507663666368",
    appId: "1:507663666368:web:3a89e85195d8010e3e3125",
    measurementId: "G-QT1N67XN4E"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();
const db = firebase.firestore();

auth.useEmulator('http://localhost:9099');
if (window.location.hostname === 'localhost') {
    db.useEmulator('http://localhost', 8080);
}

export { db, auth }

export default firebase

