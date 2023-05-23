// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getFirestore, collection, getDocs
} from 'firebase/firestore'
// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCzH-sha47XkpxfQSkj2LjezrA3RLVYfew",
  authDomain: "simple-claims-portal-7dfb3.firebaseapp.com",
  projectId: "simple-claims-portal-7dfb3",
  storageBucket: "simple-claims-portal-7dfb3.appspot.com",
  messagingSenderId: "1057792525656",
  appId: "1:1057792525656:web:7b44428febc5f96123512d"
};

// Initialize Firebase
const app = initializeApp(config);
const auth = getAuth();

//init services
const db=getFirestore()

//collection ref
const colRef=collection(db,'Cars')

//get collection data
getDocs(colRef)
.then((snapshot)=>{
    let Cars=[]
    snapshot.docs.forEach((doc)=>{
        Cars.push({...doc.data(), id:doc.id})
    })
    console.log(Cars)
})
.catch(err=>{
    console.log(err.message)
})



/*************************************************************************google sign in/up/out******************************************************* */

const provider = new GoogleAuthProvider();

// Function to handle user sign-in with Google
function signInWithGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // Redirect to index.html on successful sign-in
      window.location.href = "index.html";
    })
    .catch((error) => {
      // Handle errors here
      console.log(error);
    });
}

// Function to handle user sign-up with Google
function signUpWithGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // Redirect to profile.html on successful sign-up
      window.location.href = "profile.html";
    })
    .catch((error) => {
      // Handle errors here
      console.log(error);
    });
}

document.getElementById("loginBtn").addEventListener("click", signInWithGoogle);
document.getElementById("signupBtn").addEventListener("click", signUpWithGoogle);