import React from "react";
import "../login/login.css";
import {auth} from '../../firebase'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const navigate = useNavigate();
  //getting email or password
  // const userEmail = "admin";

  // const userPassword = "1234";
  //function to submit form data while pressing submit button
  const onSubmit = async (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
    setPassword("");
    setEmail("");
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      toast.success(`welcome ${email}`);
      navigate("/");
    } catch (err) {
      toast.error("somthing wrong");
    }
  };
  return (
    <div>
      <div className="container col-lg-7">
        <h1 className="text-center">Login Form</h1>
        <section className=" text-center text-lg-start">
          <div className="card mb-3">
            <div className="row g-0 d-flex align-items-center">
              <div className="col-lg-4 d-none d-lg-flex">
                <img
                  src="https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg?w=826&t=st=1658824017~exp=1658824617~hmac=5a4f2f5ac170819cf4e29535b01ffe42857a8c0d2f29220dcf2bd658c0b86cb8"
                  alt="Trendy Pants and Shoes"
                  className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
                />
              </div>
              <div className="col-lg-8">
                <div className="card-body py-5 px-md-5">
                  <form onSubmit={onSubmit}>
                    {/* Email input */}
                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example1">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        autoComplete="off"

                      />
                    
                    </div>
                    {/* Password input */}
                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example2">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="off"
                        value={password}
                      />
                      <div className="col-auto mt-3">
            <button type="submit" className="btn btn-primary mb-3">
              Submit
            </button>
          </div>
                    </div>
                    {/* 2 column grid layout for inline styling */}
                    <div className="row mb-4">
                      <div className="col d-flex justify-content-center">
                        {/* Checkbox */}
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="form2Example31"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example31"
                          >
                            {" "}
                            Remember me{" "}
                          </label>
                        </div>
                      </div>
                      <div className="col">
                        {/* Simple link */}
                        <a href="#!">Forgot password?</a>
                      </div>
                    </div>
                    {/* Submit button */}
                    {/* <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg "
                    >
                      Sign in
                    </button>
                    </div> */}
          
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section: Design Block */}
      </div>
    </div>
  );
};

export default Login;
