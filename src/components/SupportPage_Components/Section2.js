import React from "react";
import S1 from "../../images/Support/s1.png";
import S2 from "../../images/Support/s2.png";
import S3 from "../../images/Support/s3.png";
import S4 from "../../images/Support/s4.png";
import S5 from "../../images/Support/s5.png";
import S6 from "../../images/Support/s6.png";
import S7 from "../../images/Support/s7.png";
import S8 from "../../images/Support/s8.png";
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <section className="section2-support py-5">
      <div class="row px-5">
        <div class="col-md-4 col-12 px-md-5 px-3">
          <Link to="/faq" style={{ textDecoration: "none" }}>
            <div class="card shadow-lg support-card mb-5">
              <div class="card-body d-flex justify-content-center align-items-center">
                <div className="container-card-content-support d-flex flex-column">
                  <img src={S1} className="img-support" alt="" />
                  <p className="text-center mb-0 mt-4">Account</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div class="col-md-4 col-12 px-md-5 px-3">
          <Link to="/faq" style={{ textDecoration: "none" }}>
            <div class="card shadow-lg support-card mb-5">
              <div class="card-body d-flex justify-content-center align-items-center">
                <div className="container-card-content-support d-flex flex-column">
                  <img src={S2} className="img-support" alt="" />
                  <p className="text-center mb-0 mt-4">Deposit</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div class="col-md-4 col-12 px-md-5 px-3">
          <Link to="/faq" style={{ textDecoration: "none" }}>
            <div class="card shadow-lg support-card mb-5">
              <div class="card-body d-flex justify-content-center align-items-center">
                <div className="container-card-content-support d-flex flex-column">
                  <img src={S3} className="img-support" alt="" />
                  <p className="text-center mb-0 mt-4">Trading</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div class="row px-5">
        <div class="col-md-4 col-12 px-md-5 px-3">
          <Link to="/faq" style={{ textDecoration: "none" }}>
            <div class="card shadow-lg support-card mb-5">
              <div class="card-body d-flex justify-content-center align-items-center">
                <div className="container-card-content-support d-flex flex-column">
                  <img src={S4} className="img-support" alt="" />
                  <p className="text-center mb-0 mt-4">Withdrawal</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div class="col-md-4 col-12 px-md-5 px-3">
          <Link to="/faq" style={{ textDecoration: "none" }}>
            <div class="card shadow-lg support-card mb-5">
              <div class="card-body d-flex justify-content-center align-items-center">
                <div className="container-card-content-support d-flex flex-column">
                  <img src={S5} className="img-support" alt="" />
                  <p className="text-center mb-0 mt-4">Transfer</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div class="col-md-4 col-12 px-md-5 px-3">
          <Link to="/faq" style={{ textDecoration: "none" }}>
            <div class="card shadow-lg support-card mb-5">
              <div class="card-body d-flex justify-content-center align-items-center">
                <div className="container-card-content-support d-flex flex-column justify-content-center align-items-center">
                  <img src={S6} className="img-support" alt="" />
                  <p className="text-center mb-0 mt-4">
                    Legal, Privacy & Security
                  </p>{" "}
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div class="row px-5">
        <div class="col-md-4 col-12 px-md-5 px-3">
          {/* <Link to="/faq" style={{ textDecoration: "none" }}>
            <div class="card shadow-lg support-card mb-5">
              <div class="card-body d-flex justify-content-center align-items-center">
                <div className="container-card-content-support d-flex flex-column">
                  <img src={S7} className="img-support" alt="" />
                  <p className="text-center mb-0 mt-4">API</p>
                </div>
              </div>
            </div>
          </Link> */}
        </div>
        <div class="col-md-4 col-12 px-md-5 px-3">
          <Link to="/faq" style={{ textDecoration: "none" }}>
            <div class="card shadow-lg support-card mb-5">
              <div class="card-body d-flex justify-content-center align-items-center">
                <div className="container-card-content-support d-flex flex-column justify-content-center">
                  <img src={S8} className="img-support" alt="" />
                  <p className="text-center mb-0 mt-4">App</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section2;
