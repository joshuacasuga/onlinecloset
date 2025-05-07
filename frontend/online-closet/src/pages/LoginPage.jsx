import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const LoginPage = () => {
    //const [firstName, setFirstName] = useState("");
    //const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    //const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();

    async function submit(e){
      e.preventDefault();

      try {
        console.log(`${BACKEND_URL}`)
        const response = await axios.post(`${BACKEND_URL}/api/user/login`, {
          email, password
        });
        console.log("Server response:", response.data);

        if(response.data.success) {
          console.log(`${response.data.username} successfully logged in.`);
        } else {
          console.log("Log in unsuccessful:", response.data.message);
        }
        // .then(res => {
        //   if(res.data="Email exists in database."){
        //     history("/", {state: {id: email}})
        //   }
        //   else if(res.data="Email does not exist in database."){
        //     alert("Incorrect email or password.")
        //   }
        // });
      } catch(e) {
        console.log(e);
      }
    }
  

  return (
    <div className='login'>
      <h1>Login</h1>

      <form onSubmit={submit}>
        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
        <input type="submit" value="Login"/>  
      </form>

      <br/>
      <p>Don't have an account?</p>
      <br/>

      <Link to="/register">Register</Link>
    </div>
  )
}

export default LoginPage