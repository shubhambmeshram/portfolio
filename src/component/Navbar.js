import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'


function Navbar() {
  return (
    <div>
        <nav>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to="about">About Us</NavLink></li>
                <li><NavLink to="product">Product</NavLink></li>
                <li><NavLink to="contact">Contact Us</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar