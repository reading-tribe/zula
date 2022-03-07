import React from "react";
import "../../../styles/register/Register.css";

export const Register = () => {
  return (
    <div className="register-container">
      <div className="container">
        <div>
          <h3 className="fw-bold text-center fst-normal">Zula</h3>
          <p className="text-center fst-normal">the Reading Tribe</p>
        </div>
        <div className="mb-5">
          <h1 className="fw-bold text-center fst-normal">
            Join Our Reading Tribe
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

          <div className=" w-100 ">
            <div>
              <small>Email</small>
              <input
                className="form-control my-3 p-3"
                type="email"
                placeholder="Email"
                name="email"
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
          <div className="register-buttons mt-5 ">
            <a href="/auth/login" className="button-login fw-bold">
              Back to login
            </a>
            <a href="/" className="button fw-bold ">
              Done
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
