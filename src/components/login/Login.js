import React from "react";
import "../login/login.css";
const Login = () => {
  return (
    <div>
      <div className="container col-lg-9">
        <section className=" text-center text-lg-start">
          <div className="card mb-3">
            <div className="row g-0 d-flex align-items-center">
              <div className="col-lg-4 d-none d-lg-flex">
                <img
                  src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                  alt="Trendy Pants and Shoes"
                  className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
                />
              </div>
              <div className="col-lg-8">
                <div className="card-body py-5 px-md-5">
                  <form>
                    {/* Email input */}
                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example1">
                        Email address
                      </label>
                      <input
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
                    <button
                      type="button"
                      className="btn btn-primary btn-lg "
                    >
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

export default Login;
