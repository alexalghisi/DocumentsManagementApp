import Firebase from 'firebase';
let config = {
  apiKey: 'AIzaSyCPmA6NTbVD7xFakN-NTVbVfxO5l3-PEXs\n',
  authDomain: 'rnfirebXXX-XXXX.firebaseapp.com',
  databaseURL: 'rnfirebXXX-XXXX.firebaseapp.com',
  projectId: 'coolapp-c6f53',
  storageBucket: 'rnfirebase-XXXX.appspot.com',
  messagingSenderId: 'XXXXXXX'
};
let app = Firebase.initializeApp(config);
export const db = app.database();
