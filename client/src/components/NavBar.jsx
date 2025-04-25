import React, { useContext } from 'react'
import { NavLink } from 'react-router';
import { useAuth } from '../hooks/useAuth';
// import { AuthContext } from '../contexts/AuthContext';

export default function NavBar() {
  // const {isLoggedin} = useContext(AuthContext);
  const {isLoggedin, logout, authenticate} = useAuth();

  return (
    <div className="navbar bg-blue-950 text-neutral-content shadow-[0px_5px_5px_black] fixed top-0">
        <div className="flex-1">
            <NavLink to="/"><button className=" btn btn-ghost hover:text-blue-900 hover:text-shadow-none text-xl text-shadow-[2px_2px_0px_black]">AttBlogs</button></NavLink>
        </div>
        
        <div className="flex-none">
          {
            (authenticate())?
              <a className="btn text-blue-950" onClick={logout}>Logout</a>
            :
              <ul className="menu menu-horizontal">
                  <li><NavLink to="/login" className="btn">Login</NavLink></li>
                  <li><NavLink to="/register" className="btn-accent">Register</NavLink></li>
              </ul>
          }
        </div>
    </div>
  )
}
