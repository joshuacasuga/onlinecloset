import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"

const LoginPage = () => {
    //const [firstName, setFirstName] = useState("");
    //const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    //const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e){
      e.preventDefault();

      try {
        await axios.post("http://localhost:5173/login", {
          email, password
        });
      } catch(e) {
        console.log(e);
      }
    }
  

  return (
    <div className='login'>
      <h1>Login</h1>

      <form action="POST">
        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
        <input type="submit" onClick={submit}/>  
      </form>

      <br/>
      <p>Don't have an account?</p>
      <br/>

      <Link to="/register">Register</Link>
    </div>
  )
}

export default LoginPage