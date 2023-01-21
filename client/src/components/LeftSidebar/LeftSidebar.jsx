import React from 'react'

import './LeftSidebar.css'
import { NavLink } from 'react-router-dom';
import GlobIcon from '../../assets/Globe.svg';

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
        <div className="side-nav">
            <NavLink to='/' className='side-nav-links home-align' activeclass="active">
                 <p>Home</p>
            </NavLink> 
        </div>
        <div className="side-nav-div">
            <div className='public'><p>PUBLIC</p></div>
            <NavLink to='/Questions' className="side-nav-links" activeclass="active">
                <img src={GlobIcon} alt="Globe" />
                <p style={{paddingLeft:'10px'}}>Questions</p>
            </NavLink>
            <NavLink to='/Tags' className="side-nav-links" activeclass="active">
                <p>Tags</p>
            </NavLink>
            <NavLink to='/Users' className="side-nav-links" activeclass="active">
                <p>Users</p>
            </NavLink>
        </div>
    </div>
  )
}

export default LeftSidebar
