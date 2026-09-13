import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5">
        <h1 className="fs-2 text-center">
          We pioneered the discount broking model in India
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            We kick-started operations on the 15th of August, 2010 with the
            goal of breaking all barriers that traders and investors face in
            India in terms of cost, support, and technology.
          </p>

          <p>
            Today, our disruptive pricing models and in-house technology have
            made us one of the leading stock brokers in India.
          </p>

          <p>
            Millions of orders pass through our investment platforms and
            trading infrastructure every day.
          </p>
        </div>

        <div className="col-6 p-5">
          <p>
            In addition, we run educational and community initiatives designed
            to help traders and investors understand financial markets.
          </p>

          <p>
            We continue to invest in technology, market infrastructure, and
            financial tools.
          </p>

          <p>
            We are constantly experimenting with new products and ideas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;