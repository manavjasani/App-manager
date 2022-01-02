import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import firebase from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAgyAy8iNEtI97kUsE05-JkzFPng1Zw3TE",
  authDomain: "app-manager-28ce3.firebaseapp.com",
  //   databaseURL: "https://app-manager-28ce3-default-rtdb.firebaseio.com",
  projectId: "app-manager-28ce3",
  storageBucket: "app-manager-28ce3.appspot.com",
  messagingSenderId: "583892804222",
  appId: "1:583892804222:web:0a6b619180beab3a722e2f",
  measurementId: "G-MKHW4Z4NYK",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);
