import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
const Header = () => {
  const location=useLocation();
  // console.log(location)
  return (
    <div className="header">
      <h1>HRnet</h1>
      <Link to="/Employees">View Current Employees</Link>
      {location.pathname==="/Employees"?<Link to="/">Add New Employee</Link>:""}
    </div>
  )
}

export default Header
