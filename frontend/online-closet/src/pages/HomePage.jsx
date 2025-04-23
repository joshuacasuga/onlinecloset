import React from 'react'
import { useLocation } from 'react-router-dom'

const HomePage = () => {
  const location=useLocation()

  return (
    <div className='home'>
      <h1>Hello {location.state.id}, welcome to your Online Closet</h1>
    </div>
  )
}

export default HomePage