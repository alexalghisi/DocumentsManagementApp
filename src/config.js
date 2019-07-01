import Firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAIOvgc0HXdslH-5wwBxnViO16MnEuy1ZA",
  authDomain: "coolapp-8abb2.firebaseapp.com",
  databaseURL: "https://coolapp-8abb2.firebaseio.com",
  projectId: "coolapp-8abb2",
  storageBucket: "coolapp-8abb2.appspot.com",
  messagingSenderId: "285933871333",
  appId: "1:285933871333:web:9e90c6a23cd632a6"
};

let app = Firebase.initializeApp(config);
export const db = app.database();
