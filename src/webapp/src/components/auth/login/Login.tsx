import React from "react";
import "../../../styles/login/Login.css";

export const Login = () => {
  return (
    <div className="login-container">
      <div className="container">
        <div>
          <h3 className="fw-bold text-center fst-normal">Zula</h3>
          <p className="text-center fst-normal">the Reading Tribe</p>
        </div>
        <div className="mb-5">
          <h1 className="fw-bold text-center fst-normal">
            Welcome!
            <br /> Its Good To See You.
          </h1>
        </div>
        <form className="d-flex flex-column align-items-center w-50">
          <div className=" w-100">
            <div>
              <small>Name</small>
              <input
                className="form-control my-3 p-3"
                type="text"
                placeholder="Name"
                name="name"
                required
              />
            </div>
          </div>
          <div className="w-100">
            <div>
              <small>Password</small>
              <input
                className="form-control my-3 p-3"
                type="password"
                placeholder="Password"
                name="password"
                required
              />
            </div>
          </div>
          <div className="w-100">
            <div>
              <small className="small-dark">
                Did you forget your password?
              </small>
            </div>
          </div>
          <div className="login-buttons mt-5 ">
            <a href="/" className="button fw-bold ">
              login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
