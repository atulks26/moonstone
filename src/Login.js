import React, { useState } from 'react';
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { auth } from "./firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        navigate('/');
      })
      .catch(error => alert(error.message))
  }


  return (
    <div className='login'>
      <form>
        <h1>Enter Your Details</h1>
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>
        <button type="submit" onClick={signIn}>Log In</button>
      </form>
    </div>
  )


}

export default Login;
