import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDD9qrf7_wARkZWQoq1NVkq0UuTdbcOIyY",
    authDomain: "angularfiredb-684f0.firebaseapp.com",
    databaseURL: "https://angularfiredb-684f0-default-rtdb.firebaseio.com",
    projectId: "angularfiredb-684f0",
    storageBucket: "angularfiredb-684f0.appspot.com",
    messagingSenderId: "655604399671",
    appId: "1:655604399671:web:efb4fd37a4a4a2b6cec9b2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore()
export default firebase