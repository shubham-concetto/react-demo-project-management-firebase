import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAAz0I_wK3_WJG6cSKvpPH_kgpXA6dr5J4",
    authDomain: "shubham-project-manager.firebaseapp.com",
    projectId: "shubham-project-manager",
    storageBucket: "shubham-project-manager.appspot.com",
    messagingSenderId: "370830708919",
    appId: "1:370830708919:web:c7e8f30c569ced3a16fd32"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;