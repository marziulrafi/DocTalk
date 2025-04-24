import React from "react";
import { NavLink } from "react-router";
import X from "../assets/x.png";
import facebook from "../assets/facebook (1).png";
import linkedin from "../assets/linkedin.png";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="mt-10">
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <div className="flex items-center gap-0.5">
                  <img src={logo} alt="" />
                  <a className="btn btn-ghost text-[2rem] font-extrabold">DocTalk</a>
                </div>
                <div className="navbar-center flex">
          <ul className="menu menu-horizontal px-1  font-medium pb-10 border-b-2">
          <li>
              <NavLink className={({isActive})=>isActive?'text-indigo-600' : ''} to="/">Home
            </NavLink> </li>
            <li><NavLink className={({isActive})=>isActive?'text-indigo-600' : ''}  to="/bookings">Bookings</NavLink> </li>
            <li> <NavLink className={({isActive})=>isActive?'text-indigo-600' : ''} to="/blogs">
             
              Blogs
              
            </NavLink> </li>
            <li> <NavLink className={({isActive})=>isActive?'text-indigo-600' : ''} to="/*">
             
               Contacts
              
            </NavLink></li>
          </ul>
        </div>
    
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com/marziul.rafi" target="_blank">
              <img src={facebook} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/marziulkarim" target="_blank">
              <img src={linkedin} alt="" />
            </a>
            <a href="https://x.com/_marziul_" target="_blank">
              <img src={X} alt="" />
            </a>
            
          </div>
      
      </footer>
    </div>
  );
};

export default Footer;
