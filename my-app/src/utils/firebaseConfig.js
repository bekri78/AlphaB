import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCA9SzZDZH0-1gbgwdEQXClDEzPtu4v5y0',
  authDomain: 'alphab-f35ce.firebaseapp.com',
  databaseURL: 'https://alphab-f35ce-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'alphab-f35ce',
  storageBucket: 'alphab-f35ce.appspot.com',
  messagingSenderId: '717129488631',
  appId: '1:717129488631:web:821a98d77cc56b74e59bf2',
  measurementId: 'G-5G86B4EB0S',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
