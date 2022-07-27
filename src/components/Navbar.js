import React, { useState } from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
//   const [email,setEmail]=useState("afeefa")
// const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item active">
              <Link className="nav-link" to='/'>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link" to='/abt'>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/staff'>
                Staff
              </Link>
            </li>
            <li className="nav-item">
            <Link  className="nav-link" to='form'>
                Contact Form
              </Link>
            {/* if("afifa" == "afifa"){
                <Link  className="nav-link" to='form'>
                Contact Form
              </Link>
            }
            else{
             navigate("/signup")
            } */}
            </li>
          
          </ul>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 ">
          <ul className="navbar-nav left-list">
            <li className="nav-item">
              <Link  className="nav-link" to='/login'>
                <button className="btn btn-secondary">SignIn</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/signup'>
              <button className="btn btn-secondary">SignUp</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
