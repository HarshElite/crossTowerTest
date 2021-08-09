import React from "react";
import Section4bg from "../../images/section4bg.png";

const Section4 = () => {
  return (
    <section className="py-3">
      <div className="image-section-4 px-3 py-3">
        <div className="row d-flex align-items-center">
          <div className="col-md-6 col-sm-12">
            <p className="generic-title-heading text-white">
              Trusted by Verified Users
            </p>
            <p className="generic-para-text text-white">
              We offer tight bid-ask spreads, deep order books, best-in-class
              risk management, and high-quality trade execution. For this reason
              we have partnered with active global liquidity providers and the
              world’s biggest market makers.
            </p>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="row">
              <div className="col-md-6 col-sm-12 mt-3">
                <div className="card card-section4 shadow-lg">
                  <div className="card-body">
                    <p className="card-text-section4-header text-center">
                      1M +
                    </p>
                    <p className="generic-para-text primary-color-grey text-center">
                      Globally users
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 mt-3">
                <div className="card card-section4 shadow-lg">
                  <div className="card-body">
                    <p className="card-text-section4-header text-center">
                      5000k
                    </p>
                    <p className="generic-para-text primary-color-grey text-center">
                      Globally Trading Per month
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-center mt-3">
              <div className="card card-section4-bottom shadow-lg">
                <div className="card-body">
                  <p className="card-text-section4-header text-center">45+ </p>
                  <p className="generic-para-text primary-color-grey text-center">
                    Finance Partners
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
