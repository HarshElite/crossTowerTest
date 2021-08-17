import React from "react";

import Bitcoin4 from "../../images/homepage/1sec3.png";
import Bitcoin5 from "../../images/homepage/2sec3.png";
import Bitcoin6 from "../../images/homepage/4sec3.png";

const Section3 = () => {
  return (
    <section className="py-5 section3-back">
      <p className="text-center section-3-heading1">
        <span>Why CrossTower?</span>
      </p>

      <p className="text-center generic-para-text mt-5 mb-5">
        We understand the importance of liquidity and have partnered with global
        liquidity providers and market makers.
      </p>

      <div className="row p-md-5 p-3">
        <div className="col-sm-12 col-md-3 ">
          <div className="card card-section-3re shadow-lg">
            <div className="card-body">
              <div className=" mb-3 d-flex justify-content-center">
                <img src={Bitcoin4} alt="" className="image-section-3" />
              </div>

              <p
                className="para-text-sec3re"
              >
                Lowest Buy rates for Crypto In India
              </p>
            </div>
          </div>


        </div>
        <div className="col-sm-12 col-md-3 ">
          <div className="card card-section-3re shadow-lg">
            <div className="card-body">
              <div className=" mb-3 d-flex justify-content-center">
                <img src={Bitcoin5} alt="" className="image-section-3" />
              </div>

              <p
                className="para-text-sec3re"
              >
                Zero Brokerage
              </p>

            </div>
          </div>

        </div>
        <div className="col-sm-12 col-md-3 ">
          <div className="card card-section-3re shadow-lg">
            <div className="card-body">
              <div className=" mb-3 d-flex justify-content-center align-items-center">
                <img src={Bitcoin6} alt="" className="image-section-3" />
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
          <div className="card card-section-3re shadow-lg">
            <div className="card-body">
              <div className=" mb-3 d-flex justify-content-center align-items-center">
                <img src={Bitcoin6} alt="" className="image-section-3" />
              </div>

              <p
                className="para-text-sec3re"
              >
                AI Driven Platform
              </p>
            </div>
          </div>


        </div>
      </div>
      <div className="row d-flex justify-content-center align-items-center">
        <button className="start-trading-button" type="submit">
          Start Trading
        </button>
      </div>
    </section>
  );
};

export default Section3;
