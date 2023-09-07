import React, { useState } from 'react';
import { createAuthUserWithEmailPassword, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './signin.form.style.scss';
import Button from '../button/button.component';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    const resetFormField = () => {
        setFormFields(defaultFormFields);
    }
    const handleSubmit = async (event) =>{
        event.preventDefault()
        if(password !== confirmPassword){
            alert('wrong password comparism')
            return;
        }
        try{
            const {user} = await createAuthUserWithEmailPassword(email,password);
            await createUserDocumentFromAuth(user, {displayName});
            resetFormField();

        }catch(error){
            console.log('test error', error);
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

  return (
    <div className='sign-up-container'>
        <h2>Don't have an account?</h2>
      <span>Sign Up with your Email and password</span>
      
      <form onSubmit={handleSubmit}>

        <FormInput label="Display Name" type='text' required onChange={handleChange} name='displayName' value={displayName} />
        <FormInput label="Email" type='email' required onChange={handleChange} name='email' value={email} />
        <FormInput label="Password" type='password' required onChange={handleChange} name='password' value={password} />
        <FormInput label="Confirm Password" type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} />
       
        <Button type='submit'>Submit form</Button>
      </form>
    </div>
  )
}

export default SignUpForm
