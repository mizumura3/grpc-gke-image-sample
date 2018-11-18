import firebase from "firebase";
import { firebaseConfig } from "./config";
import { firestoreSettings } from "./config";

// firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);

// firestore
firebaseApp.firestore().settings(firestoreSettings);
export const firestoreApp = firebaseApp.firestore();
