import React from "react";
import Message from "../../images/ContactUs/messagesec2.png";
import Location from "../../images/ContactUs/locationse2.png";

const Section2 = () => {
  return (
    <section className="py-5">
      <div class="row">
        <div class="col-md-6 col-12">
          <div class="card border-0 shadow-lg">
            <div class="card-body">
              <form className="px-5">
                <div className="d-flex justify-content-between">
                  <div class="form-group py-3">
                    <label className="label-styles-contact" for="firstName">
                      First Name
                    </label>
                    <input
                      type="text"
                      class="form-control form-control-contact px-0"
                      id="firstName"
                      aria-describedby="emailHelp"
                      placeholder=""
                    />
                  </div>
                  <div class="form-group py-3">
                    <label className="label-styles-contact" for="lastName">
                      Last Name
                    </label>
                    <input
                      type="email"
                      class="form-control form-control-contact px-0"
                      id="lastName"
                      aria-describedby="emailHelp"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div class="form-group py-3">
                    <label className="label-styles-contact" for="phone">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      class="form-control form-control-contact px-0"
                      id="phone"
                      aria-describedby="emailHelp"
                      placeholder=""
                    />
                  </div>
                  <div class="form-group py-3">
                    <label className="label-styles-contact" for="email">
                      Email address
                    </label>
                    <input
                      type="email"
                      class="form-control form-control-contact px-0"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="form-group py-3">
                  <label
                    className="label-styles-contact-message"
                    for="messagetopic"
                  >
                    Message Topic
                  </label>
                  <input
                    type="text"
                    class="form-control form-control-contact px-0"
                    id="messagetopic"
                    aria-describedby="emailHelp"
                    placeholder=""
                  />
                </div>
                <div class="form-group py-3">
                  <label className="label-styles-contact-message" for="message">
                    Message
                  </label>
                  <textarea
                    type="textarea"
                    rows="5"
                    class="form-control form-control-contact px-0"
                    id="message"
                    aria-describedby="emailHelp"
                    placeholder="Write your message"
                  />
                </div>
                <div className="row d-flex justify-content-start align-items-center mt-5">
                  <button className="start-trading-button" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <div className="section2-contactinfo-main p-5">
            <div className="d-flex ">
              <div>
                <img src={Message} alt="" className="marginright30" />
              </div>
              <div>
                <p className="contact-us-blue-heading mb-0">Support</p>
                <p className="contact-us-blue-para">support@crosstower.in</p>
              </div>
            </div>

            <div className="d-flex">
              {/* <div className="locationiconcontact">
                <img src={Location} alt="" className="marginright30" />
              </div> */}
              {/* <div>
                <p className="contact-us-blue-heading">Support</p>
                <p className="contact-us-blue-para">
                  CrossTower India Trading Pvt Ltd, First Floor, Plot No. 13,
                  Sector-33, Gurugram (Delhi NCR), Haryana 122001 India.
                </p>
              </div> */}
            </div>
          </div>
          <div className="divicon-rowcontact d-flex"></div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
