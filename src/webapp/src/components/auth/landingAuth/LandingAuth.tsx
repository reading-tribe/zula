import React from "react";
import "../../../styles/landingAuth/LandingAuth.css";

export const LandingAuth: React.FC = () => {
  return (
    <div className="landingAuth-container">
      <div className="container">
        <div>
          <h3 className="fw-bold text-center fst-normal">Zula</h3>
          <p className="text-center fst-normal">The Reading Tribe!</p>
          <div className="landingAuth-main mb-5">
            <h1 className="fw-bold text-center fst-normal">
              Welcome!
              <br />
              It's Good To See You
            </h1>
          </div>
        </div>
        <div className="landingAuth-buttons mt-5">
          <a href="/auth/login" className="button fw-bold">
            Log in
          </a>
          <a href="/auth/register" className="button fw-bold">
            Creating an account
          </a>
        </div>
      </div>
    </div>
  );
};
