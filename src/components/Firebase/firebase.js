import app from 'firebase/app';
import 'firebase/auth';
// my web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBNDIBj9KREpfoQAH2obbPjhqMRTHCxdE8",
    authDomain: "zoyasproject.firebaseapp.com",
    databaseURL: "https://zoyasproject.firebaseio.com",
    projectId: "zoyasproject",
    storageBucket: "",
    messagingSenderId: "85860303791",
    appId: "1:85860303791:web:e1a628e6ca1efaad"
  };
  // Initialize Firebase
  //app.initializeApp(firebaseConfig);


  class Firebase {
    constructor() {
      app.initializeApp(firebaseConfig);

      this.auth = app.auth();
    }


  // *** Auth API ***

doCreateUserWithEmailAndPassword = (email, password) =>
  this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
     this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

   doPasswordUpdate = password =>
     this.auth.currentUser.updatePassword(password);
}


  export default Firebase;
