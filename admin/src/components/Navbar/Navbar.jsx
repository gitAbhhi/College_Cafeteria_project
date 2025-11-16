import React from 'react'
import './Navbar.css'
import { assets } from './../../assets/assets';

const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={assets.vlogo} alt="" />
        <h1>Admin Dashboard</h1>
    </div>
  )
}

export default Navbar