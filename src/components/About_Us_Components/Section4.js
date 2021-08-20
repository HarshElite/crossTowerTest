import React from "react";
import Member1 from "../../images/aboutus/p1.png";
import Member2 from "../../images/aboutus/MaskGroup-1.png";
import Member3 from "../../images/aboutus/MaskGroup-4.png";
import Twitter from "../../images/homepage/Footer/tw.png";
import Linkedin from "../../images/homepage/Footer/lk.png";
import IB from "../../images/aboutus/bg-about-card.png";
const Section4 = () => {
  return (
    <>
      <div className="p-3 p-md-5">
        <p className="text-center section-3-heading1">
          <span>The Team</span>
        </p>
        <p className="text-center generic-para-text mt-5 mb-5 maxwidthfortext">
          We make it our personal mission to give you an advanced and safe
          ecosystem for trading.
        </p>

        <div className="row">
          <div className="col-md-4 col-12 mt-5">
            <div className="card shadow-lg p-0 card-abtus-sec4">
              <div className="card-body p-0">
                <div className="imagebackground-abt-us-card d-flex justify-content-center">
                  <img
                    src={IB}
                    alt=""
                    className="imagebackground-abt-us-card-bgground"
                  />
                  <img
                    src={Member2}
                    alt=""
                    className="imagebackground-abt-us-card-image"
                  />
                </div>
                <div className="mt-5 pb-5 pt-5">
                  <p className="text-center text-capitalize text-head-abtus-sec4">
                    Kapil Rathi
                  </p>
                  <p className="text-center text-para-abtus-sec4">
                    Global Chief Executive Officer & Co-Founder
                  </p>
                  <div className="d-flex justify-content-center ">
                    <hr className="hr-line-abtsec4" />
                  </div>
                  <p className="text-center">
                    <span>
                      <img
                        src={Twitter}
                        alt=""
                        className="imagebackground-abt-us-card-icon marginright10"
                      />
                    </span>
                    <span>
                      <img
                        src={Linkedin}
                        alt=""
                        className="imagebackground-abt-us-card-icon marginleft10"
                      />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mt-5">
            <div className="card shadow-lg p-0 card-abtus-sec4">
              <div className="card-body p-0">
                <div className="imagebackground-abt-us-card d-flex justify-content-center">
                  <img
                    src={IB}
                    alt=""
                    className="imagebackground-abt-us-card-bgground"
                  />
                  <img
                    src={Member1}
                    alt=""
                    className="imagebackground-abt-us-card-image"
                  />
                </div>
                <div className="mt-5 pb-5 pt-5">
                  <p className="text-center text-capitalize text-head-abtus-sec4">
                    Vikas Ahuja
                  </p>
                  <p className="text-center text-para-abtus-sec4">
                    India Chief Executive Officer
                  </p>
                  <div className="d-flex justify-content-center ">
                    <hr className="hr-line-abtsec4" />
                  </div>
                  <p className="text-center">
                    <span>
                      <img
                        src={Twitter}
                        alt=""
                        className="imagebackground-abt-us-card-icon marginright10"
                      />
                    </span>
                    <span>
                      <img
                        src={Linkedin}
                        alt=""
                        className="imagebackground-abt-us-card-icon marginleft10"
                      />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 mt-5">
            <div className="card shadow-lg p-0 card-abtus-sec4">
              <div className="card-body p-0">
                <div className="imagebackground-abt-us-card d-flex justify-content-center">
                  <img
                    src={IB}
                    alt=""
                    className="imagebackground-abt-us-card-bgground"
                  />
                  <img
                    src={Member3}
                    alt=""
                    className="imagebackground-abt-us-card-image"
                  />
                </div>
                <div className="mt-5 pb-5 pt-5">
                  <p className="text-center text-capitalize text-head-abtus-sec4">
                    Kristin Boggiano
                  </p>
                  <p className="text-center text-para-abtus-sec4">
                    President & Co-Founder
                  </p>
                  <div className="d-flex justify-content-center ">
                    <hr className="hr-line-abtsec4" />
                  </div>
                  <p className="text-center">
                    <span>
                      <img
                        src={Twitter}
                        alt=""
                        className="imagebackground-abt-us-card-icon marginright10"
                      />
                    </span>
                    <span>
                      <img
                        src={Linkedin}
                        alt=""
                        className="imagebackground-abt-us-card-icon marginleft10"
                      />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;
