import React from "react";

const ComingSoon = () => {
  return (
    <div className="container main-cont-comingsoon">
      <div className="row d-flex justify-content-center align-items-center p-md-5 p-3">
        <div className="col-12 p-5 containerforcomingsoon">
          <p className="text-center coming-soon-head">Coming soon</p>
          <p className="text-center coming-soon-para">
            CrossTower Global prohibits access to U.S. Residents. If you are a
            U.S. Resident, please click here to visit the CrossTower US
            platform.
          </p>{" "}
          <div className="email-search-top">
            <form className="search-wrapper cf d-flex align-items-center d-flex justify-content-evenly">
              <input type="text" placeholder="Email Address" required />
              <button className="getting-started-landing" type="submit">
                Notify
              </button>
            </form>
          </div>
          <p className="text-center coming-soon-para mt-3">
            Notify me when page is live
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;