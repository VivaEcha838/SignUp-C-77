import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCDcrLabmEfQ6f-2DLTPRRmClf_2f_98hA",
    authDomain: "book-santa-bcc91.firebaseapp.com",
    projectId: "book-santa-bcc91",
    storageBucket: "book-santa-bcc91.appspot.com",
    messagingSenderId: "296046987798",
    appId: "1:296046987798:web:ff46cf154bc6486f104337"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()