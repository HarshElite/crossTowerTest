import React from "react";
import Imagecard1 from "../../images/ContactUs/section3contact1.png";
import Imagecard2 from "../../images/ContactUs/section3contact2.png";

const Section3 = () => {
  return (
    <section className="pt-5">
      <div class="row row-contact-us-section3 p-md-5 p-3 ">
        <div class="col-md-6 col-12 px-5 px-0 d-flex justify-content-center align-items-center mt-md-0 mt-5">
          <div className="">
            <p className="generic-title-heading primary-color-blue-dark px-md-5 px-0">
              Support resources
            </p>
            <p className="generic-para-text primary-color-blue-dark px-md-5 px-0">
              We are here to answer your questions if you need any help with our
              services. Refer to FAQs or write to us at support@crosstower.in
            </p>
          </div>
        </div>
        <div class="col-md-3 col-12 mt-md-0 mt-5">
          <div class="card card border-0 shadow-lg">
            <div class="card-body d-flex justify-content-center align-items-center">
              <div>
                <div className=" mb-3 d-flex justify-content-center p-md-5 p-0">
                  <img
                    src={Imagecard1}
                    alt=""
                    className="image-section-3-contact"
                  />
                </div>
                <p className="generic-medium-text primary-color-blue text-center">
                  Support center
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-12 mt-md-0 mt-5">
          <div class="card card border-0 shadow-lg">
            <div class="card-body">
              <div>
                <div className=" mb-3 d-flex justify-content-center p-md-5 p-0">
                  <img
                    src={Imagecard2}
                    alt=""
                    className="image-section-3-contact"
                  />
                </div>
                <p className="generic-medium-text primary-color-blue text-center mb-4">
                  Frequently Asked Questions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
