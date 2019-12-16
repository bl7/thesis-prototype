import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA4rlfU9a35xb3As7gYicF7q7rB_30Vuxg",
  authDomain: "thesis-2-19-19.firebaseapp.com",
  databaseURL: "https://thesis-2-19-19.firebaseio.com",
  projectId: "thesis-2-19-19",
  storageBucket: "thesis-2-19-19.appspot.com",
  messagingSenderId: "491771799580",
  appId: "1:491771799580:web:f33fff8c8b17e68037d7d9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
