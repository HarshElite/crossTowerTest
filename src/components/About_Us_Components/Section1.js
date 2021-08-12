import React from "react";
import AboutUsTop from "../../images/aboutus/aboutussection1.png";
const Section1 = () => {
  return (
    <>
      <div className="row p-md-5 p-3">
        <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
          <div>
            <p className="homescreen-section-1-para">
              <span className="generic-title-para-blue">About</span>
              <span className="generic-title-para-red"> Us</span>
            </p>
            <p className="generic-title-heading ">
              Our mission is to connect the world with Cryptocurrency
            </p>
            <p className="generic-para-text">
              From product to a full ecosystem, we've built an incredible team
              of experienced people that share our passion for disruptive
              technology and vision of a new digital payments landscape.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
          <div className="img-aboutus-sec1-container">
            <img src={AboutUsTop} alt="" className="img-aboutus-sec1-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
