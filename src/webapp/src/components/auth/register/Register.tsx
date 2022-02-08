import React from "react";
import "../../../Styles/register/Register.css";

export const Register = () => {
  return (
    <div className="Form my-3 mx-4">
      <div className="container">
        <div className="row no-gutters">
          <h1 className="col-lg-4 bg-secondary">illustrations</h1>
          <div className="col-lg-8 px-5 pt-5">
            <h1 className="large text-secondary py-3">Join Our Tribe</h1>
            <p className=" text-secondary fw-light"> Create Your Account</p>
            <form>
              <div className="form-row">
                <div className="col-lg-7 ">
                  <input
                    className="form-control  my-3 p-3"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-7">
                  <input
                    className="form-control  my-3 p-3"
                    type="text"
                    placeholder="Email Address"
                    name="Email"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-7">
                  <input
                    className="form-control  my-3 p-3"
                    type="password"
                    placeholder="password"
                    name="password"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-7">
                  <input
                    className="form-control  my-3 p-3"
                    type="text"
                    placeholder="Reader's age"
                    name="age"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-7">
                  <input
                    className="form-control  my-3 p-3"
                    type="text"
                    placeholder="Reader's ethnic group"
                    name="group"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-7">
                  <input
                    className="form-control  my-3 p-3"
                    type="text"
                    placeholder="Language preference"
                    name="language"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-7">
                  <input
                    className="form-control  my-3 p-3"
                    type="text"
                    placeholder="Contents preference"
                    name="preference"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-7">
                  <button className="btn bg-info my-3 p-4 btn">
                    I am All set
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
