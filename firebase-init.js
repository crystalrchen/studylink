 var config = {
  apiKey: "AIzaSyDmgkDFE0gtzLA0gkGA_cxdsTVF5wyCfXc",
  authDomain: "studyapp-5a185.firebaseapp.com",
  projectId: "studyapp-5a185",
  storageBucket: "studyapp-5a185.appspot.com",
  messagingSenderId: "300455633199",
  appId: "1:300455633199:web:d7ce00019ff9112f8f81da",
  measurementId: "G-251CH3FRHQ"
}; 
firebase.initializeApp(config);
// make auth and firestore references
const auth = firebase.auth();

const db = firebase.firestore();

var provider = new firebase.auth.GoogleAuthProvider();

//update firestore settings
db.settings({ timestampsInSnapshots : true})