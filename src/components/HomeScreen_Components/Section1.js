import React, { useState } from "react";
import B1 from "../../images/aboutus/1acc.png";
import LineChart from "../LineChart";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Header from "../../images/homepage/h1top.png";
const Section1 = () => {
  function ControlledTabs() {
    const [key, setKey] = useState("Buy");

    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 d-flex justify-content-around tab-color-top"
      >
        <Tab eventKey="Buy" title="Buy" className="customstylelink">
          <div className="d-flex flex-column">
            <form>
              <div class="form-group py-3">
                {/* <label for="exampleInputEmail1">Email address</label> */}
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Rupees"
                />
              </div>
              <div class="form-group py-3">
                {/* <label for="exampleInputPassword1">Password</label> */}
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="ABC"
                />
              </div>
            </form>
          </div>
        </Tab>
        <Tab eventKey="Sell" title="Sell">
          <div className="d-flex flex-column">
            <form>
              <div class="form-group py-3">
                {/* <label for="exampleInputEmail1">Email address</label> */}
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Rupees"
                />
              </div>
              <div class="form-group py-3">
                {/* <label for="exampleInputPassword1">Password</label> */}
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="ABC"
                />
              </div>
            </form>
          </div>
        </Tab>
        <Tab eventKey="Convert" title="Convert">
          <div className="d-flex flex-column">
            <form>
              <div class="form-group py-3">
                {/* <label for="exampleInputEmail1">Email address</label> */}
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Rupees"
                />
              </div>
              <div class="form-group py-3">
                {/* <label for="exampleInputPassword1">Password</label> */}
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="ABC"
                />
              </div>
            </form>
          </div>
        </Tab>
      </Tabs>
    );
  }
  return (
    <section className="mb-5 rounded">
      <div className="home-image-top d-flex justify-content-center align-items-center px-md-3 px-0">
        <div className="row p-md-5 w-100">
          <div className="col-md-4 col-sm-12 d-flex justify-content-center align-items-center p-3">
            <div>
              {/* <p className="homescreen-section-1-para">
                <span className="generic-title-para-blue">Invest in</span>
                <span className="generic-title-para-red"> Bitcoin</span>
              </p> */}

              <p className="generic-title-heading primary-color-blue-dark">
                A new Platform for the world’s new currency.
              </p>
              <p className="generic-para-text primary-color-blue-dark">
                CrossTower is the only digital currency platform built for
                professional traders, financial institutions, and beginners who
                demand security, flexibility, and simplicity.
              </p>
              <div>
                <button className="homescreen-section-1-button">
                  Watch: The CrossTower Difference
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 d-flex justify-content-center align-items-center p-5">
            <img src={Header} alt="" className="img-header-banner" />
          </div>

          <div className="col-md-4 col-sm-12 d-flex justify-content-center align-items-center p-3">
            <div class="card shadow-lg border-0 rounded card-section1-main">
              <div className="top-card-crisec1-gra p-3">
                <div class="dropdown">
                  <button
                    class="btn dropdown-toggle main-drop-vard-secrev"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ABC
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <p className="d-flex justify-content-between align-items-center text-white">
                  <span>Price</span>
                  <span>24HR change</span>
                </p>
                <p className="d-flex justify-content-between align-items-center text-white">
                  <span>₹35,580</span>
                  <span>+1.25</span>
                </p>
              </div>
              <div class="card-body">
                <ControlledTabs />
                <div className="row d-flex justify-content-center align-items-center mt-2">
                  <button className="start-trading-button" type="submit">
                    Start ABC
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5">
        <p className="gentextsect-1 mb-0 mt-5">Popular Assets</p>
        <hr />
      </div>

      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner px-5">
          <div class="carousel-item active">
            <div className="row">
              <div className="col-md-3 col-12 mt-5">
                <div className="card card-carouse-sect1 shadow">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center w-100 ">
                      <div className="mb-0 d-flex align-items-center text-center gentextsect-1">
                        <img src={B1} alt="" className="main-btc-top-card" />
                        BTC
                      </div>
                      <p className="mb-0 hrs-section1-card hrs-section1-card">
                        Last 24hrs
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center w-100 mt-3">
                      <div className="mb-0 gentextsect-1">₹33,230.30</div>
                      <p className="mb-0 loss-section1-card">-0.42%</p>
                    </div>
                    <div className="div-height-control">
                      <LineChart />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-12 mt-5">
                <div className="card card-carouse-sect1 shadow">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center w-100 ">
                      <div className="mb-0 d-flex align-items-center text-center gentextsect-1">
                        <img src={B1} alt="" className="main-btc-top-card" />
                        BTC
                      </div>
                      <p className="mb-0 hrs-section1-card hrs-section1-card">
                        Last 24hrs
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center w-100 mt-3">
                      <div className="mb-0 gentextsect-1">₹33,230.30</div>
                      <p className="mb-0 loss-section1-card">-0.42%</p>
                    </div>
                    <div className="div-height-control">
                      <LineChart />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-12 mt-5">
                <div className="card card-carouse-sect1 shadow">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center w-100 ">
                      <div className="mb-0 d-flex align-items-center text-center gentextsect-1">
                        <img src={B1} alt="" className="main-btc-top-card" />
                        BTC
                      </div>
                      <p className="mb-0 hrs-section1-card hrs-section1-card">
                        Last 24hrs
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center w-100 mt-3">
                      <div className="mb-0 gentextsect-1">₹33,230.30</div>
                      <p className="mb-0 loss-section1-card">-0.42%</p>
                    </div>
                    <div className="div-height-control">
                      <LineChart />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-12 mt-5">
                <div className="card card-carouse-sect1 shadow">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center w-100 ">
                      <div className="mb-0 d-flex align-items-center text-center gentextsect-1">
                        <img src={B1} alt="" className="main-btc-top-card" />
                        BTC
                      </div>
                      <p className="mb-0 hrs-section1-card hrs-section1-card">
                        Last 24hrs
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center w-100 mt-3">
                      <div className="mb-0 gentextsect-1">₹33,230.30</div>
                      <p className="mb-0 loss-section1-card">-0.42%</p>
                    </div>
                    <div className="div-height-control">
                      <LineChart />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="row">
              <div className="col-md-3 col-12 mt-5">
                <div className="card card-carouse-sect1 shadow">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center w-100 ">
                      <div className="mb-0 d-flex align-items-center text-center gentextsect-1">
                        <img src={B1} alt="" className="main-btc-top-card" />
                        BTC
                      </div>
                      <p className="mb-0 hrs-section1-card hrs-section1-card">
                        Last 24hrs
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center w-100 mt-3">
                      <div className="mb-0 gentextsect-1">₹33,230.30</div>
                      <p className="mb-0 loss-section1-card">-0.42%</p>
                    </div>
                    <div className="div-height-control">
                      <LineChart />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-12 mt-5">
                <div className="card card-carouse-sect1 shadow">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center w-100 ">
                      <div className="mb-0 d-flex align-items-center text-center gentextsect-1">
                        <img src={B1} alt="" className="main-btc-top-card" />
                        BTC
                      </div>
                      <p className="mb-0 hrs-section1-card hrs-section1-card">
                        Last 24hrs
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center w-100 mt-3">
                      <div className="mb-0 gentextsect-1">₹33,230.30</div>
                      <p className="mb-0 loss-section1-card">-0.42%</p>
                    </div>
                    <div className="div-height-control">
                      <LineChart />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-12 mt-5">
                <div className="card card-carouse-sect1 shadow">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center w-100 ">
                      <div className="mb-0 d-flex align-items-center text-center gentextsect-1">
                        <img src={B1} alt="" className="main-btc-top-card" />
                        BTC
                      </div>
                      <p className="mb-0 hrs-section1-card hrs-section1-card">
                        Last 24hrs
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center w-100 mt-3">
                      <div className="mb-0 gentextsect-1">₹33,230.30</div>
                      <p className="mb-0 loss-section1-card">-0.42%</p>
                    </div>
                    <div className="div-height-control">
                      <LineChart />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-12 mt-5">
                <div className="card card-carouse-sect1 shadow">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center w-100 ">
                      <div className="mb-0 d-flex align-items-center text-center gentextsect-1">
                        <img src={B1} alt="" className="main-btc-top-card" />
                        BTC
                      </div>
                      <p className="mb-0 hrs-section1-card hrs-section1-card">
                        Last 24hrs
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center w-100 mt-3">
                      <div className="mb-0 gentextsect-1">₹33,230.30</div>
                      <p className="mb-0 loss-section1-card">-0.42%</p>
                    </div>
                    <div className="div-height-control">
                      <LineChart />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="row">
              <div className="col-md-3 col-12 mt-5">
                <div className="card card-carouse-sect1 shadow">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center w-100 ">
                      <div className="mb-0 d-flex align-items-center text-center gentextsect-1">
                        <img src={B1} alt="" className="main-btc-top-card" />
                        BTC
                      </div>
                      <p className="mb-0 hrs-section1-card hrs-section1-card">
                        Last 24hrs
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center w-100 mt-3">
                      <div className="mb-0 gentextsect-1">₹33,230.30</div>
                      <p className="mb-0 loss-section1-card">-0.42%</p>
                    </div>
                    <div className="div-height-control">
                      <LineChart />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-12 mt-5">
                <div className="card card-carouse-sect1 shadow">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center w-100 ">
                      <div className="mb-0 d-flex align-items-center text-center gentextsect-1">
                        <img src={B1} alt="" className="main-btc-top-card" />
                        BTC
                      </div>
                      <p className="mb-0 hrs-section1-card hrs-section1-card">
                        Last 24hrs
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center w-100 mt-3">
                      <div className="mb-0 gentextsect-1">₹33,230.30</div>
                      <p className="mb-0 loss-section1-card">-0.42%</p>
                    </div>
                    <div className="div-height-control">
                      <LineChart />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-12 mt-5">
                <div className="card card-carouse-sect1 shadow">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center w-100 ">
                      <div className="mb-0 d-flex align-items-center text-center gentextsect-1">
                        <img src={B1} alt="" className="main-btc-top-card" />
                        BTC
                      </div>
                      <p className="mb-0 hrs-section1-card hrs-section1-card">
                        Last 24hrs
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center w-100 mt-3">
                      <div className="mb-0 gentextsect-1">₹33,230.30</div>
                      <p className="mb-0 loss-section1-card">-0.42%</p>
                    </div>
                    <div className="div-height-control">
                      <LineChart />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-12 mt-5">
                <div className="card card-carouse-sect1 shadow">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center w-100 ">
                      <div className="mb-0 d-flex align-items-center text-center gentextsect-1">
                        <img src={B1} alt="" className="main-btc-top-card" />
                        BTC
                      </div>
                      <p className="mb-0 hrs-section1-card hrs-section1-card">
                        Last 24hrs
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center w-100 mt-3">
                      <div className="mb-0 gentextsect-1">₹33,230.30</div>
                      <p className="mb-0 loss-section1-card">-0.42%</p>
                    </div>
                    <div className="div-height-control">
                      <LineChart />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev button-bootstrap-prev mt-5"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon icon-bootstrap-prev"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next button-bootstrap-next mt-5"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon icon-bootstrap-next"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* <div className="row px-md-5 px-4 row-card-top-section-1">
        <div className="card card-top-section1-homepage shadow-lg rounded">
          <div className="card-body currency-buy-flexbox">
            <div class="card-currency-buy-section1">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="currency-text-card-section1 mb-0">Btc</p>
                  <p className="currency-rate-card-section1 mb-0">-0.42%</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <p className="currency-rupees-card-section1 mb-0">
                    ₹33,230.30
                  </p>
                  <button className="currency-buy-card-section1">buy</button>
                </div>
              </div>
            </div>
            <div class="card-currency-buy-section1">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="currency-text-card-section1 mb-0">Btc</p>
                  <p className="currency-rate-card-section1 mb-0">-0.42%</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <p className="currency-rupees-card-section1 mb-0">
                    ₹33,230.30
                  </p>
                  <button className="currency-buy-card-section1">buy</button>
                </div>
              </div>
            </div>
            <div class="card-currency-buy-section1">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="currency-text-card-section1 mb-0">Btc</p>
                  <p className="currency-rate-card-section1 mb-0">-0.42%</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <p className="currency-rupees-card-section1 mb-0">
                    ₹33,230.30
                  </p>
                  <button className="currency-buy-card-section1">buy</button>
                </div>
              </div>
            </div>
            <div class="card-currency-buy-section1">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="currency-text-card-section1 mb-0">Btc</p>
                  <p className="currency-rate-card-section1 mb-0">-0.42%</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <p className="currency-rupees-card-section1 mb-0">
                    ₹33,230.30
                  </p>
                  <button className="currency-buy-card-section1">buy</button>
                </div>
              </div>
            </div>
            <div class="card-currency-buy-section1">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="currency-text-card-section1 mb-0">Btc</p>
                  <p className="currency-rate-card-section1 mb-0">-0.42%</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <p className="currency-rupees-card-section1 mb-0">
                    ₹33,230.30
                  </p>
                  <button className="currency-buy-card-section1">buy</button>
                </div>
              </div>
            </div>
            <div class="card-currency-buy-section1">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="currency-text-card-section1 mb-0">Btc</p>
                  <p className="currency-rate-card-section1 mb-0">-0.42%</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <p className="currency-rupees-card-section1 mb-0">
                    ₹33,230.30
                  </p>
                  <button className="currency-buy-card-section1">buy</button>
                </div>
              </div>
            </div>
            <div class="card-currency-buy-section1">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="currency-text-card-section1 mb-0">Btc</p>
                  <p className="currency-rate-card-section1 mb-0">-0.42%</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <p className="currency-rupees-card-section1 mb-0">
                    ₹33,230.30
                  </p>
                  <button className="currency-buy-card-section1">buy</button>
                </div>
              </div>
            </div>
            <div class="card-currency-buy-section1">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="currency-text-card-section1 mb-0">Btc</p>
                  <p className="currency-rate-card-section1 mb-0">-0.42%</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <p className="currency-rupees-card-section1 mb-0">
                    ₹33,230.30
                  </p>
                  <button className="currency-buy-card-section1">buy</button>
                </div>
              </div>
            </div>
          </div>
          <p className="ms-3 mt-3">
            <span className="span-green-text">&#x25CF;Live</span>{" "}
            <span className="span-grey-text">
              (Prices Will update in 15 min.)
            </span>
          </p>
        </div>
      </div> */}
    </section>
  );
};

export default Section1;
