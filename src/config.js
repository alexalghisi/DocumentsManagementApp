import Firebase from 'firebase';
const config = {
  apiKey: "AIzaSyAIOvgc0HXdslH-5wwBxnViO16MnEuy1ZA",
  authDomain: "coolapp-8abb2.firebaseapp.com",
  databaseURL: "https://coolapp-8abb2.firebaseio.com",
  projectId: "coolapp-8abb2",
  storageBucket: "",
  messagingSenderId: "285933871333",
};
const app = Firebase.initializeApp(config);
export const db = app.database();