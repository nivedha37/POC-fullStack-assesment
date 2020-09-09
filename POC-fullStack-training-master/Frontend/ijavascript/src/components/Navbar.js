import React from 'react'
import '../styles/navbar.css';
import Header from './Header';
import { NavLink } from 'react-router-dom';
 const Navbar = () => {
  return (
    <div className="sidenav">
                <Header />
                <div className="links">
                    <NavLink
                        to="/dashboard">DASHBOARD</NavLink>
                    <NavLink to="/about">ABOUT</NavLink>
                    <NavLink to="/team">TEAM</NavLink>
                </div>
            </div>
  )
}

export default Navbar