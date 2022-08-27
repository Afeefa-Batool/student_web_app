import "./App.css";
import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/login/Login";
import Siginup from "./components/siginup/Siginup";
import Contact from "./components/contactform/Contact";
import Usertable from "./components/Usertable";

import { Routes, Route } from "react-router-dom";
import { ToastContainer, Zoom, Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import data from "./data";
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);
  return (
    <>
      <Navbar user={user}/>
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Siginup />} />
        <Route path="/form" element={<Contact />} />
      </Routes>
      <Usertable />
      <Footer />
    </>
  );
}

export default App;
