import React from "react";
// import NewsLogo1 from "../../images/logo-news1.png";
// import NewsLogo2 from "../../images/logo-news2.png";
// import NewsLogo3 from "../../images/logo-news3.png";
import media1 from "../../images/media1.png";
import media2 from "../../images/media2.png";
import media3 from "../../images/media3.png";

const NewsCard = () => {
  return (
    <section className="news-card-section p-md-5 p-0">
      <div className="container p-md-5 p-0">
        <p className="text-center section-3-heading1">
          <span>Media/Insights</span>
        </p>

        {/* <p className="text-center generic-para-text mt-5 mb-5">
          We aim to keep you updated with the latest industry news from the best
          economic news agencies.{" "}
        </p> */}
        <div className="row d-flex justify-space-between row-newstable">
          <div className="col-md-4 col-sm-12 mt-3">
            <div class="card border-0 shadow-lg rounded-3 h-100">
              <div class="card-body">
                <img src={media2} alt="" class="card-img-top pb-3" />
                <p
                  class="card-news-logo"
                  style={{
                    color: "#0032FF",
                    letterSpacing: "8px",
                    fontSize: "12px",
                  }}
                >
                  CROSSTOWER GLOBAL{" "}
                </p>
                <p
                  class="generic-text-bold"
                  style={{
                    color: "#0032FF",
                    fontWeight: "300",
                    fontSize: "20px",
                  }}
                >
                  CrossTower Welcomes Polygon
                </p>
                <p class="generic-para-text">
                  Formerly known as MATIC, Polygon is the first well-organized,
                  easy-to-use platform for Ethereum scaling and infrastructure
                  development.
                </p>

                {/* <p className="card-news-date">April 30, 2021</p> */}
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 mt-3">
            <div class="card border-0 shadow-lg rounded-3 h-100">
              <div class="card-body">
                <img src={media1} alt="" class="card-img-top pb-3" />
                <p
                  class="card-news-logo"
                  style={{
                    color: "#0032FF",
                    letterSpacing: "8px",
                    fontSize: "12px",
                  }}
                >
                  CROSSTOWER GLOBAL
                </p>
                <p
                  class="generic-text-bold"
                  style={{
                    color: "#0032FF",
                    fontWeight: "300",
                    fontSize: "20px",
                  }}
                >
                  Buy & Sell Ren, Chiliz and Swipe on CrossTower
                </p>
                <p class="generic-para-text">
                  CrossTower Global has added Ren, Chiliz, and Swipe markets to
                  our exchange.
                </p>
                {/* <p className="card-news-date">May 12, 2021</p> */}
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 mt-3">
            <a 
            style={{textDecoration:"none"}}
            href='https://www.globenewswire.com/news-release/2021/08/23/2285046/0/en/CrossTower-ranked-among-the-top-four-global-exchanges-in-Exchange-Benchmark-Report-published-by-CryptoCompare.html'>
            <div class="card border-0 shadow-lg rounded-3 h-100">
              <div class="card-body">
                <img src={media3} alt="" class="card-img-top pb-3" />
                <p
                  class="card-news-logo"
                  style={{
                    color: "#0032FF",
                    letterSpacing: "8px",
                    fontSize: "12px",
                  }}
                >
                  CROSSTOWER GLOBAL
                </p>
                <p
                  class="generic-text-bold"
                  style={{
                    color: "#0032FF",
                    fontWeight: "300",
                    fontSize: "20px",
                  }}
                >
                  CrossTower ranked among the top four global exchanges 
                </p>
                <p class="generic-para-text " style={{color:"black"}}>
                CrossTower,  has received an AA ranking from crypto-asset
                 data provider CryptoCompare in its August 2021 Exchange Benchmark report.
                </p>
                {/* <p className="card-news-date">May 26, 2021</p> */}
              </div>
            </div>
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-center p-5">
          <button className="homescreen-section-1-button">View All News</button>
        </div>
        {/* <p className="text-center section-3-para-bottom">
          <span className="primary-color-blue">Featured In</span>
        </p> */}
      </div>
      {/* <div className="row d-flex justify-content-center">
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
      </div> */}
    </section>
  );
};

export default NewsCard;
