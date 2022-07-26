import React from "react";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to='/'>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="//codeply.com">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Staff
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Form
              </a>
            </li>
          
          </ul>
        </div>
        <div className="mx-auto order-0">
          <a className="navbar-brand mx-auto" href="#">
            Navbar 2
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".dual-collapse2"
          >
            <span className="navbar-toggler-icon" />
          </button>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to='/login'>
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
