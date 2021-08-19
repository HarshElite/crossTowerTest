import React from "react";
import Iphone from "../../images/section10image.png";
const Section10 = () => {
  return (
    <section className="">
      <div className="image-section-10 pt-md-5 pt-3 px-md-5 px-3">
        <div className="row d-flex justify-content-center ">
          <div className="col-md-6 col-sm-12 p-md-5  d-flex justify-content-center align-items-center">
            <div className="mx-3 section-10-maxwidth">
              <p className="generic-title-heading text-white">
                Change Ready To Get Started Content
              </p>
              <p className="generic-para-text text-white">
                Get Started with Crosstower Diversify your portfolio with
                Utilimeme. Start your crypto journey with a stable,
                decentralized, and utility-based currency, today!
              </p>
              <div className="email-search-top">
                <form className="search-wrapper cf d-flex align-items-center d-flex justify-content-evenly">
                  <input type="text" placeholder="Email Address" required />
                  <button className="getting-started-landing" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 d-flex align-items-end justify-content-center   ">
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
