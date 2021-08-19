import React from "react";
import Image2 from "../../images/aboutus/aboustsec1.png";
const Section2 = () => {
  return (
    <>
      <div className="row p-md-5 p-3">
        <div className="col-md-6 col-12 d-flex justify-content-center align-items-center p-2">
          <div className="">
            <p className="generic-title-heading">CrossTower</p>
            <p className="generic-para-text primary-color-grey">
              Founded in 2019, CrossTower is a digital assets capital markets
              firm founded by financial industry veterans on a mission to bring
              digital asset trading and investing to institutional and
              professional traders. The firm first launched a multi-asset
              trading platform last year, and has since expanded to include a
              capital markets desk with best-in-class services and products
              tailored to the needs of hedge funds, family offices and other
              markets participants. CrossTower has leveraged its vast experience
              in trading, technology, operational infrastructure, innovative
              pricing, regulations and compliance to open up digital assets to a
              sophisticated audience.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-12 justify-content-center align-items-center d-flex">
          <div className="parent-div-section2 justify-content-center align-items-center d-flex p-5">
            <img src={Image2} alt="" className="w-100"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
