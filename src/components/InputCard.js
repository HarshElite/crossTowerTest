import React from "react";

const InputCard = () => {
  return (
    <div>
      <div className="email-search-top ">
        <form className="search-wrapper cf d-flex align-items-center d-flex justify-content-evenly">
          <input type="text" placeholder="Enter your email..." required />
          <button className="getting-started-landing" type="submit">
            Getting Started &gt;
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputCard;
