import React from "react";

export const Register = () => {
  return (
    <form>
      <div className="from-row">
        <div className="col-lg-7">
          <input
            type="email"
            placeholder="Email-Address"
            className="From-control"
          />
        </div>
      </div>
      <div className="from-row">
        <div className="col-lg-7">
          <input
            type="password"
            placeholder="******"
            className="From-control"
          />
        </div>
      </div>
      <div className="from-row">
        <div className="col-lg-7">
          <input
            type="password"
            placeholder="******"
            className="From-control"
          />
        </div>
      </div>
      <div className="from-row">
        <div className="col-lg-7">
          <input
            type="password"
            placeholder="******"
            className="From-control"
          />
        </div>
      </div>
    </form>
  );
};
