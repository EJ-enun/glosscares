import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu3m7kuoUcJwHtptyY3N2hWLTo8Y_KJzM",
  authDomain: "glosscare-a7687.firebaseapp.com",
  databaseURL: "https://glosscare-a7687-default-rtdb.firebaseio.com",
  projectId: "glosscare-a7687",
  storageBucket: "glosscare-a7687.appspot.com",
  messagingSenderId: "747373048559",
  appId: "1:747373048559:web:52bac44a90ce563931211a",
  measurementId: "G-6D0XK3GQQJ"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
