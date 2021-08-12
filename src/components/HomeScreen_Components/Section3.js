import React from "react";
import Bitcoin1 from "../../images/homepage/section3_1.png";
import Bitcoin2 from "../../images/homepage/section3_2.png";
import Bitcoin3 from "../../images/homepage/section3_3.png";
import Bitcoin4 from "../../images/homepage/section3_4.png";
import Bitcoin5 from "../../images/homepage/section3_5.png";
import Bitcoin6 from "../../images/homepage/section3_6.png";

const Section3 = () => {
  return (
    <section className="py-5">
      <p className="text-center section-3-heading1">
        <span>Why CrossTower?</span>
      </p>

      <p className="text-center generic-para-text mt-5 mb-5">
        We understand the importance of liquidity and have partnered with global
        liquidity providers and market makers.
      </p>
      <div className="row p-md-5 p-3">
        <div className="col-sm-12 col-md-4  d-flex flex-column">
          <div className=" mb-3 d-flex justify-content-center">
            <img src={Bitcoin1} alt="" className="image-section-3" />
          </div>

          <p className="text-center primary-color-blue-dark generic-text-bold">
            Buy Bitcoin Online
          </p>
          <p className="text-center generic-para-text px-5">
            CrossTower supports a variety of the most popular digital
            currencies.
          </p>
        </div>
        <div className="col-sm-12 col-md-4 ">
          <div className=" mb-3 d-flex justify-content-center">
            <img src={Bitcoin2} alt="" className="image-section-3" />
          </div>

          <p
            className="text-center primary-color-blue-dark generic-text-bold
"
          >
            Sell Bitcoin
          </p>
          <p className="text-center generic-para-text  px-5">
            CrossTower supports a variety of the most popular digital
            currencies.
          </p>
        </div>
        <div className="col-sm-12 col-md-4 ">
          <div className=" mb-3 d-flex justify-content-center">
            <img src={Bitcoin3} alt="" className="image-section-3" />
          </div>

          <p
            className="text-center primary-color-blue-dark generic-text-bold
"
          >
            Lowest Brokerage
          </p>
          <p className="text-center generic-para-text  px-5">
            CrossTower supports a variety of the most popular digital
            currencies.
          </p>
        </div>
      </div>
      <div className="row p-md-5 p-3">
        <div className="col-sm-12 col-md-4 ">
          <div className=" mb-3 d-flex justify-content-center">
            <img src={Bitcoin4} alt="" className="image-section-3" />
          </div>

          <p
            className="text-center primary-color-blue-dark generic-text-bold
"
          >
            Build Your Reputation
          </p>
          <p className="text-center generic-para-text  px-5">
            CrossTower supports a variety of the most popular digital
            currencies.
          </p>
        </div>
        <div className="col-sm-12 col-md-4 ">
          <div className=" mb-3 d-flex justify-content-center">
            <img src={Bitcoin5} alt="" className="image-section-3" />
          </div>

          <p
            className="text-center primary-color-blue-dark generic-text-bold
"
          >
            Get a free Wallet
          </p>
          <p className="text-center generic-para-text  px-5">
            CrossTower supports a variety of the most popular digital
            currencies.
          </p>
        </div>
        <div className="col-sm-12 col-md-4 ">
          <div className=" mb-3 d-flex justify-content-center align-items-center">
            <img src={Bitcoin6} alt="" className="image-section-3" />
          </div>

          <p
            className="text-center primary-color-blue-dark generic-text-bold
"
          >
            Earn extra Income
          </p>
          <p className="text-center generic-para-text  px-5">
            CrossTower supports a variety of the most popular digital
            currencies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section3;
