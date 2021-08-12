import React from "react";
import Iphone1 from "../../images/homepage/iphone1.png";
import Iphone2 from "../../images/homepage/iphone2.png";
import Iphone3 from "../../images/homepage/iphone3.png";
const Section7 = () => {
  return (
    <section className="py-5">
      <div className="container p-md-5 p-3">
        <div className="row p-md-5 p-3">
          <p>
            <span className="generic-title-para-blue">The</span>
            <span className="generic-title-para-red"> Process</span>
          </p>
          <div className="col-sm-12 col-md-6">
            <p className="generic-title-heading primary-color-blue-dark">
              Get Started investment With in few Minutes
            </p>
          </div>
        </div>
        <div className="row p-md-5 p-3">
          <div className="col-md-4 col-sm-12">
            <div className="image-container-section7 d-flex justify-content-center align-items-center">
              <img
                src={Iphone1}
                alt=""
                className="image-container-section7-image"
              />
            </div>
            <p className="generic-medium-text primary-color-blue mx-5 mt-4">
              Register In crosstower
            </p>
            <p className="text-blue-section7 mx-5">
              We offer tight bid-ask spreads, deep order books, best-in-class
              risk management, and high-quality trade execution.
            </p>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="image-container-section7 d-flex justify-content-center align-items-center">
              <img
                src={Iphone2}
                alt=""
                className="image-container-section7-image"
              />
            </div>
            <p className="generic-medium-text primary-color-blue mx-5 mt-4">
              Deposit In INR
            </p>
            <p className="text-blue-section7 mx-5">
              We offer tight bid-ask spreads, deep order books, best-in-class
              risk management, and high-quality trade execution.
            </p>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="image-container-section7 d-flex justify-content-center align-items-center">
              <img
                src={Iphone3}
                alt=""
                className="image-container-section7-image"
              />
            </div>
            <p className="generic-medium-text primary-color-blue mx-5 mt-4">
              Starting Buy/Sell
            </p>
            <p className="text-blue-section7 mx-5">
              We offer tight bid-ask spreads, deep order books, best-in-class
              risk management, and high-quality trade execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
