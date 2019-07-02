import Firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCPmA6NTbVD7xFakN-NTVbVfxO5l3-PEXs",
  authDomain: "coolapp-c6f53.firebaseapp.com",
  databaseURL: "https://coolapp-c6f53.firebaseio.com",
  projectId: "coolapp-c6f53",
  storageBucket: "coolapp-c6f53.appspot.com",
  messagingSenderId: "293356096567",
  appId: "1:293356096567:web:2179fc497ab17325"
};

let app = Firebase.initializeApp(config);
export const db = app.database();
