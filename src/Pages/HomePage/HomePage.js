import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'
const HomePage = () => {
  return (
    <div className='background'>
      <div className='header'>
        <h1>HRnet</h1>
        <Link to='/Employees'>View Current Employees</Link>
      </div>
      <div className='form-div'>
    
      </div>
    </div>  
  )
}

export default HomePage