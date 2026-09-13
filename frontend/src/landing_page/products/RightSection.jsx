import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container-fluid mt-5">
      <div className="row align-items-center mx-0">

        {/* Text on left */}
        <div className="col-6 p-5">
          <h1>{productName}</h1>

          <p>{productDescription}</p>

          {learnMore && (
            <a href={learnMore}>
              Learn More
            </a>
          )}
        </div>

        {/* Image on right */}
        <div className="col-6 p-5">
          <img
            src={imageURL}
            alt={productName}
            style={{ width: "100%" }}
          />
        </div>

      </div>
    </div>
  );
}

export default RightSection;