import React from "react";
import LogoDark from "../images/logodark.png";
import AppStore from "../images/appstore.png";
import PlayStore from "../images/playstore.png";
import Facebook from "../images/homepage/Footer/face.png";
import Twitter from "../images/homepage/Footer/tw.png";
import Instagram from "../images/homepage/Footer/insta.png";
import Youtube from "../images/homepage/Footer/yt.png";
import LinkedIn from "../images/homepage/Footer/lk.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="container">
          <p className="logo-text-footer pt-5">
            <img src={LogoDark} alt="" />
          </p>
          <div className="row p-2">
            <div className="d-flex flex-column col-md-6 col-sm-12 mt-3">
              <p className="mb-0 mt-2">CrossTower is on a mission to</p>
              <p className="mb-0 mt-2">
                mainstream digital asset investing and trading
              </p>
            </div>
            <div className="d-flex col-md-6 col-sm-12 justify-content-md-end justify  -content-sm-start mt-3">
              <div className="row">
                <div className="col-md-6 mt-2">
                  <img src={AppStore} alt="" className="logo-playstore" />
                </div>
                <div className="col-md-6 mt-2">
                  <img src={PlayStore} alt="" className="logo-appstore" />
                </div>
              </div>
            </div>
          </div>

          <hr />
          <div class="section-footer group-footer-footer">
            <div class="col-footer span_1_of_5-footer">
              <div class="d-flex flex-column">
                <div class="p-2 header-text-col5-footer">About</div>
                <div class="p-2 secondary-text-col5-footer">
                  Leadership Team
                </div>
                <div class="p-2 secondary-text-col5-footer">
                  Referral Program
                </div>
                <div class="p-2 secondary-text-col5-footer"> Blog</div>
                <div class="p-2 secondary-text-col5-footer"> Careers</div>
                <div class="p-2 secondary-text-col5-footer"> News & Media</div>
              </div>
            </div>
            <div class="col-footer span_1_of_5-footer">
              <div class="d-flex flex-column">
                <div class="p-2 header-text-col5-footer">Products</div>
                <div class="p-2 secondary-text-col5-footer">
                  Crypto Exchange
                </div>
                <div class="p-2 secondary-text-col5-footer">
                  Buy and Sell Bitcoin
                </div>
                <div class="p-2 secondary-text-col5-footer">
                  Crypto Wallet App
                </div>
              </div>
            </div>
            <div class="col-footer span_1_of_5-footer">
              <div class="d-flex flex-column">
                <div class="p-2 header-text-col5-footer"> Support</div>
                <div class="p-2 secondary-text-col5-footer">Help & Support</div>
                <div class="p-2 secondary-text-col5-footer">
                  <Link
                    className="text-white"
                    to="/faq"
                    style={{ textDecoration: "none" }}
                  >
                    How to use CrossTower?
                  </Link>
                </div>
                <div class="p-2 secondary-text-col5-footer">
                  Partnership and Enquires
                </div>
                <div class="p-2 secondary-text-col5-footer">
                  <Link
                    className="text-white"
                    to="/refundpolicy"
                    style={{ textDecoration: "none" }}
                  >
                    Trading & Withdrawal Fees
                  </Link>
                </div>
                <div class="p-2 secondary-text-col5-footer">Contact Us</div>
              </div>
            </div>
            <div class="col-footer span_1_of_5-footer">
              <div class="d-flex flex-column">
                <div class="p-2 header-text-col5-footer">Resources</div>
                <div class="p-2 secondary-text-col5-footer">
                  Market Insights
                </div>
                <div class="p-2 secondary-text-col5-footer">
                  Research Reports
                </div>
                <div class="p-2 secondary-text-col5-footer">
                  Learning and Education
                </div>
              </div>
            </div>
            <div class="col-footer span_1_of_5-footer">
              <div class="d-flex flex-column">
                <div class="p-2 header-text-col5-footer"> SOCIAL</div>
                <div class="p-2 secondary-text-col5-footer">
                  <img
                    src={Facebook}
                    alt=""
                    className="footer-social-icons-img marginright10"
                  />
                  Facebook
                </div>
                <div class="p-2 secondary-text-col5-footer">
                  <img
                    src={Instagram}
                    alt=""
                    className="footer-social-icons-img marginright10"
                  />
                  Instagram
                </div>
                <div class="p-2 secondary-text-col5-footer">
                  <img
                    src={Twitter}
                    alt=""
                    className="footer-social-icons-img marginright10"
                  />
                  Twitter
                </div>
                <div class="p-2 secondary-text-col5-footer">
                  <img
                    src={Youtube}
                    alt=""
                    className="footer-social-icons-img marginright10"
                  />
                  Youtube
                </div>
                <div class="p-2 secondary-text-col5-footer">
                  <img
                    src={LinkedIn}
                    alt=""
                    className="footer-social-icons-img marginright10"
                  />
                  Linkedin
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-md-6 col-xs-12 d-flex justify-content-start">
              Built With ❤️ In India
            </p>
            <p className="col-md-6 col-xs-12 d-flex justify-content-end">
              <div className="d-flex flex-wrap">
                <span className="marginright20"> Terms of Use</span>
                <span className="marginright20">
                  <Link
                    className="text-white"
                    to="/privacypolicy"
                    style={{ textDecoration: "none" }}
                  >
                    Privacy Policy{" "}
                  </Link>
                </span>
                <span className="marginright20">Security</span>
                <span className="marginright20">Disclaimer</span>
                <span className="marginright20">Cookie Policy</span>
              </div>
            </p>
          </div>
        </div>
      </section>

      <div className="footer-bottom-part">
        <div className="container">
          <p className="footer-bottom-header-text pt-5">
            Most popular on CrossTower
          </p>
          <p>
            <span className="footer-bottom-header-text"> Exchange :</span>
            <span className="footer-bottom-span-green">Bitcoin | Ripple</span>
          </p>
          <p className="footer-bottom-header-text pt-5">About</p>
          <p className="footer-bottom-header-para">
            CrossTower Bermuda Ltd. (DBA “CrossTower Global”) is a digital asset
            trading platform registered as a Digital Asset Business, holding a
            Class F license granted by the Bermuda Monetary Authority. While
            CrossTower Global supports customers from various countries, it does
            not support U.S. customers (individuals or institutions). CrossTower
            Inc. (NMLS License #1979754) is a digital asset trading platform
            registered as a U.S. Money Service Business with FinCEN, supporting
            U.S. customers in certain states and may also support certain
            non-U.S. customers. If you have questions about whether CrossTower
            Global or CrossTower Inc. is available in your jurisdiction please
            contact: support@crosstower.com
          </p>
          <p className="footer-bottom-header-text">Disclaimer</p>
          <p className="footer-bottom-header-para">
            CrossTower Technology Private Limited is a member of NSE & BSE with
            SEBI Registration no: INZ000208032, Depository Participant of CDSL
            Depository with SEBI Registration no: IN-DP-417-2019 and Mutual Fund
            distributor with AMFI Registration No: ARN-111686. Registered office
            and Correspondence office - No.11, 2nd floor, 80 FT Road, 4th Block,
            S.T Bed, Koramangala, Bengaluru – 560034. For any grievances related
            to Stock Broking/DP, please write to grievances@groww.in , please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI.
          </p>
          <p className="mb-0 footer-bottom-copyright pt-5">
            Copyright © 2021 CrossTower. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
