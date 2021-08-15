import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDmb-0s4-JbCVIKVy3FlxwEhuIbEcKPiPw",
  authDomain: "dictionary-15190.firebaseapp.com",
  projectId: "dictionary-15190",
  storageBucket: "dictionary-15190.appspot.com",
  messagingSenderId: "32692665508",
  appId: "1:32692665508:web:240fce3e4fb79005857a31",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
