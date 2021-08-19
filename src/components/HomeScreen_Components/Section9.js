import React, { useState } from "react";
import Bitcoin from "../../images/Frame.png";

const Section9 = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);
  const [toggle6, setToggle6] = useState(false);

  

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
  const triggerToggle6 = () => {
    setToggle6(!toggle6);
  };
    

  return (
    <section className="section9-homescreen  p-md-5 p-3">
      <p className="homescreen-section-1-para pt-5">
        <span className="generic-title-para-blue">General</span>
        <span className="generic-title-para-red"> Queries</span>
      </p>
      <p className="generic-title-heading">Frequently Asked Questions</p>

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
                    How to Deposit INR in CrossTower India Wallet ?
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
                You can deposit the Funds Using MobiKwik Wallet/Debit Card and through UPI
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
                    How to Withdraw INR from CrossTower India Wallet ?
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
                Its Simple, You can withdraw funds by placing a request under the Withdraw tab
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
                    When will my Crosstower Wallet be Updated after Deposit and Withdraw ?
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
                In case of Deposit, Your Cross Tower wallet will be updated instantly 
                once the transaction is successful. In case of Withdraw, 
                Your cross Tower wallet will be updated once 
                it is processed successfully from our side at the end of the day
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
                    When Will I receive Funds in My Bank account after placing Withdrawal request at Cross Tower ?
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
                Funds are credited in your bank account on Next Day (Excluding weekends and Bank Holidays)
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
                    By what time I can place withdraw request with Cross Tower India ?
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
                You can place the request any time during the day
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end 5 */}
        <div className="accordian-container mt-5">
          <div id="accordion my-5">
            <div class="card accordain-tag-1-c ">
              <div
                class="card-header color-card-acc "
                id="headingTwo"
                className={`banner ${toggle6 ? "color-card-acc-white" : "color-card-acc"
                  }`}
              >
                <div className="d-flex justify-content-between align-items-center p-3">
                  <p
                    onClick={triggerToggle6}
                    className="mb-0 generic-text-bold"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                   What is the Maximum / Minimum INR Deposit Limit?
                  </p>
                  <button
                    class="btn-accordion"
                    onClick={triggerToggle6}
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
                Minimum Deposit is INR 100, There is no bar on maximum deposit
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end 6 */}
      </div>
    </section>
  );
};

export default Section9;
