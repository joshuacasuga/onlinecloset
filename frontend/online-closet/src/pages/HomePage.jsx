import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const HomePage = () => {
  //const location=useLocation()

  return (
    <div className='home'>
      <Link to="/register">Register</Link>
      <br/>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default HomePage