import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from "axios"

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const RegisterPage = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function submit(e){
      e.preventDefault();

      try {
        console.log(`${BACKEND_URL}`)
        const response = await axios.post(`${BACKEND_URL}/api/user`, {
          firstName,
          lastName,
          email,
          username,
          password,
        });
        console.log("Server response:", response.data);

        if (response.data.success) {
          console.log(`${username} successfully registered!`);
        } else {
          console.error("Account creation failed:", response.data.message);
        }
      } catch(e) {
        if (error.response){
          console.error("Server responded with error:", error.response.data)
        } else {
          console.error(`Error registering ${username}`, e.message);
        }
      }
    }
  

  return (
    <div className='register'>
      <h1>Register</h1>

      <form>
        <input type="firstname" onChange={(e)=>{setFirstName(e.target.value)}} placeholder='First Name'/>
        <input type="lastname" onChange={(e)=>{setLastName(e.target.value)}} placeholder='Last Name'/>
        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
        <input type="username" onChange={(e)=>{setUsername(e.target.value)}} placeholder='Username'/>
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
        <input type="submit" onClick={submit}/>  
      </form>

      <br/>
      <p>Already have an account?</p>
      <br/>

      <Link to="/login">Login</Link>
    </div>
  )
}

export default RegisterPage