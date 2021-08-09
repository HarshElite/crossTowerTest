import React from "react";
import Iphone from "../../images/section10image.png";
const Section10 = () => {
  return (
    <section>
      <div className="image-section-10 pt-5">
        <div className="row d-flex justify-content-center  px-3">
          <div className="col-md-6 col-sm-12 mt-5">
            <div className="mx-3 section-10-maxwidth">
              <p className="generic-title-heading text-white">
                Ready To get Started
              </p>
              <p className="generic-para-text text-white">
                We understand the importance of liquidity and have partnered
                with global liquidity providers and market makers.
              </p>
              <div className="email-search-top">
                <form className="search-wrapper cf d-flex align-items-center d-flex justify-content-evenly">
                  <input type="text" placeholder="Mobile No" required />
                  <button className="getting-started-landing" type="submit">
                    Get call Back
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex align-items-center justify-content-center   ">
            <div className="image-container-iphone-section10  ">
              <img src={Iphone} className="image-iphone-section10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section10;
