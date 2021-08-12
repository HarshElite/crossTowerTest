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
            Launching The most powerful crypto Platform
          </p>
          <p className="generic-para-text">
            We offer tight bid-ask spreads, deep order books, best-in-class risk
            management, and high-quality trade execution. For this reason we
            have partnered with active global liquidity providers and the
            world’s biggest market makers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section5;
