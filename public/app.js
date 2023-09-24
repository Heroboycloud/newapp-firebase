const firebaseConfig = {
    apiKey: "AIzaSyARWfK9-KxrY12T5uhGmE_m8qXv_edM1kQ",
    authDomain: "newapp-70d.firebaseapp.com",
    projectId: "newapp-70d",
    storageBucket: "newapp-70d.appspot.com",
    messagingSenderId: "1281116569",
    appId: "1:1281116569:web:47302e867ec252a65deb08"
  };

  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
console.log(firebase);
const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

/// Sign in event handlers

signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();
const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');
const userDetails = document.getElementById('userDetails');

auth.onAuthStateChanged(user => {
    if (user) {
        // signed in
        whenSignedIn.hidden = false;
        whenSignedOut.hidden = true;
        userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;
    } else {
        // not signed in
        whenSignedIn.hidden = true;
        whenSignedOut.hidden = false;
        userDetails.innerHTML = '';
    }
})
