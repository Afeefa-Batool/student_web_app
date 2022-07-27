import React from "react";
import "../siginup/siginup.css";
import { auth } from "../../config/firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Siginup = () => {



  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [array, setNewArray] = useState([]);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = { email: email, password: password };
    setNewArray([...array, data]);
    // console.log(array);
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);
      toast.success(`welcome ${email}`);

      // toast.success("welcome user");
      navigate("/login");
    } catch (err) {
      toast.error("somthing wrong");
    }
  };

  return (
    <div>
      <div className="container col-lg-7">
        <h1 className="text-center">Sign Up Form</h1>

        <section className=" text-center text-lg-start">
          <div className="card mb-3">
            <div className="row g-0 d-flex align-items-center">
              <div className="col-lg-4 d-none d-lg-flex">
                <img
                  src="https://img.freepik.com/premium-vector/people-signing-up-login-online-account-with-user-interface-secure-login-password-vector_566886-2047.jpg?w=740"
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        id="form2Example1"
                        className="form-control"
                      />
                    </div>
                    {/* Password input */}
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form2Example2">
                        Password
                      </label>
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        id="form2Example2"
                        className="form-control"
                      />
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
                    <div className="text-center">
                      <button type="button" className="btn btn-primary btn-lg ">
                        Sign in
                      </button>
                    </div>
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

export default Siginup;
