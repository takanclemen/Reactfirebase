import React from 'react'
import { auth, signInWithGooglePopup, createUserDocumentFromAuth,signInWithRedirectPopup } from '../../utils/firebase/firebase.utils'
import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../form-table/form.component';

const SignIn = () => {
// useEffect(async () => {
//   const response = await getRedirectResult(auth);
//   if(response) {
//     const userDocRef = await createUserDocumentFromAuth(response.user)
//   }
// }, [])

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(user)
       
    }
   
  return (
    <div>
      Sign in Component here.
      <button onClick={logGoogleUser}>Log in Google method</button>
      <SignUpForm />
    </div>
  )
}

export default SignIn;
