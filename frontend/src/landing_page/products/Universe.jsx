import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="mb-3">The Zerodha Universe</h1>

        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row text-center">
        <div className="col-md-4 mb-5">
          <img
            src="/media/images/smallcaseLogo.png"
            alt="Smallcase"
            style={{ width: "200px", height: "80px", objectFit: "contain" }}
          />

          <p className="text-muted mt-3">
            Thematic investment platform
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <img
            src="/media/images/streakLogo.png"
            alt="Streak"
            style={{ width: "200px", height: "80px", objectFit: "contain" }}
          />

          <p className="text-muted mt-3">
            Algo & strategy platform
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <img
            src="/media/images/sensibullLogo.svg"
            alt="Sensibull"
            style={{ width: "200px", height: "80px", objectFit: "contain" }}
          />

          <p className="text-muted mt-3">
            Options trading platform
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <img
            src="/media/images/zerodhaFundhouse.png"
            alt="Zerodha Fund House"
            style={{ width: "200px", height: "80px", objectFit: "contain" }}
          />

          <p className="text-muted mt-3">
            Asset management
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <img
            src="/media/images/goldenpiLogo.png"
            alt="GoldenPi"
            style={{ width: "200px", height: "80px", objectFit: "contain" }}
          />

          <p className="text-muted mt-3">
            Bonds trading platform
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <img
            src="/media/images/dittoLogo.png"
            alt="Ditto"
            style={{ width: "200px", height: "80px", objectFit: "contain" }}
          />

          <p className="text-muted mt-3">
            Insurance
          </p>
        </div>
      </div>

      <div className="text-center">
        <Link to="/signup" className="btn btn-primary px-5 py-2">
          Sign up now
        </Link>
      </div>
    </div>
  );
}

export default Universe;