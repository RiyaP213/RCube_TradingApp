import React from "react";

function CreateTicket() {
  const sections = [
    {
      title: "Account Opening",
      icon: "fa-plus-circle",
      links: [
        "Online Account Opening",
        "Offline Account Opening",
        "Company, Partnership and HUF Account Opening",
        "NRI Account Opening",
        "Charges at Zerodha",
        "Getting Started",
      ],
    },

    {
      title: "Your Zerodha Account",
      icon: "fa-user",
      links: [
        "Login Credentials",
        "Account Modification and Segment Addition",
        "DP ID and bank details",
        "Your Profile",
        "Transfer and conversion of shares",
      ],
    },

    {
      title: "Trading and Markets",
      icon: "fa-bar-chart",
      links: [
        "Margin/leverage, Product and Order types",
        "Kite Web and Mobile",
        "Trading FAQs",
        "Corporate Actions",
        "Kite API",
        "GTT",
      ],
    },

    {
      title: "Funds",
      icon: "fa-credit-card",
      links: [
        "Adding Funds",
        "Fund Withdrawal",
        "eMandates",
        "Adding Bank Accounts",
      ],
    },

    {
      title: "Console",
      icon: "fa-circle-o",
      links: [
        "Reports",
        "Ledger",
        "Portfolio",
        "60 Day Challenge",
        "IPO",
        "Referral Program",
      ],
    },

    {
      title: "Coin",
      icon: "fa-circle-o",
      links: [
        "Understanding Mutual Funds",
        "About Coin",
        "Buying and Selling",
        "Starting an SIP",
        "Managing your Portfolio",
        "Coin App",
      ],
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="fs-3 mb-5">
        To create a ticket, select a relevant topic
      </h1>

      <div className="row">
        {sections.map((section, index) => (
          <div className="col-4 p-4 mb-4" key={index}>
            <h4 className="fs-5 mb-4">
              <i className={`fa ${section.icon} me-2`} />
              {section.title}
            </h4>

            {section.links.map((link, linkIndex) => (
              <div key={linkIndex} className="mb-3">
                <a
                  href="/support"
                  style={{ textDecoration: "none" }}
                >
                  {link}
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;