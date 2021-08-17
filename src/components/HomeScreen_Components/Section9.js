import React, { useState } from "react";
import Bitcoin from "../../images/Frame.png";

const Section9 = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);

  const triggerToggle1 = () => {
    setToggle1(!toggle1);
  };
  const triggerToggle2 = () => {
    setToggle2(!toggle2);
  };
  const triggerToggle3 = () => {
    setToggle3(!toggle3);
  };
  const triggerToggle4 = () => {
    setToggle4(!toggle4);
  };
  const triggerToggle5 = () => {
    setToggle5(!toggle5);
  };

  return (
    <section className="section9-homescreen  p-md-5 p-3">
      <p className="homescreen-section-1-para pt-5">
        <span className="generic-title-para-blue">General</span>
        <span className="generic-title-para-red"> Queries</span>
      </p>
      <p className="generic-title-heading">Frequently asked questions</p>

      <div className="accordian-container-main p-md-5 p-0">
        <div className="accordian-container">
          <div id="accordion my-5">
            <div class="card accordain-tag-1-c ">
              <div
                class="card-header color-card-acc "
                id="headingOne"
                className={`banner ${toggle1 ? "color-card-acc-white" : "color-card-acc"
                  }`}
              >
                <div className="d-flex justify-content-between align-items-center p-3">
                  <p
                    onClick={triggerToggle1}
                    className="mb-0 generic-text-bold"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Can You Trust Bitcoin ?
                  </p>

                  <button
                    class="btn-accordion"
                    onClick={triggerToggle1}
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    {toggle1 ? "-" : "+"}
                  </button>
                </div>
              </div>
              <div
                id="collapseOne"
                class="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div class="card-body">
                  With bitcoin, trust has to work on both sides. Even though you
                  as the user are always in control of your own finances, you
                  still have to trust the rest of the bitcoin network to not
                  drop off the face of the earth tomorrow. The chances of
                  bitcoin disappearing are so slim that it isn't something you
                  should worry about.
                </div>
              </div>
            </div>
            {/* end 1 */}
          </div>
        </div>
        <div className="accordian-container mt-5">
          <div id="accordion my-5">
            <div class="card accordain-tag-1-c ">
              <div
                class="card-header color-card-acc "
                id="headingTwo"
                className={`banner ${toggle2 ? "color-card-acc-white" : "color-card-acc"
                  }`}
              >
                <div className="d-flex justify-content-between align-items-center p-3">
                  <p
                    onClick={triggerToggle2}
                    className="mb-0 generic-text-bold"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    What are the benefits of cryptocurrency?
                  </p>

                  <button
                    class="btn-accordion"
                    onClick={triggerToggle2}
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    {toggle2 ? "-" : "+"}
                  </button>
                </div>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div class="card-body">
                  With bitcoin, trust has to work on both sides. Even though you
                  as the user are always in control of your own finances, you
                  still have to trust the rest of the bitcoin network to not
                  drop off the face of the earth tomorrow. The chances of
                  bitcoin disappearing are so slim that it isn't something you
                  should worry about.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* End 2  */}

        <div className="accordian-container mt-5">
          <div id="accordion my-5">
            <div class="card accordain-tag-1-c ">
              <div
                class="card-header color-card-acc "
                id="headingThree"
                className={`banner ${toggle3 ? "color-card-acc-white" : "color-card-acc"
                  }`}
              >
                <div className="d-flex justify-content-between align-items-center p-3">
                  <p
                    onClick={triggerToggle3}
                    className="mb-0 generic-text-bold"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Which country is best for cryptocurrency?
                  </p>

                  <button
                    class="btn-accordion"
                    onClick={triggerToggle3}
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    {toggle3 ? "-" : "+"}
                  </button>
                </div>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <div class="card-body">
                  With bitcoin, trust has to work on both sides. Even though you
                  as the user are always in control of your own finances, you
                  still have to trust the rest of the bitcoin network to not
                  drop off the face of the earth tomorrow. The chances of
                  bitcoin disappearing are so slim that it isn't something you
                  should worry about.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end 3 */}
        <div className="accordian-container mt-5">
          <div id="accordion my-5">
            <div class="card accordain-tag-1-c ">
              <div
                class="card-header color-card-acc "
                id="headingFour"
                className={`banner ${toggle4 ? "color-card-acc-white" : "color-card-acc"
                  }`}
              >
                <div className="d-flex justify-content-between align-items-center p-3">
                  <p
                    onClick={triggerToggle4}
                    className="mb-0 generic-text-bold"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Do cryptocurrencies have a future?
                  </p>

                  <button
                    class="btn-accordion"
                    onClick={triggerToggle4}
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    {toggle4 ? "-" : "+"}
                  </button>
                </div>
              </div>
              <div
                id="collapseFour"
                class="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordion"
              >
                <div class="card-body">
                  With bitcoin, trust has to work on both sides. Even though you
                  as the user are always in control of your own finances, you
                  still have to trust the rest of the bitcoin network to not
                  drop off the face of the earth tomorrow. The chances of
                  bitcoin disappearing are so slim that it isn't something you
                  should worry about.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end 4 */}
        <div className="accordian-container mt-5 pb-5">
          <div id="accordion my-5">
            <div class="card accordain-tag-1-c ">
              <div
                class="card-header color-card-acc "
                id="headingFive"
                className={`banner ${toggle5 ? "color-card-acc-white" : "color-card-acc"
                  }`}
              >
                <div className="d-flex justify-content-between align-items-center p-3">
                  <p
                    onClick={triggerToggle5}
                    className="mb-0 generic-text-bold"
                    data-toggle="collapse"
                    data-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    What is cryptocurrency & How it works?
                  </p>

                  <button
                    class="btn-accordion"
                    onClick={triggerToggle5}
                    data-toggle="collapse"
                    data-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    {toggle5 ? "-" : "+"}
                  </button>
                </div>
              </div>
              <div
                id="collapseFive"
                class="collapse"
                aria-labelledby="headingFive"
                data-parent="#accordion"
              >
                <div class="card-body">
                  With bitcoin, trust has to work on both sides. Even though you
                  as the user are always in control of your own finances, you
                  still have to trust the rest of the bitcoin network to not
                  drop off the face of the earth tomorrow. The chances of
                  bitcoin disappearing are so slim that it isn't something you
                  should worry about.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end 5 */}
      </div>
    </section>
  );
};

export default Section9;
