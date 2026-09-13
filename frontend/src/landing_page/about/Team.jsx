import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5">
        <h1 className="fs-2 text-center">People</h1>
      </div>

      <div
        className="row p-5 mt-5 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="/media/images/nithinKamath.jpg"
            alt="Founder"
            style={{
              borderRadius: "100%",
              width: "60%",
            }}
          />

          <h4 className="mt-5">Founder Name</h4>
          <h5>Founder, CEO</h5>
        </div>

        <div className="col-6 p-5">
          <p>
            Our founder built the platform to solve problems encountered while
            trading and investing in financial markets.
          </p>

          <p>
            The company focuses on technology, market access, risk management,
            and financial infrastructure.
          </p>

          <p>
            The long-term goal is to build increasingly sophisticated tools for
            traders and investors.
          </p>

          <p>
            Connect on{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              Homepage
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;