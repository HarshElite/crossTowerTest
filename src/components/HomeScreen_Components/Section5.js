import React from "react";
import VideoPlaceHolder from "../../images/homepage/videothumb.png";

const Section5 = () => {
  return (
    <section className="py-5 p-md-5 p-3">
      <div className="row p-md-5 p-3 d-flex align-items-center">
        <div className="col-md-6 col-sm-12">
          <img src={VideoPlaceHolder} alt="" className="w-100" />
        </div>
        <div className="col-md-6 col-sm-12 px-md-5 px-sm-1">
          <p className="homescreen-section-1-para mt-3">
            <span className="generic-title-para-blue">About</span>
            <span className="generic-title-para-red"> Platform</span>
          </p>
          <p className="generic-title-heading primary-color-blue-dark">
            Trusted & Secure Cryptocurrency Trading
          </p>
          <p className="generic-para-text">
            We are aiming to create an exchange that will become a community for
            crypto investors. A smart crypto investment ecosystem will help you
            trade better and efficiently. Cryptocurrencies have advanced and we
            have maintained the pace. Are you ready to invest with Crosstower to
            be a part of this revolution? 
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section5;
