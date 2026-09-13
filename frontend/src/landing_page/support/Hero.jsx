import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="/support" className="text-white">
          Track Tickets
        </a>
      </div>

      <div className="container">
        <div className="row pb-5">
          <div className="col-6 p-5">
            <h1 className="fs-3 mb-4">
              Search for an answer or browse help topics to create a ticket
            </h1>

            <input
              type="text"
              placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
              className="form-control p-3 mb-3"
            />

            <div>
              <a href="/support" className="me-3 text-white">
                Track account opening
              </a>

              <a href="/support" className="me-3 text-white">
                Track segment activation
              </a>

              <a href="/support" className="me-3 text-white">
                Intraday margins
              </a>

              <a href="/support" className="text-white">
                Kite user manual
              </a>
            </div>
          </div>

          <div className="col-6 p-5">
            <h1 className="fs-3">Featured</h1>

            <ol>
              <li className="mb-3">
                <a href="/support" className="text-white">
                  Current Takeovers and Delisting
                </a>
              </li>

              <li>
                <a href="/support" className="text-white">
                  Latest Intraday leverages
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;