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
          <p className="mb-0 mt-2">CrossTower is on a mission to 
         </p>
              <p className="mb-0 mt-2">
              mainstream digital asset investing and trading.
              </p>
          <div className="row p-2">
            <div className="d-flex flex-column col-md-6 col-sm-12 mt-3">
              
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
                  <Link
                    className="text-white"
                    to="/aboutus"
                    style={{ textDecoration: "none" }}
                  >
                    Leadership Team
                  </Link>
                </div>
                <div class="p-2 secondary-text-col5-footer">
                  <Link
                    className="text-white"
                    to="/comingsoon"
                    style={{ textDecoration: "none" }}
                  >
                    Referral Program
                  </Link>
                </div>
                <div class="p-2 secondary-text-col5-footer">
                  <Link
                    className="text-white"
                    to="/comingsoon"
                    style={{ textDecoration: "none" }}
                  >
                    Blog
                  </Link>
                </div>
                <div class="p-2 secondary-text-col5-footer">
                  <Link
                    className="text-white"
                    to="/comingsoon"
                    style={{ textDecoration: "none" }}
                  >
                    Careers
                  </Link>
                </div>
                <div class="p-2 secondary-text-col5-footer">
                  <Link
                    className="text-white"
                    to="/comingsoon"
                    style={{ textDecoration: "none" }}
                  >
                    News & Media
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-footer span_1_of_5-footer">
              <div class="d-flex flex-column">
                <div class="p-2 header-text-col5-footer">Products</div>
                <div class="p-2 secondary-text-col5-footer">
                  <Link
                    className="text-white"
                    to="/comingsoon"
                    style={{ textDecoration: "none" }}
                  >
                    Crypto Exchange
                  </Link>
                </div>
                <div class="p-2 secondary-text-col5-footer">
                  <Link
                    className="text-white"
                    to="/comingsoon"
                    style={{ textDecoration: "none" }}
                  >
                    Buy and Sell Bitcoin
                  </Link>
                </div>
                <div class="p-2 secondary-text-col5-footer">
                  <Link
                    className="text-white"
                    to="/comingsoon"
                    style={{ textDecoration: "none" }}
                  >
                    Crypto Wallet App
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-footer span_1_of_5-footer">
              <div class="d-flex flex-column">
                <div class="p-2 header-text-col5-footer">
                  <Link
                    className="text-white"
                    to="/support"
                    style={{ textDecoration: "none" }}
                  >
                    Support
                  </Link>
                </div>
                <div class="p-2 secondary-text-col5-footer">
                  <Link
                    className="text-white"
                    to="/faq"
                    style={{ textDecoration: "none" }}
                  >
                    Help & Support
                  </Link>
                </div>
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
                  <Link
                    to="/contactus"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Partnership and Enquires
                  </Link>
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
                <div class="p-2 secondary-text-col5-footer">
                  <Link
                    className="text-white"
                    to="/refundpolicy"
                    style={{ textDecoration: "none" }}
                  >
                    Refund Policy
                  </Link>
                </div>
                <div class="p-2 secondary-text-col5-footer">
                  <Link
                    className="text-white"
                    to="/contactus"
                    style={{ textDecoration: "none" }}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-footer span_1_of_5-footer">
              <div class="d-flex flex-column">
                <div class="p-2 header-text-col5-footer">Resources</div>

                <div class="p-2 secondary-text-col5-footer">
                  <Link
                    to="/comingsoon"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Market Insights
                  </Link>
                </div>
                <div class="p-2 secondary-text-col5-footer">
                  <Link
                    to="/comingsoon"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Research Reports
                  </Link>
                </div>
                <div class="p-2 secondary-text-col5-footer">
                  <Link
                    to="/comingsoon"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Learning and Education
                  </Link>
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
                <Link
                  to="/termsofuse"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  <span className="marginright20"> Terms of Use</span>
                </Link>
                <span className="marginright20">
                  <Link
                    className="text-white"
                    to="/privacypolicy"
                    style={{ textDecoration: "none" }}
                  >
                    Privacy Policy
                  </Link>
                </span>
                <span className="marginright20">
                  <Link
                    className="text-white"
                    to="/security"
                    style={{ textDecoration: "none" }}
                  >
                    Security
                  </Link>
                </span>
                <span className="marginright20">
                  <Link
                    className="text-white"
                    to="/disclaimer"
                    style={{ textDecoration: "none" }}
                  >
                    Disclaimer
                  </Link>
                </span>
                <Link
                  className="text-white"
                  to="/cookiepolicy"
                  style={{ textDecoration: "none" }}
                >
                  <span className="marginright20">Cookie Policy</span>
                </Link>
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
            <span className="footer-bottom-header-text"> Exchange : </span>
            <span className="footer-bottom-span-blue">Bitcoin | Litecoin | Ethereum | Ripple </span>
          </p>
          <p className="footer-bottom-header-text pt-5">About Us</p>
          <p className="footer-bottom-header-para">
          CrossTower is a digital assets capital markets firm founded by financial industry veterans 
          on a mission to bring digital asset trading and investing to retail traders. 
          CrossTower has leveraged its vast experience in trading, technology, operational infrastructure, 
          innovative pricing, regulations and compliance to open up digital assets to a sophisticated audience.

          </p>
          <p className="footer-bottom-header-text">Disclaimer</p>
          <p className="footer-bottom-header-para">
            Crypto-asset or cryptocurrency investments are subject to market
            risks such as volatility and have no guaranteed returns. Please do
            your own research before investing and seek independent
            legal/financial advice if you are unsure about the investments.
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
