import React from "react";
import LineChart from "../LineChart";

const Section2 = () => {
  return (
    <section className="py-5">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            class=""
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active carousel-bg-1">
            <div className="row p-3">
              <div className="col-sm-12 col-md-6 pb-5 d-flex align-items-center justify-content-center ">
                <div className="card shadow-lg card-in-carousel-s2">
                  <div className="card-body">
                    <p className="text-blue-section7 mb-0">23 March</p>
                    <div className="d-flex">
                      <p className="generic-title-heading mb-0">7352</p>{" "}
                      <p className="generic-title-heading-half ms-2">.25₹</p>
                    </div>
                    <div className="mb-2 line-chart-container ">
                      <LineChart />
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <button className="card-section2-button">Deposit</button>
                      <button className="card-section2-button">Withdraw</button>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="card-section2-paraText1">
                        <i class="fab fa-bitcoin marginright5 card-section2-icon-orange"></i>
                        Bitcoin
                      </p>
                      <p className="card-section2-paraText2">1.5454554BTC</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="card-section2-paraText1">
                        <i class="fab fa-bitcoin marginright5 card-section2-icon-blue"></i>
                        Ethereum
                      </p>
                      <p className="card-section2-paraText2">1.5454554BTC</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="card-section2-paraText1">
                        <i class="fab fa-bitcoin marginright5 card-section2-icon-green"></i>
                        Bitcoin Cash
                      </p>
                      <p className="card-section2-paraText2">1.5454554BTC</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 px-md-5 px-sm-1 d-flex align-items-center">
                <div>
                  <p className="homescreen-section-1-para mt-3">
                    <span className="generic-title-para-blue">Maximum</span>
                    <span className="generic-title-para-red"> Profit</span>
                  </p>
                  <p className="generic-title-heading primary-color-blue-dark">
                    Why Trade ?
                  </p>
                  <p className="generic-para-text">
                    We offer tight bid-ask spreads, deep order books,
                    best-in-class risk management, and high-quality trade
                    execution. For this reason we have partnered with active
                    global liquidity providers and the world’s biggest market
                    makers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item carousel-bg-2">
            <div className="row p-3">
              <div className="col-sm-12 col-md-6 pb-5 d-flex align-items-center justify-content-center ">
                <div className="card shadow-lg card-in-carousel-s2">
                  <div className="card-body">
                    <p className="text-blue-section7 mb-0">23 March</p>
                    <div className="d-flex">
                      <p className="generic-title-heading mb-0">7352</p>{" "}
                      <p className="generic-title-heading-half ms-2">.25₹</p>
                    </div>
                    <div className="mb-2 line-chart-container ">
                      <LineChart />
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <button className="card-section2-button">Deposit</button>
                      <button className="card-section2-button">Withdraw</button>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="card-section2-paraText1">
                        <i class="fab fa-bitcoin marginright5 card-section2-icon-orange"></i>
                        Bitcoin
                      </p>
                      <p className="card-section2-paraText2">1.5454554BTC</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="card-section2-paraText1">
                        <i class="fab fa-bitcoin marginright5 card-section2-icon-blue"></i>
                        Ethereum
                      </p>
                      <p className="card-section2-paraText2">1.5454554BTC</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="card-section2-paraText1">
                        <i class="fab fa-bitcoin marginright5 card-section2-icon-green"></i>
                        Bitcoin Cash
                      </p>
                      <p className="card-section2-paraText2">1.5454554BTC</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 px-md-5 px-sm-1 d-flex align-items-center">
                <div>
                  <p className="homescreen-section-1-para mt-3">
                    <span className="generic-title-para-blue">Maximum</span>
                    <span className="generic-title-para-red"> Profit</span>
                  </p>
                  <p className="generic-title-heading primary-color-blue-dark">
                    Liquidity makes a market
                  </p>
                  <p className="generic-para-text">
                    We offer tight bid-ask spreads, deep order books,
                    best-in-class risk management, and high-quality trade
                    execution. For this reason we have partnered with active
                    global liquidity providers and the world’s biggest market
                    makers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> */}
      </div>
    </section>
  );
};

export default Section2;
