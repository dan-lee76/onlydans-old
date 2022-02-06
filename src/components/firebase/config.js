import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCCBuXcBA4bMX6lVmuONDHMRPk4xG9qOf4",
  authDomain: "onlydans.firebaseapp.com",
  databaseURL: "https://onlydans-default-rtdb.firebaseio.com",
  projectId: "onlydans",
  storageBucket: "onlydans.appspot.com",
  messagingSenderId: "1095370119497",
  appId: "1:1095370119497:web:cc6e06d527995f70d52298"
};

  const app = initializeApp(firebaseConfig);

  // Get a reference to the database service
  const database = getDatabase(app);

  export default database;