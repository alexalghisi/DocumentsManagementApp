import Firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDKdEJ8scNUPpAdWASBnbwei7Uu5Y9vmVk",
  authDomain: "my-project-1506330006740.firebaseapp.com",
  databaseURL: "https://my-project-1506330006740.firebaseio.com",
  projectId: "my-project-1506330006740",
  storageBucket: "",
  messagingSenderId: "20923554898",
  appId: "1:20923554898:web:acdf7e0699b42fa4"
};

let app = Firebase.initializeApp(config);
export const db = app.database();
