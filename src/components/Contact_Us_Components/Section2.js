import React from "react";
import Message from "../../images/ContactUs/messagesec2.png";
import Location from "../../images/ContactUs/locationse2.png";

const Section2 = () => {
  return (
    <section className="py-5">
      <div class="row">
        <div class="col-md-6 col-12">
          <div class="card border-0 shadow-lg">
            <div class="card-body"></div>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <div className="section2-contactinfo-main p-5">
            <div className="d-flex ">
              <div>
                <img src={Message} alt="" className="marginright30" />
              </div>
              <div>
                <p className="contact-us-blue-heading mb-0">General</p>
                <p className="contact-us-blue-para">
                  hello@crosstower.com
                </p>{" "}
              </div>
            </div>

            <p className="marginleft71 contact-us-blue-heading mb-0">Media</p>
            <p className="marginleft71 contact-us-blue-para">
              media@crosstower.com
            </p>
            <p className="marginleft71 contact-us-blue-heading mb-0">Support</p>
            <p className="marginleft71 contact-us-blue-para">
              Support@crosstower.com
            </p>

            <div className="d-flex">
              <div className="locationiconcontact">
                <img src={Location} alt="" className="marginright30" />
              </div>
              <div>
                <p className="contact-us-blue-heading">Support</p>
                <p className="contact-us-blue-para mb-0">CrossTower Inc. </p>
                <p className="contact-us-blue-para">
                  15 Exchange Place Jersey City, NJ 07302{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="divicon-rowcontact d-flex"></div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
