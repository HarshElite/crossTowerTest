import React from "react";

import Bitcoin4 from "../../images/homepage/1sec3.png";
import Bitcoin5 from "../../images/homepage/2sec3.png";
import Bitcoin7 from "../../images/homepage/3sec3.png";
import Bitcoin6 from "../../images/homepage/4sec3.png";

const Section3 = () => {
  return (
    <section className="py-5 section3-back">
      <p className="text-center section-3-heading1">
        <span>Why CrossTower?</span>
      </p>

      <p className="text-center generic-para-text mt-5 maxwidthfortext">
        We will help you stay one step ahead of your counterparts, with easy
        trading options and competitive prices.
      </p>

      <div className="row py-md-3 py-5 px-md-5 p-3 mb-3">
        <div className="col-sm-12 col-md-3 ">
          <div className="card card-section-3re shadow-lg mt-md-3 mt-3">
            <div className="card-body card-section-3re-body">
              <div className=" mb-3 d-flex justify-content-center">
                <img src={Bitcoin4} alt="" className="image-section-3" />
              </div>

              <p className="para-text-sec3re">
                Lowest Buy Rates for Crypto In India
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 ">
          <div className="card card-section-3re shadow-lg mt-md-3 mt-3">
            <div className="card-body card-section-3re-body">
              <div className=" mb-3 d-flex justify-content-center">
                <img src={Bitcoin5} alt="" className="image-section-3" />
              </div>

              <p className="para-text-sec3re">Zero Brokerage</p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 ">
          <div className="card card-section-3re shadow-lg mt-md-3 mt-3">
            <div className="card-body card-section-3re-body">
              <div className=" mb-3 d-flex justify-content-center align-items-center">
                <img src={Bitcoin7} alt="" className="image-section-3" />
              </div>

              <p
                className="para-text-sec3re
"
              >
                Complete KYC with two Documents
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 ">
          <div className="card card-section-3re shadow-lg mt-md-3 mt-3">
            <div className="card-body card-section-3re-body">
              <div className=" mb-3 d-flex justify-content-center align-items-center">
                <img src={Bitcoin6} alt="" className="image-section-3" />
              </div>

              <p className="para-text-sec3re">AI Driven Platform</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center align-items-center">
        <button className="start-trading-button " type="submit" style={{fontSize:"18px"}}>
          Start Trading
        </button>
      </div>
    </section>
  );
};

export default Section3;
