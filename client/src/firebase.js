import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD4ZA1mmNQ42_XDPgczLxoQWjg1G4C3_Ys",
  authDomain: "splitwise-clone-ea9a2.firebaseapp.com",
  projectId: "splitwise-clone-ea9a2",
  storageBucket: "splitwise-clone-ea9a2.appspot.com",
  messagingSenderId: "636225333027",
  appId: "1:636225333027:web:390880c608375d97d74e96",
  measurementId: "G-M7R5MYH9NL"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { db, auth, provider };