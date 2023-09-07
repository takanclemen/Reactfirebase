// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect,signInWithPopup,GoogleAuthProvider, createUserWithEmailAndPassword} from "firebase/auth";
import {getFirestore,doc,getDoc,setDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPazDKagA2k8VLd5-OvMInDJjeyxm2dG0",
  authDomain: "crown-shopping-5e0b8.firebaseapp.com",
  projectId: "crown-shopping-5e0b8",
  storageBucket: "crown-shopping-5e0b8.appspot.com",
  messagingSenderId: "361666762543",
  appId: "1:361666762543:web:32462a64316d3bbd69b3da"
};

//// Initialize Firebase ////
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({ 
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);
export const signInWithRedirectPopup = () => signInWithRedirect(auth,googleProvider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
const userDocRef = doc(db, 'users', userAuth.uid);
console.log(userDocRef);
const userSnapShot = await getDoc(userDocRef);
console.log(userSnapShot);
console.log(userSnapShot.exists());

if(!userSnapShot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
await setDoc(userDocRef,{displayName,email,createdAt, ...additionalInformation})
    }catch(error){
console.log(error.message);
    }
}
return userDocRef;
};
export const createAuthUserWithEmailPassword = async (email, password) => {
if(!email || !password) return;
return await createUserWithEmailAndPassword(auth,email,password);
}