import React from "react";
import NewsLogo1 from "../../images/logo-news1.png";
import NewsLogo2 from "../../images/logo-news2.png";
import NewsLogo3 from "../../images/logo-news3.png";
const NewsCard = () => {
  return (
    <section className="news-card-section py-5">
      <div className="container">
        <p className="text-center section-3-heading1">
          <span>Media</span>
        </p>

        <p className="text-center generic-text-bold mt-5 mb-5">
          Here are a few reasons why you should choose CrossTower
        </p>
        <div className="row d-flex justify-space-between">
          <div className="col-md-4 col-sm-12 mt-3">
            <div class="card">
              <div class="card-body">
                <p class="card-news-logo">Business Insider</p>
                <p class="generic-text-bold">
                  The Crypto Project Has reached 7 Millions Reach
                </p>
                <p class="generic-para-text">
                  Top of the line identity verification systems process your KYC
                  within a few hours of signing up, while ensuring the right KYC
                  protocol.
                </p>
                <p className="card-news-date">06,May, 2021</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 mt-3">
            <div class="card">
              <div class="card-body">
                <p class="card-news-logo">Business Insider</p>
                <p class="generic-text-bold">
                  The Crypto Project Has reached 7 Millions Reach
                </p>
                <p class="generic-para-text">
                  Top of the line identity verification systems process your KYC
                  within a few hours of signing up, while ensuring the right KYC
                  protocol.
                </p>
                <p className="card-news-date">06,May, 2021</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 mt-3">
            <div class="card">
              <div class="card-body">
                <p class="card-news-logo">Business Insider</p>
                <p class="generic-text-bold">
                  The Crypto Project Has reached 7 Millions Reach
                </p>
                <p class="generic-para-text">
                  Top of the line identity verification systems process your KYC
                  within a few hours of signing up, while ensuring the right KYC
                  protocol.
                </p>
                <p className="card-news-date">06,May, 2021</p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center p-5">
          <button className="homescreen-section-1-button">
            View All News &gt;
          </button>
        </div>
        <p className="text-center section-3-para-bottom">
          <span>Backed By</span>
        </p>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-4 col-sm-12 d-flex justify-content-center p-3">
          <div>
            <img src={NewsLogo1} alt="" />
          </div>
        </div>
        <div className="col-md-4 col-sm-12 d-flex justify-content-center p-3">
          <div>
            <img src={NewsLogo2} alt="" />
          </div>
        </div>
        <div className="col-md-4 col-sm-12 d-flex justify-content-center p-3">
          <div>
            <img src={NewsLogo3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCard;
