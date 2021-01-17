import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAQhUo2fFMDqq5E9pUcVPZ7pBTmjhmkFLQ",
    authDomain: "imassengerclone.firebaseapp.com",
    projectId: "imassengerclone",
    storageBucket: "imassengerclone.appspot.com",
    messagingSenderId: "465160319451",
    appId: "1:465160319451:web:e24a4079713faf25af77fe"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;