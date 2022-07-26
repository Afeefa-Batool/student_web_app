import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Body from "./components/Body";
import Teachercard from "./components/Teachercard";
import Footer from "./components/Footer";
import Login from "./components/login/Login";
import Siginup from "./components/siginup/Siginup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    
      <Navbar />
      <Body />
      <Teachercard />

      <Routes>
        <Route exact path="/" element={<Home />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Siginup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
