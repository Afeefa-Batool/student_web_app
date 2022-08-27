import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
const Navbar = (props) => {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/abt">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/staff">
                Staff
              </Link>
            </li>
            {props.user ? (
              <li className="nav-item">
                <Link className="nav-link" to="form">
                  Contact Form
                </Link>
              </li>
        
              
            ) : (
              <>
                <li className="nav-item"></li>
              </>
            )}
          </ul>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 ">
          <ul className="navbar-nav left-list">
            {props.user ? (
              <li>
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => {
                    auth.signOut();
                    navigate("/signup");
                  }}
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <button className="btn btn-secondary">SignIn</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    <button className="btn btn-secondary">SignUp</button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
