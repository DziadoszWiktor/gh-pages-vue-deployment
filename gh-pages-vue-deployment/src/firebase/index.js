/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage, uploadBytes } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpRlGDGuk1JUXi0VhvSpVcJwcCm1Q2ep8",
  authDomain: "cars-cf954.firebaseapp.com",
  projectId: "cars-cf954",
  storageBucket: "cars-cf954.appspot.com",
  messagingSenderId: "943137422806",
  appId: "1:943137422806:web:60df9a425e9cf25a26b877"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage();

export { storage }
*/
//import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
//import ref from "firebase/storage";

import { getStorage,ref } from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyDpRlGDGuk1JUXi0VhvSpVcJwcCm1Q2ep8",
  authDomain: "cars-cf954.firebaseapp.com",
  projectId: "cars-cf954",
  storageBucket: "cars-cf954.appspot.com",
  messagingSenderId: "943137422806",
  appId: "1:943137422806:web:60df9a425e9cf25a26b877"
};

const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(app);

const storage = getStorage();

/*
var uuid = require("uuid");
var id = uuid.v4();
//console.log(id);

const refImg = ref(storage, 'cars/'+id+'.jpg');
*/

export { db };
export { storage };
export { ref };
//export { refImg };
//export { storage };
//export { ref };