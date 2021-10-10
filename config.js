import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = { apiKey: "AIzaSyA3k_WiRGTJK5t3O4mEP8VOERtxKqmLSQ0",
                        authDomain: "chotu-868c1.firebaseapp.com",
                        databaseURL:"http://chotu-868c1.firebaseio.com"
                        projectId: "chotu-868c1", 
                        storageBucket: "chotu-868c1.appspot.com",
                        messagingSenderId: "982811372065",
                        appId: "1:982811372065:web:48f05c2bc6b9d7020b1160" };
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

