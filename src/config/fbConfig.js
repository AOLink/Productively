import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyALlButvHr1NUojYtTCwYVBmLoyLTq4LT4",
    authDomain: "productively-ffc5f.firebaseapp.com",
    projectId: "productively-ffc5f",
    storageBucket: "productively-ffc5f.appspot.com",
    messagingSenderId: "814181125798",
    appId: "1:814181125798:web:608f7238045c963eb92e67"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})
  
  export default firebase;