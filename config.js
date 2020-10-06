import firebase from 'firebase';
require('@firebase/firestore');

/*var firebaseConfig = {
    apiKey: "AIzaSyCmMxvac_obZnPh3DNy2GuX3n5q_IeeW6c",
    authDomain: "book-santa-fa416.firebaseapp.com",
    databaseURL: "https://book-santa-fa416.firebaseio.com",
    projectId: "book-santa-fa416",
    storageBucket: "book-santa-fa416.appspot.com",
    messagingSenderId: "602538203039",
    appId: "1:602538203039:web:0cc8515a905c53c9fa4faa"
  };*/
  var firebaseConfig = {
    apiKey: "AIzaSyDp-2eAi_7g1dniEv6MaJzceLQ8x4S5A04",
    authDomain: "barter-system-1507b.firebaseapp.com",
    databaseURL: "https://barter-system-1507b.firebaseio.com",
    projectId: "barter-system-1507b",
    storageBucket: "barter-system-1507b.appspot.com",
    messagingSenderId: "541883154877",
    appId: "1:541883154877:web:e3808dac87620cb1c612d4"
  };
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();
