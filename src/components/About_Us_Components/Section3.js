import React from "react";
import B1 from "../../images/aboutus/1acc.png";
import B2 from "../../images/aboutus/2acc.png";
import B3 from "../../images/aboutus/3acc.png";
const Section3 = () => {
  return (
    <div className="row row-top-aboutus-section-3 p-md-5 p-3">
      <div className="col-md-6 col-12 d-flex flex-column align-items-center justify-content-center px-5">
        <p className="generic-title-heading">We Believe In</p>
        <div className="flex flex-column w-100 px-md-5 px-0">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item accordianitem-aboutsec3">
              <h2
                class="accordion-header accordianheader-aboutsec3"
                id="flush-headingOne"
              >
                <button
                  class="accordion-button collapsed accordianbutton-aboutsec3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <img src={B1} alt="" className="icon-img-acc-abtus" />
                  Customer First
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body generic-para-text">
                  CrossTower supports a variety of the most popular digital
                  currencies.
                </div>
              </div>
            </div>
            <div class="accordion-item accordianitem-aboutsec3">
              <h2
                class="accordion-header accordianheader-aboutsec3"
                id="flush-headingTwo"
              >
                <button
                  class="accordion-button collapsed accordianbutton-aboutsec3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  <img src={B2} alt="" className="icon-img-acc-abtus" /> Simple
                  is beautiful
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body generic-para-text">
                  CrossTower supports a variety of the most popular digital
                  currencies.
                </div>
              </div>
            </div>
            <div class="accordion-item accordianitem-aboutsec3">
              <h2
                class="accordion-header accordianheader-aboutsec3"
                id="flush-headingThree"
              >
                <button
                  class="accordion-button collapsed accordianbutton-aboutsec3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  <img src={B3} alt="" className="icon-img-acc-abtus" />
                  Dream Big
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body generic-para-text">
                  CrossTower supports a variety of the most popular digital
                  currencies.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-12 d-flex flex-column align-items-center justify-content-center">
        <div className="d-flex flex-column align-items-center justify-content-center ">
          <div className="card m-md-5 m-3 card1accabtus text-white">
            <div className="card-body">
              <p>
                <span className="generic-medium-text">8,000+</span>
                <span className="generic-para-text">&nbsp;Users</span>
              </p>
              <span className="generic-para-text">
                All growth has been organic.
              </span>
            </div>
          </div>
          <div className="card m-md-5 m-3 card2accabtus text-white">
            <div className="card-body">
              <p>
                <span className="generic-medium-text">100+</span>
                <span className="generic-para-text">&nbsp;Team members</span>
              </p>
              <span className="generic-para-text">
                All growth has been organic.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-3 col-12 d-flex flex-column align-items-center justify-content-center">
        <div className="d-flex flex-column align-items-center justify-content-center ">
          <div className="card m-md-5 m-3 card3accabtus text-white px-5 px-md-0">
            <div className="card-body">
              <p>
                <span className="generic-medium-text">2019</span>
                <span className="generic-para-text">&nbsp;Founded</span>
              </p>
              <span className="generic-para-text">Based in USA.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
