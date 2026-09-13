import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductsPage() {
  return (
    <>
      <Hero />

      <LeftSection
        imageURL="/media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />

      <RightSection
        imageURL="/media/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your account. Gain insights into your trades and investments with in-depth reports and visualisations."
        tryDemo="#"
        learnMore="#"
      />

      <LeftSection
        imageURL="/media/images/coin.png"
        productName="Coin"
        productDescription="Invest in mutual funds and manage your long-term investments from one place."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />

      <RightSection
        imageURL="/media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences using simple APIs."
        learnMore="#"
      />

      <LeftSection
        imageURL="/media/images/varsity.png"
        productName="Varsity Mobile"
        productDescription="An easy-to-grasp collection of stock market lessons with in-depth coverage and illustrations."
        tryDemo="#"
        learnMore="#"
        googlePlay="#"
        appStore="#"
      />

      <Universe />
    </>
  );
}

export default ProductsPage;