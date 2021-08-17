import React from "react";
import Iphone1 from "../../images/homepage/step_11home.png";
import Iphone2 from "../../images/homepage/step_12home.png";
import Iphone3 from "../../images/homepage/step_13home.png";
const Section7 = () => {
  return (
    <section className="py-5">
      <div className="container p-md-5 p-3">
        <p className="text-center section-3-heading1">
          <span>Buy. Sell. Trade</span>
        </p>

        <p className="text-center generic-para-text mt-5 mb-5">
          Here are a few reasons why you should choose CrossTower
        </p>
        <div className="row p-md-5 p-3">
          <div className="col-md-4 col-sm-12">
            <div className="image-container-section7 d-flex justify-content-center align-items-center">
              <img
                src={Iphone1}
                alt=""
                className="image-container-section7-image"
              />
            </div>
            <div className="card shadow border-none my-md-5 my-3">
              <div className="card-body">
                <p className="generic-medium-text primary-color-blue  mt-4">
                  Register In crosstower{" "}
                </p>
                <p className="text-blue-section7">
                  Download our mobile app on the Play store for Android users
                  and on App Store for iOS users
                </p>
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
            <div className="card shadow border-none my-md-5 my-3">
              <div className="card-body">
                <p className="generic-medium-text primary-color-blue mt-4">
                  Complete KYC
                </p>
                <p className="text-blue-section7 ">
                  Complete your KYC in under 5 minutes with just your PAN,
                  Aadhar & a Selfie
                </p>
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
            <div className="card shadow border-none my-md-5 my-3">
              <div className="card-body">
                <p className="generic-medium-text primary-color-blue  mt-4">
                  Start Buy/Sell
                </p>
                <p className="text-blue-section7 ">
                  One-click is what it takes to start trading in 100+
                  cryptocurrencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
