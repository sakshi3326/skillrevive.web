import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIlFxBoJQD1VTZIQtm3bwCiL5yuPZvC18",
  authDomain: "skillrevive-1b98d.firebaseapp.com",
  projectId: "skillrevive-1b98d",
  storageBucket: "skillrevive-1b98d.appspot.com",
  messagingSenderId: "873324205717",
  appId: "1:873324205717:web:394854bcee4fdb57002d9c",
  measurementId: "G-W2N0V04ZER",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const firebaseAuth = getAuth(app);

//authnetticate with google
const signInWithGoogle = async () => {
  try {
    const response = await signInWithPopup(firebaseAuth, googleProvider);
    const user = response.user;
    const q = query(collection(db, "user"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "user"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (error) {
    console.log(error.message);
    alert(error.message);
  }
};
//login with email and password
const loginWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(firebaseAuth, email, password);
  } catch (error) {
    console.log(error.message);
  }
};

//register with email and password
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    const user = response.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error.message);
  }
};
// reset the password
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(firebaseAuth, email);
    alert("Password reset email is sent!");
  } catch (error) {
    console.log(error.message);
  }
};
//logout
const logOut = () => {
  signOut(firebaseAuth);
};

export {
  firebaseAuth,
  registerWithEmailAndPassword,
  signInWithGoogle,
  db,
  signInWithEmailAndPassword,
  sendPasswordReset,
  logOut,
  loginWithEmailAndPassword,
};
