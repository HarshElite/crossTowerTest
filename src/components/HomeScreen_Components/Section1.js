import React, { useEffect, useState } from "react";
import B1 from "../../images/aboutus/1acc.png";
import Iphone from "../../images/section10image.png";
import LineChart from "../LineChart";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { useDispatch, useSelector } from "react-redux";
import {
  WazirxBtcAction,
  ZebpayAction,
  CrossTowerBtcAction,
  CoindcxBtcAction,
  usdToInrAction,
} from "../../action/homepageActions";

const Section1 = () => {
  const dispatch = useDispatch();
  const usdToInrBtcReducers = useSelector((state) => state.usdToInrBtcReducers);
  const {
    loading: loadingusdToInrBtc,
    error: errorusdToInrBtc,
    usdToInr,
  } = usdToInrBtcReducers;

  const crossTowerBtcReducer = useSelector(
    (state) => state.crossTowerBtcReducer
  );
  const {
    loading: loadingcrossTowerBtc,
    error: errorcrossTowerBtc,
    crossTowerBtc,
  } = crossTowerBtcReducer;

  const {
    ZECETH,
    DOGEUSDT20,
    DOGEBTC,
    UNIBTC,
    BTCUSD,
    COMPBTC,
    BTCUSDC,
    BTCUSDC_TR,
  } = crossTowerBtc && crossTowerBtc;

  useEffect(() => {
    dispatch(WazirxBtcAction());
    dispatch(ZebpayAction());
    dispatch(CrossTowerBtcAction());
    dispatch(CoindcxBtcAction());
    dispatch(usdToInrAction());
  }, [dispatch]);

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
                <label
                  className="label-style-hometopcard"
                  for="exampleInputnumber1"
                >
                  You pay
                </label>
                <input
                  type="number"
                  class="form-control-sec1card form-control"
                  id="exampleInputnumber1"
                  aria-describedby="numberHelp"
                  placeholder="Rupees"
                />
              </div>
              <div class="form-group py-3">
                <label
                  className="label-style-hometopcard"
                  for="exampleInputYou Receive1"
                >
                  You Receive
                </label>
                <input
                  type="number"
                  class="form-control-sec1card form-control"
                  id="exampleInputYou Receive1"
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
                <label
                  className="label-style-hometopcard"
                  for="exampleInputnumber1"
                >
                  You pay
                </label>
                <input
                  type="number"
                  class="form-control-sec1card form-control"
                  id="exampleInputnumber1"
                  aria-describedby="numberHelp"
                  placeholder="Rupees"
                />
              </div>
              <div class="form-group py-3">
                <label
                  className="label-style-hometopcard"
                  for="exampleInputYou Receive1"
                >
                  You Receive
                </label>
                <input
                  type="number"
                  class="form-control-sec1card form-control"
                  id="exampleInputYou Receive1"
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
                <label
                  className="label-style-hometopcard"
                  for="exampleInputnumber1"
                >
                  You pay
                </label>
                <input
                  type="number"
                  class="form-control-sec1card form-control"
                  id="exampleInputnumber1"
                  aria-describedby="numberHelp"
                  placeholder="Rupees"
                />
              </div>
              <div class="form-group py-3">
                <label
                  className="label-style-hometopcard"
                  for="exampleInputYou Receive1"
                >
                  You Receive
                </label>
                <input
                  type="number"
                  class="form-control-sec1card form-control"
                  id="exampleInputYou Receive1"
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
      <div className="home-image-top d-flex justify-content-center align-items-end px-md-3 px-0">
        <div className="row  w-100 pb-0">
          <div className="col-md-4 col-sm-12 d-flex justify-content-center align-items-center  ">
            <div>
              {/* <p className="homescreen-section-1-para">
                <span className="generic-title-para-blue">Invest in</span>
                <span className="generic-title-para-red"> Bitcoin</span>
              </p> */}

              <p className="generic-title-heading primary-color-blue-dark">
                A new beginning for your crypto portfolio.
              </p>
              <p className="generic-para-text primary-color-blue-dark">
                Crosstower is the only digital currency platform that can be
                used by professional traders, financial institutions, and
                beginners looking for security, flexibility, and simplicity. 
              </p>
              <div>
                <button className="homescreen-section-1-button">
                  Watch: The CrossTower Difference
                </button>
              </div>
            </div>
          </div>
          {/* <div className="col-md-4 col-sm-12 d-flex justify-content-center align-items-center p-5">
            <img src={Header} alt="" className="img-header-banner" />
          </div> */}

          {/* <div className="col-md-8 col-sm-12 d-flex justify-content-end align-items-center p-3">
            <div class="card shadow-lg border-0 rounded card-section1-main">
              <div className="top-card-crisec1-gra p-3">
                <div class="dropdown">
                  <button
                    class="btn main-drop-vard-secrev"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <p className="mb-0 d-flex justify-content-between">
                      <span> ABC Lorem *</span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6 drop-chevron"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </p>
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
                  <span className="card-top-text-buyysell1">Price</span>
                  <span className="card-top-text-buyysell1">24HR change</span>
                </p>
                <p className="d-flex justify-content-between align-items-center text-white">
                  <span className="card-top-text-buyysell1">₹35,580</span>
                  <span className="card-top-text-buyysell1">+1.25</span>
                </p>
              </div>
              <div class="card-body">
                <ControlledTabs />
                <div className="row d-flex justify-content-center align-items-center mt-2">
                  <button className="start-trading-button" type="submit">
                    Buy ABC
                  </button>
                </div>
              </div>
            </div>
          </div> */}
          {/* MOB Image*/}
          <div className="col-md-8 col-sm-12 d-flex justify-content-end  align-items-end p-3">
            <div className="image-container-iphone-section10  ">
              <img src={Iphone} className="image-iphone-section10" />
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
                        BTCUSD
                      </div>
                      <p className="mb-0 hrs-section1-card hrs-section1-card">
                        Last 24hrs
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center w-100 mt-3">
                      <div className="mb-0 gentextsect-1">
                        ₹
                        {crossTowerBtc && crossTowerBtc.BTCUSD && BTCUSD
                          ? (BTCUSD.last * usdToInr.inr).toFixed(6)
                          : "loading"}
                      </div>
                      <p className="mb-0 loss-section1-card">
                        {crossTowerBtc && crossTowerBtc.BTCUSD && BTCUSD
                          ? ((BTCUSD.open - BTCUSD.last) / BTCUSD.open).toFixed(
                              4
                            )
                          : "loading"}
                        %
                      </p>
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
                        DOGEBTC
                      </div>
                      <p className="mb-0 hrs-section1-card hrs-section1-card">
                        Last 24hrs
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center w-100 mt-3">
                      <div className="mb-0 gentextsect-1">
                        ₹
                        {crossTowerBtc && crossTowerBtc.DOGEBTC && DOGEBTC
                          ? (DOGEBTC.last * usdToInr.inr).toFixed(6)
                          : "loading"}
                      </div>
                      <p className="mb-0 loss-section1-card">
                        {" "}
                        {crossTowerBtc && crossTowerBtc.DOGEBTC && DOGEBTC
                          ? (
                              (DOGEBTC.open - DOGEBTC.last) /
                              DOGEBTC.open
                            ).toFixed(4)
                          : "loading"}
                        %
                      </p>
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
                      <div className="mb-0 gentextsect-1">
                        ₹
                        {crossTowerBtc && crossTowerBtc.ZECETH && ZECETH
                          ? (ZECETH.last * usdToInr.inr).toFixed(6)
                          : "loading"}
                      </div>
                      <p className="mb-0 loss-section1-card">
                        {" "}
                        {crossTowerBtc && crossTowerBtc.ZECETH && ZECETH
                          ? ((ZECETH.open - ZECETH.last) / ZECETH.open).toFixed(
                              4
                            )
                          : "loading"}
                        %
                      </p>
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
                        DOGEUSDT20
                      </div>
                      <p className="mb-0 hrs-section1-card hrs-section1-card">
                        Last 24hrs
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center w-100 mt-3">
                      <div className="mb-0 gentextsect-1">
                        ₹
                        {crossTowerBtc && crossTowerBtc.DOGEUSDT20 && DOGEUSDT20
                          ? (DOGEUSDT20.last * usdToInr.inr).toFixed(6)
                          : "loading"}
                      </div>
                      <p className="mb-0 loss-section1-card">
                        {" "}
                        {crossTowerBtc && crossTowerBtc.DOGEUSDT20 && DOGEUSDT20
                          ? (
                              (DOGEUSDT20.open - DOGEUSDT20.last) /
                              DOGEUSDT20.open
                            ).toFixed(4)
                          : "loading"}
                        %
                      </p>
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
                        UNIBTC
                      </div>
                      <p className="mb-0 hrs-section1-card hrs-section1-card">
                        Last 24hrs
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center w-100 mt-3">
                      <div className="mb-0 gentextsect-1">
                        ₹
                        {crossTowerBtc && crossTowerBtc.UNIBTC && UNIBTC
                          ? (UNIBTC.last * usdToInr.inr).toFixed(6)
                          : "loading"}
                      </div>
                      <p className="mb-0 loss-section1-card">
                        {" "}
                        {crossTowerBtc && crossTowerBtc.UNIBTC && UNIBTC
                          ? ((UNIBTC.open - UNIBTC.last) / UNIBTC.open).toFixed(
                              4
                            )
                          : "loading"}
                        %
                      </p>
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
                        BTCUSDC
                      </div>
                      <p className="mb-0 hrs-section1-card hrs-section1-card">
                        Last 24hrs
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center w-100 mt-3">
                      <div className="mb-0 gentextsect-1">
                        ₹
                        {crossTowerBtc && crossTowerBtc.BTCUSDC && BTCUSDC
                          ? (BTCUSDC.last * usdToInr.inr).toFixed(6)
                          : "loading"}
                      </div>
                      <p className="mb-0 loss-section1-card">
                        {" "}
                        {crossTowerBtc && crossTowerBtc.BTCUSDC && BTCUSDC
                          ? (
                              (BTCUSDC.open - BTCUSDC.last) /
                              BTCUSDC.open
                            ).toFixed(4)
                          : "loading"}
                        %
                      </p>
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
                        COMPBTC
                      </div>
                      <p className="mb-0 hrs-section1-card hrs-section1-card">
                        Last 24hrs
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center w-100 mt-3">
                      <div className="mb-0 gentextsect-1">
                        ₹
                        {crossTowerBtc && crossTowerBtc.COMPBTC && COMPBTC
                          ? (COMPBTC.last * usdToInr.inr).toFixed(6)
                          : "loading"}
                      </div>
                      <p className="mb-0 loss-section1-card">
                        {" "}
                        {crossTowerBtc && crossTowerBtc.COMPBTC && COMPBTC
                          ? (
                              (COMPBTC.open - COMPBTC.last) /
                              COMPBTC.open
                            ).toFixed(4)
                          : "loading"}
                        %
                      </p>
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
                        BTCUSDC_TR
                      </div>
                      <p className="mb-0 hrs-section1-card hrs-section1-card">
                        Last 24hrs
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center w-100 mt-3">
                      <div className="mb-0 gentextsect-1">
                        ₹
                        {crossTowerBtc && crossTowerBtc.BTCUSDC_TR && BTCUSDC_TR
                          ? (BTCUSDC_TR.last * usdToInr.inr).toFixed(6)
                          : "loading"}
                      </div>
                      <p className="mb-0 loss-section1-card">
                        {" "}
                        {crossTowerBtc && crossTowerBtc.BTCUSDC_TR && BTCUSDC_TR
                          ? (
                              (BTCUSDC_TR.open - BTCUSDC_TR.last) /
                              BTCUSDC_TR.open
                            ).toFixed(4)
                          : "loading"}
                        %
                      </p>
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
