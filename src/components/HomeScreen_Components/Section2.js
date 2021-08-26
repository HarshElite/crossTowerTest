import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  WazirxBtcAction,
  ZebpayAction,
  CrossTowerBtcAction,
  CoindcxBtcAction,
  usdToInrAction,
} from "../../action/homepageActions";
import T1logo from "../../images/homepage/table1.png";
import T2logo from "../../images/homepage/table2.png";
import T3logo from "../../images/homepage/table3.png";
import T4logo from "../../images/homepage/table4.png";
import LineChart from "../LineChart";

const Section2 = () => {
  const dispatch = useDispatch();

  const wazirxBtcReducer = useSelector((state) => state.wazirxBtcReducer);
  const {
    loading: loadingWazirx,
    error: errorWazirx,
    wazirxBtc,
  } = wazirxBtcReducer;

  const zebPayBtcReducer = useSelector((state) => state.zebPayBtcReducer);
  const {
    loading: loadingZebpay,
    error: errorZebpay,
    zebPayBtc,
  } = zebPayBtcReducer;

  const coinDcxBtcReducer = useSelector((state) => state.coinDcxBtcReducer);
  const {
    loading: loadingcoinDcx,
    error: errorcoinDcx,
    coinDcxBtc,
  } = coinDcxBtcReducer;

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

  console.log(wazirxBtc);

  // console.log(wazirxBtc && wazirxBtc.btcinr && wazirxBtc.btcinr.last);
  // console.log(zebPayBtc && zebPayBtc[27] && zebPayBtc[27]["24hoursHigh"]);

  useEffect(() => {
    dispatch(WazirxBtcAction());
    dispatch(ZebpayAction());
    dispatch(CrossTowerBtcAction());
    dispatch(CoindcxBtcAction());
    dispatch(usdToInrAction());
  }, [dispatch]);
  return (
    <section className="py-5 tablesection3darkbg">
      <p className="text-center generic-title-heading text-white text-white">
        <span>CrossTower Advantage</span>
      </p>

      <p className="text-center generic-para-text mt-5 mb-5 maxwidthfortext text-white">
        Liquid cash is the future of currencies and finances and we understand
        your modern requirements. We leverage our global liquidity partners and
        market makers in making your trading easy and convenient.
      </p>
      {/* <div className="card shadow-lg table-responsive-sm main-table-card">
        <div className="card-body">
          <table class="table table-borderless table-responsive table-hover">
            <thead>
              <tr>
                <th scope="col-1" className="pb-4">
                  S.No
                </th>
                <th scope="col-3" className="pb-4">
                  Name
                </th>
                <th scope="col-3" className="pb-4">
                  <img src={T1logo} alt="" />
                </th>
                <th scope="col-3" className="pb-4">
                  <img src={T2logo} alt="" />
                </th>
                <th scope="col-3" className="pb-4">
                  <img src={T3logo} alt="" />
                </th>
                <th scope="col-3" className="pb-4">
                  <img src={T4logo} alt="" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=" table-light">
                <th scope="row" className="py-4">
                  1
                </th>
                <td className="py-4">₹33,230.30</td>
                <td className="py-4">
                  {loadingcrossTowerBtc && "loading"}
                  INR
                  {Math.round(
                    crossTowerBtc &&
                      crossTowerBtc.BTCUSD &&
                      crossTowerBtc.BTCUSD.last * usdToInr.inr * 100
                  ) / 100}
                </td>
                <td className="py-4">
                  {loadingWazirx && "loading"}
                  INR&nbsp;
                  {wazirxBtc && wazirxBtc.btcinr && wazirxBtc.btcinr.last}
                </td>
                <td className="py-4">
                  {loadingZebpay && "loading"}
                  INR&nbsp;
                  {zebPayBtc && zebPayBtc[27] && zebPayBtc[27]["24hoursHigh"]}
                </td>
                <td className="py-4">
                  {loadingcoinDcx && "loading"}
                  INR&nbsp;
                  {Math.round(
                    coinDcxBtc &&
                      coinDcxBtc[0] &&
                      coinDcxBtc[0]["last_price"] * 100
                  ) / 100}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
      {/* <div className="card shadow-lg ">
        <div className="card-body p-0"> */}
      <div className="table-maxwidth-sec1 table-responsive table-responsive-sm">
        <table class="table  table-hover  main-table-card">
          <thead>
            <tr>
              <th
                scope="col-3"
                className="text-center text-white col-md-3  dark-blue-table p-4"
              >
                Exchange
              </th>
              <th
                scope="col-3"
                className="text-center text-white   col-md-3 light-blue-table p-4"
              >
                Buy Price
                {/* <img src={T1logo} alt="" /> */}
              </th>
              <th
                scope="col-3"
                className="text-center text-white col-md-3  dark-blue-table p-4"
              >
                {/* <img src={T2logo} alt="" /> */}
                Exchange fees
              </th>
              <th
                scope="col-3"
                className="text-center text-white   col-md-3 light-blue-table p-4"
              >
                {/* <img src={T3logo} alt="" /> */}
                Total Cost
              </th>
              {/* <th scope="col-3" className="pb-4">
                  <img src={T4logo} alt="" />
                </th> */}
            </tr>
          </thead>
          <tbody>
            <tr className="table-light text-center tr-text-styles">
              <th scope="row" className="py-4">
                <img src={T1logo} alt="" />
              </th>
              <td td className="py-4">
                {loadingcrossTowerBtc && "loading"}
                {(
                  Math.round(
                    crossTowerBtc &&
                      crossTowerBtc.BTCUSD &&
                      crossTowerBtc.BTCUSD.last * usdToInr.inr * 100
                  ) / 100
                ).toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                  style: "currency",
                  currency: "INR",
                })}
              </td>
              <td className="py-4">
                {/* {loadingcrossTowerBtc && "loading"}
                {(
                  Math.round(
                    crossTowerBtc &&
                      crossTowerBtc.BTCUSD &&
                      crossTowerBtc.BTCUSD.last * usdToInr.inr * 100
                  ) / 100
                ).toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                  style: "currency",
                  currency: "INR",
                })} */}
                0.00%
              </td>
              <td className="py-4">
                {loadingcrossTowerBtc && "loading"}
                {(
                  Math.round(
                    crossTowerBtc &&
                      crossTowerBtc.BTCUSD &&
                      crossTowerBtc.BTCUSD.last * usdToInr.inr * 100
                  ) / 100
                ).toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                  style: "currency",
                  currency: "INR",
                })}
              </td>
              {/* <td className="py-4">
                  {loadingZebpay && "loading"}
                  INR&nbsp;
                  {zebPayBtc && zebPayBtc[27] && zebPayBtc[27]["24hoursHigh"]}
                </td> */}
              {/* <td className="py-4">
                  {loadingcoinDcx && "loading"}
                  INR&nbsp;
                  {Math.round(
                    coinDcxBtc &&
                      coinDcxBtc[0] &&
                      coinDcxBtc[0]["last_price"] * 100
                  ) / 100}
                </td> */}
            </tr>
            <tr className="table-light text-center tr-text-styles">
              <th scope="row" className="py-4">
                <img src={T2logo} alt="" />
              </th>
              <td td className="py-4">
                {loadingWazirx && "loading"}

                {wazirxBtc &&
                  wazirxBtc.btcinr &&
                  Number(wazirxBtc.btcinr.last).toLocaleString("en-IN", {
                    maximumFractionDigits: 2,
                    style: "currency",
                    currency: "INR",
                  })}
              </td>
              <td className="py-4">0.20%</td>
              <td className="py-4">
                {loadingWazirx && "loading"}

                {wazirxBtc &&
                  wazirxBtc.btcinr &&
                  Number(wazirxBtc.btcinr.last).toLocaleString("en-IN", {
                    maximumFractionDigits: 2,
                    style: "currency",
                    currency: "INR",
                  })}
              </td>
              {/* <td className="py-4">
                  {loadingZebpay && "loading"}
                  INR&nbsp;
                  {zebPayBtc && zebPayBtc[27] && zebPayBtc[27]["24hoursHigh"]}
                </td> */}
              {/* <td className="py-4">
                  {loadingcoinDcx && "loading"}
                  INR&nbsp;
                  {Math.round(
                    coinDcxBtc &&
                      coinDcxBtc[0] &&
                      coinDcxBtc[0]["last_price"] * 100
                  ) / 100}
                </td> */}
            </tr>
            <tr className="table-light text-center tr-text-styles">
              <th scope="row" className="py-4">
                <img src={T3logo} alt="" />
              </th>
              <td td className="py-4">
                {loadingZebpay && "loading"}
                {zebPayBtc &&
                  zebPayBtc[27] &&
                  Number(zebPayBtc[27]["24hoursHigh"]).toLocaleString("en-IN", {
                    maximumFractionDigits: 2,
                    style: "currency",
                    currency: "INR",
                  })}
              </td>
              <td className="py-4">
                {/* {loadingcrossTowerBtc && "loading"}
                {(
                  Math.round(
                    crossTowerBtc &&
                      crossTowerBtc.BTCUSD &&
                      crossTowerBtc.BTCUSD.last * usdToInr.inr * 100
                  ) / 100
                ).toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                  style: "currency",
                  currency: "INR",
                })} */}
                0.15%
              </td>
              <td className="py-4">
                {loadingZebpay && "loading"}
                {zebPayBtc &&
                  zebPayBtc[27] &&
                  Number(zebPayBtc[27]["24hoursHigh"]).toLocaleString("en-IN", {
                    maximumFractionDigits: 2,
                    style: "currency",
                    currency: "INR",
                  })}
              </td>
              {/* <td className="py-4">
                  {loadingZebpay && "loading"}
                  INR&nbsp;
                  {zebPayBtc && zebPayBtc[27] && zebPayBtc[27]["24hoursHigh"]}
                </td> */}
              {/* <td className="py-4">
                  {loadingcoinDcx && "loading"}
                  INR&nbsp;
                  {Math.round(
                    coinDcxBtc &&
                      coinDcxBtc[0] &&
                      coinDcxBtc[0]["last_price"] * 100
                  ) / 100}
                </td> */}
            </tr>
            <tr className="table-light text-center tr-text-styles">
              <th scope="row" className="py-4">
                <img src={T4logo} alt="" />
              </th>
              <td td className="py-4">
                {loadingcoinDcx && "loading"}

                {Number(
                  Math.round(
                    coinDcxBtc &&
                      coinDcxBtc[0] &&
                      coinDcxBtc[0]["last_price"] * 100
                  ) / 100
                ).toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                  style: "currency",
                  currency: "INR",
                })}
              </td>
              <td className="py-4">
                {/* {loadingcrossTowerBtc && "loading"}
                {(
                  Math.round(
                    crossTowerBtc &&
                      crossTowerBtc.BTCUSD &&
                      crossTowerBtc.BTCUSD.last * usdToInr.inr * 100
                  ) / 100
                ).toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                  style: "currency",
                  currency: "INR",
                })} */}
                0.10%
              </td>
              <td className="py-4">
                {loadingcoinDcx && "loading"}
                {Number(
                  Math.round(
                    coinDcxBtc &&
                      coinDcxBtc[0] &&
                      coinDcxBtc[0]["last_price"] * 100
                  ) / 100
                ).toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                  style: "currency",
                  currency: "INR",
                })}
              </td>
              {/* <td className="py-4">
                  {loadingZebpay && "loading"}
                  INR&nbsp;
                  {zebPayBtc && zebPayBtc[27] && zebPayBtc[27]["24hoursHigh"]}
                </td> */}
              {/* <td className="py-4">
                  {loadingcoinDcx && "loading"}
                  INR&nbsp;
                  {Math.round(
                    coinDcxBtc &&
                      coinDcxBtc[0] &&
                      coinDcxBtc[0]["last_price"] * 100
                  ) / 100}
                </td> */}
            </tr>
          </tbody>
        </table>
      </div>

      {/* </div>
      </div> */}
      <p className="generic-para-text text-center text-white">
        *Please refer to our terms and conditions for Price accuracy status
      </p>
      <div className="row d-flex justify-content-center align-items-center mt-5">
        <button className="start-trading-white" type="submit">
          Start Trading
        </button>
      </div>
    </section>
  );
};

export default Section2;
