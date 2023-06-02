import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBmeswEEQyo_c0ZFmku_6wB-eD6UH92usI",
    authDomain: "react-hooks-blog-edf05.firebaseapp.com",
    projectId: "react-hooks-blog-edf05",
    storageBucket: "react-hooks-blog-edf05.appspot.com",
    messagingSenderId: "363891185155",
    appId: "1:363891185155:web:f8614a7ca15a3fe227e036"
  };

  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();