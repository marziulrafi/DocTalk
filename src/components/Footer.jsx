import React from 'react';
import logo from "../assets/logo.png"
import x from "../assets/x.png";
import facebook from "../assets/facebook (1).png";
import linkedin from "../assets/linkedin.png";
import { Link } from "react-router";


const Footer = () => {
    return (
        <div className="mt-10">
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <div className="flex items-center gap-0.5">
                  <img src={logo} alt="" />
                  <a className="btn btn-ghost text-[2rem] font-extrabold">Dochelp</a>
                </div>
                <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[1.1rem] font-medium pb-10 border-b-2 border-[#00000080] border-dashed">
            <Link to="/">
              <li>
                <a>Home</a>
              </li>
            </Link>
            <Link to="/bookings">
              <li>
                <a>Bookings</a>
              </li>
            </Link>
            <Link to="/blogs">
              <li>
                <a>Blogs</a>
              </li>
            </Link>
            <li>
              <a>Contact US</a>
            </li>
          </ul>
        </div>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.facebook.com/mahi.labib.12036" target="_blank">
              <img src={facebook} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/mahir-mohammed-labib-bb3085209/" target="_blank">
              <img src={linkedin} alt="" />
            </a>
            <a href="https://x.com/Labib_591" target="_blank">
              <img src={x} alt="" />
            </a>
            
          </div>
        </nav>
        
      </footer>
    </div>
    );
};

export default Footer;