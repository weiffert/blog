import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import Rebase from "re-base";

const config = {
  apiKey: "YOUR API KEY",
  authDomain: "YOUR AUTH DOMAIN",
  databaseURL: "YOUR DATABASE URL",
  projectId: "YOUR PROJECT ID",
  storageBucket: "YOUR STORAGE BUCKET",
  messagingSenderId: "YOUR MESSAGING SENDER ID"
};

let app = firebase.initializeApp(config);
let db =  firebase.database(app);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = app.auth();

export default Rebase.createClass(db);