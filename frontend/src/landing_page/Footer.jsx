import React from "react";

function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "rgb(250, 250, 250)"
            }}
        >
            <div className="container border-top mt-5">

                <div className="row mt-5">

                    {/* Logo / copyright */}
                    <div className="col">
                        <img
                            src="/media/images/logo.svg"
                            style={{ width: "50%" }}
                            alt="Zerodha logo"
                        />

                        <p className="mt-3">
                            © 2010 - 2024, Not Zerodha Broking Ltd.
                            <br />
                            All rights reserved.
                        </p>

                        <div className="mt-3">
                            <i className="fa fa-twitter me-3"></i>
                            <i className="fa fa-facebook-square me-3"></i>
                            <i className="fa fa-instagram me-3"></i>
                            <i className="fa fa-linkedin me-3"></i>
                            <i className="fa fa-telegram"></i>
                        </div>
                    </div>

                    {/* Company */}
                    <div className="col">

                        <p>
                            <strong>Company</strong>
                        </p>

                        <a href="/about">About</a>
                        <br />

                        <a href="/products">Products</a>
                        <br />

                        <a href="/pricing">Pricing</a>
                        <br />

                        <a href="#">Referral programme</a>
                        <br />

                        <a href="#">Careers</a>
                        <br />

                        <a href="#">Zerodha.tech</a>
                        <br />

                        <a href="#">Press & media</a>
                        <br />

                        <a href="#">Zerodha cares (CSR)</a>
                        <br />

                    </div>

                    {/* Support */}
                    <div className="col">

                        <p>
                            <strong>Support</strong>
                        </p>

                        <a href="#">Contact</a>
                        <br />

                        <a href="#">Support portal</a>
                        <br />

                        <a href="#">Z-Connect blog</a>
                        <br />

                        <a href="#">List of charges</a>
                        <br />

                        <a href="#">Downloads & resources</a>
                        <br />

                    </div>

                    {/* Account */}
                    <div className="col">

                        <p>
                            <strong>Account</strong>
                        </p>

                        <a href="/signup">Open an account</a>
                        <br />

                        <a href="#">Fund transfer</a>
                        <br />

                        <a href="#">60 day challenge</a>
                        <br />

                    </div>

                </div>

                {/* Legal information */}
                <div
                    className="mt-5 text-muted"
                    style={{ fontSize: "14px" }}
                >
                    <p>
                        Zerodha Broking Ltd.: Member of NSE & BSE —
                        SEBI Registration no.: INZ000031633.
                        Depository services through Zerodha Securities Pvt.
                        Ltd. Commodity trading through Zerodha Commodities
                        Pvt. Ltd.
                    </p>

                    <p>
                        Procedure to file a complaint on SEBI SCORES:
                        Register on the SCORES portal. Mandatory details
                        for filing complaints include name, PAN, address,
                        mobile number and email ID.
                    </p>

                    <p>
                        Investments in securities market are subject to
                        market risks. Read all the related documents
                        carefully before investing.
                    </p>

                    <p>
                        Prevent unauthorised transactions in your account.
                        Update your mobile numbers and email IDs with your
                        stock brokers and receive transaction information
                        directly from exchanges.
                    </p>
                </div>

                {/* Bottom links */}
                <div className="text-center pb-4">

                    <a href="#" className="mx-3">
                        NSE
                    </a>

                    <a href="#" className="mx-3">
                        BSE
                    </a>

                    <a href="#" className="mx-3">
                        MCX
                    </a>

                    <a href="#" className="mx-3">
                        Terms & conditions
                    </a>

                    <a href="#" className="mx-3">
                        Policies & procedures
                    </a>

                    <a href="#" className="mx-3">
                        Privacy policy
                    </a>

                    <a href="#" className="mx-3">
                        Disclosure
                    </a>

                </div>

            </div>
        </footer>
    );
}

export default Footer;