import React from 'react'
import "./Register.css";
import {auth} from "./firebase";
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        if(auth) {
          navigate('/regform');
        }
      })
      .catch(error => alert(error.message));
  }

  return (
    <div className='login'>
      <form>
        <h1>Register</h1>

        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>

        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Password'/>
        
        <button onClick={register} className='register_button'>Sign Up</button>
      </form>
    </div>
  )


}

export default Register;
