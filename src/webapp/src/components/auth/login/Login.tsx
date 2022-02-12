import React from "react";
import "../../../styles/login/Login.css";

export const Login = () => {
  return (
    <div className="d-flex justify-content-between login">
      <div className="col-lg-4 bg-secondary">
        <h1 className="text-align-center">illustrations</h1>
      </div>
      <div className="d-flex flex-column justify-content-center col-lg-8">
        <div className="d-flex flex-column align-items-center mb-5">
          <h1>
            Welcome To <br />
            Zula the Reading Tribe!
          </h1>
          <p className="fw-light">It is good to see you my friend</p>
        </div>
        <div className="d-grid gap-3 mt-5 p-3">
          <button className="btn btn-dark btn-lg " type="button">
            I am already a member
          </button>
          <button className="btn  btn-secondary btn-lg" type="button">
            View as a guest
          </button>
          <button className="btn btn-light btn-lg" type="button">
            Join our tribe
          </button>
        </div>
      </div>
    </div>
  );
};
