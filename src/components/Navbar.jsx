import React from 'react';
import logo from "../assets/logo.png"
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <img src="../images/logo.png" alt="" />
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

            <li>
              <NavLink className={({ isActive }) => isActive ? 'text-indigo-600' : ''} to="/">Home
              </NavLink> </li>
            <li><NavLink className={({ isActive }) => isActive ? 'text-indigo-600' : ''} to="/bookings">Bookings</NavLink> </li>
            <li> <NavLink className={({ isActive }) => isActive ? 'text-indigo-600' : ''} to="/blogs">

              Blogs

            </NavLink> </li>
            <li> <NavLink className={({ isActive }) => isActive ? 'text-indigo-600' : ''} to="/*">

              Contacts

            </NavLink></li>
          </ul>
        </div>
        <div className="flex items-center gap-0.5">
          <img src={logo} alt="" />
          <a href="/" className="btn btn-ghost text-[2rem] font-extrabold">Dochelp</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink className={({ isActive }) => isActive ? 'text-indigo-600' : ''} to="/">Home
            </NavLink> </li>
          <li><NavLink className={({ isActive }) => isActive ? 'text-indigo-600' : ''} to="/bookings">Bookings</NavLink> </li>
          <li> <NavLink className={({ isActive }) => isActive ? 'text-indigo-600' : ''} to="/blogs">

            Blogs

          </NavLink> </li>
          <li> <NavLink className={({ isActive }) => isActive ? 'text-indigo-600' : ''} to="/*">

            Contacts

          </NavLink></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary">Emergency</a>
      </div>
    </div>
  );
};

export default Navbar;