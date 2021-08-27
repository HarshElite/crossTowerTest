import React from "react";
import feedbackCircle from "../../images/feedbackcircle.jpg";
import test1 from '../../images/test1.png';
import test2 from "../../images/test2.png";
import test3 from "../../images/test3.png";
const Section6 = () => {
  return (
    <section className="section-6-main-section p-md-5 p-3">
      <div className="container py-5 p-md-5 p-3">
        {/* <div className="row">
            <p>
              <span className="generic-title-para text-white">USER</span>
              <span className="generic-title-para-red"> STORIES</span>
            </p>
          </div> */}
        <div className="row mb-5">
          <div className="col-12">
            <p className="generic-title-heading text-center text-white">
              Testimonials
            </p>
          </div>
          {/* <div className="col-sm-12 col-md-7 d-flex justify-content-end">
            <span className="generic-title-para-white text-white">
              View More &rarr;
            </span>
          </div> */}
        </div>

        <div class="scrolling-wrapper-flexbox" id="style-4">
          <div class="card card-feedback-section6 shadow-lg">
            <div className="card-body">
              <div className="row">
                <div className="col-6 d-flex align-items-center">
                  <img
                    src={test1}
                    alt=""
                    className="image-circle-feedback"
                  />
                </div>
                <div className="col-6 d-flex align-items-center">
                  <p className="star-golden mb-0">
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                  </p>
                </div>
              </div>
              <p className="card-text-1-feedback mb-0 mt-2">
                Great Experience
              </p>
              <p className="card-text-2-feedback mb-0 mt-2">
                Crosstower was the platform where I first got onboard to crypto and
                I would have to say, even for a beginner like me.
              </p>
              <p className="card-text-3-feedback mb-0 mt-2">Rahul Gupta</p>
              <p className="card-text-4-feedback mb-0 mt-2">Entrepreneur</p>
            </div>
          </div>
          <div class="card card-feedback-section6 shadow-lg">
            <div className="card-body">
              <div className="row">
                <div className="col-6 d-flex align-items-center">
                  <img
                    src={test3}
                    alt=""
                    className="image-circle-feedback"
                  />
                </div>
                <div className="col-6 d-flex align-items-center">
                  <p className="star-golden mb-0">
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                  </p>
                </div>
              </div>
              <p className="card-text-1-feedback mb-0 mt-2">
              Liked the Platform
              </p>
              <p className="card-text-2-feedback mb-0 mt-2">
              Extremely simple and easy for users to trade popular cryptocurrencies, that’s what makes it unique. Keep doing a good job.
              </p>
              <p className="card-text-3-feedback mb-0 mt-2">Anaya Malik</p>
              <p className="card-text-4-feedback mb-0 mt-2">Working Professional</p>
            </div>
          </div>
          <div class="card card-feedback-section6 shadow-lg">
            <div className="card-body">
              <div className="row">
                <div className="col-6 d-flex align-items-center">
                  <img
                    src={test2}
                    alt=""
                    className="image-circle-feedback"
                  />
                </div>
                <div className="col-6 d-flex align-items-center">
                  <p className="star-golden mb-0">
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                  </p>
                </div>
              </div>
              <p className="card-text-1-feedback mb-0 mt-2">
                Best For Beginners
              </p>
              <p className="card-text-2-feedback mb-0 mt-2">
              Loved CrossTower…I was looking for something like this kind, 
              which could help me with Crypto investing easily. Very useful.
              </p>
              <p className="card-text-3-feedback mb-0 mt-2">Riya Singh</p>
              <p className="card-text-4-feedback mb-0 mt-2">House Wife</p>
            </div>
          </div>
          {/* <div class="card card-feedback-section6 shadow-lg">
            <div className="card-body">
              <div className="row">
                <div className="col-6 d-flex align-items-center">
                  <img
                    src={test3}
                    alt=""
                    className="image-circle-feedback"
                  />
                </div>
                <div className="col-6 d-flex align-items-center">
                  <p className="star-golden mb-0">
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                  </p>
                </div>
              </div>
              <p className="card-text-1-feedback mb-0 mt-2">
                Best For Beginners
              </p>
              <p className="card-text-2-feedback mb-0 mt-2">
                Crosstower was the platform where I first got onboard to MF and
                I would have to say, even for a beginner like me.
              </p>
              <p className="card-text-3-feedback mb-0 mt-2">Sheena Roy</p>
              <p className="card-text-4-feedback mb-0 mt-2">Entrepreneur</p>
            </div>
          </div>
          <div class="card card-feedback-section6 shadow-lg">
            <div className="card-body">
              <div className="row">
                <div className="col-6 d-flex align-items-center">
                  <img
                    src={feedbackCircle}
                    alt=""
                    className="image-circle-feedback"
                  />
                </div>
                <div className="col-6 d-flex align-items-center">
                  <p className="star-golden mb-0">
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                  </p>
                </div>
              </div>
              <p className="card-text-1-feedback mb-0 mt-2">
                Best For Beginners
              </p>
              <p className="card-text-2-feedback mb-0 mt-2">
                Crosstower was the platform where I first got onboard to MF and
                I would have to say, even for a beginner like me.
              </p>
              <p className="card-text-3-feedback mb-0 mt-2">Rahul Gupta</p>
              <p className="card-text-4-feedback mb-0 mt-2">Entrepreneur</p>
            </div>
          </div>
          <div class="card card-feedback-section6 shadow-lg">
            <div className="card-body">
              <div className="row">
                <div className="col-6 d-flex align-items-center">
                  <img
                    src={feedbackCircle}
                    alt=""
                    className="image-circle-feedback"
                  />
                </div>
                <div className="col-6 d-flex align-items-center">
                  <p className="star-golden mb-0">
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                  </p>
                </div>
              </div>
              <p className="card-text-1-feedback mb-0 mt-2">
                Best For Beginners
              </p>
              <p className="card-text-2-feedback mb-0 mt-2">
                Crosstower was the platform where I first got onboard to MF and
                I would have to say, even for a beginner like me.
              </p>
              <p className="card-text-3-feedback mb-0 mt-2">Rahul Gupta</p>
              <p className="card-text-4-feedback mb-0 mt-2">Entrepreneur</p>
            </div>
          </div>
          <div class="card card-feedback-section6 shadow-lg">
            <div className="card-body">
              <div className="row">
                <div className="col-6 d-flex align-items-center">
                  <img
                    src={feedbackCircle}
                    alt=""
                    className="image-circle-feedback"
                  />
                </div>
                <div className="col-6 d-flex align-items-center">
                  <p className="star-golden mb-0">
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                  </p>
                </div>
              </div>
              <p className="card-text-1-feedback mb-0 mt-2">
                Best For Beginners
              </p>
              <p className="card-text-2-feedback mb-0 mt-2">
                Crosstower was the platform where I first got onboard to MF and
                I would have to say, even for a beginner like me.
              </p>
              <p className="card-text-3-feedback mb-0 mt-2">Rahul Gupta</p>
              <p className="card-text-4-feedback mb-0 mt-2">Entrepreneur</p>
            </div>
          </div>
          <div class="card card-feedback-section6 shadow-lg">
            <div className="card-body">
              <div className="row">
                <div className="col-6 d-flex align-items-center">
                  <img
                    src={feedbackCircle}
                    alt=""
                    className="image-circle-feedback"
                  />
                </div>
                <div className="col-6 d-flex align-items-center">
                  <p className="star-golden mb-0">
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                  </p>
                </div>
              </div>
              <p className="card-text-1-feedback mb-0 mt-2">
                Best For Beginners
              </p>
              <p className="card-text-2-feedback mb-0 mt-2">
                Crosstower was the platform where I first got onboard to MF and
                I would have to say, even for a beginner like me.
              </p>
              <p className="card-text-3-feedback mb-0 mt-2">Rahul Gupta</p>
              <p className="card-text-4-feedback mb-0 mt-2">Entrepreneur</p>
            </div>
          </div>
          <div class="card card-feedback-section6 shadow-lg">
            <div className="card-body">
              <div className="row">
                <div className="col-6 d-flex align-items-center">
                  <img
                    src={feedbackCircle}
                    alt=""
                    className="image-circle-feedback"
                  />
                </div>
                <div className="col-6 d-flex align-items-center">
                  <p className="star-golden mb-0">
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                    <span className="ms-2">
                      <i class="fas fa-star"></i>
                    </span>
                  </p>
                </div>
              </div>
              <p className="card-text-1-feedback mb-0 mt-2">
                Best For Beginners
              </p>
              <p className="card-text-2-feedback mb-0 mt-2">
                Crosstower was the platform where I first got onboard to MF and
                I would have to say, even for a beginner like me.
              </p>
              <p className="card-text-3-feedback mb-0 mt-2">Rahul Gupta</p>
              <p className="card-text-4-feedback mb-0 mt-2">Entrepreneur</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Section6;
