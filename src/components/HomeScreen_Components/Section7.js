import React from "react";
import Iphone1 from "../../images/homepage/step_11home.png";
import Logo from "../../images/homepage/Logo.png";
import Iphone2 from "../../images/homepage/step_12home.png";
import Iphone3 from "../../images/homepage/step_13home.png";
const Section7 = () => {
  return (
    <section className="py-md-1 py-5">
      <div className="container py-md-5 p-3 px-md-5">
        <p className="text-center section-3-heading1">
          <span>Buy. Sell. Trade</span>
        </p>

        <p className="text-center generic-para-text mt-5 mb-5 maxwidthfortext">
          CrossTower allows you to trade,buy and sell over multiple crypto
          currencies in less than few minutes.
        </p>
        <div className="row p-md-5 p-3">
          <div className="col-md-4 col-sm-12 ">
            <div className="image-container-section7 d-flex justify-content-center align-items-center">
              <img
                src={Iphone1}
                alt=""
                className="image-container-section7-image"
              />
            </div>
            <div className="card shadow border-none  card-section-7">
              <div className="card-body">
                <div className="card-body-sec7-green p-3">
                  <p className="generic-medium-text primary-color-blue  mt-4">
                    Download App 
                  </p>
                  <p className="text-blue-section7 mb-0">
                    Go to the Play Store or App Store to download the CrossTower
                    app for your Android or Apple devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="image-container-section7 d-flex justify-content-center align-items-center">
              <img
                src={Iphone2}
                alt=""
                className="image-container-section7-image"
              />
            </div>
            <div className="card shadow border-none  card-section-7">
              <div className="card-body ">
                <div className="card-body-sec7-green p-3">
                  <p className="generic-medium-text primary-color-blue mt-4">
                    Get KYC Ready
                  </p>
                  <p className="text-blue-section7 mb-0 ">
                    Submit your KYC documents and get KYC ready in few minutes
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="image-container-section7 d-flex justify-content-center align-items-center">
              <img
                src={Iphone3}
                alt=""
                className="image-container-section7-image"
              />
            </div>
            <div className="card shadow border-none  card-section-7">
              <div className="card-body ">
                <div className="card-body-sec7-green p-3">
                  <p className="generic-medium-text primary-color-blue mt-4">
                    Get Set Trade
                  </p>
                  <p className="text-blue-section7 mb-0 ">
                    You are just one click away to start trading in Crypto
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

export default Section7;
