import React from "react";
import Navbar from "../components/Navbar";
import Section1 from "../components/Disclaimer_Components/Section1";
import Section2 from "../components/Disclaimer_Components/Section2";
import NavbarTop from "../components/NavbarTop";

const Disclaimer = () => {
  return (
    <div className="container">
      <NavbarTop />
      <Navbar />
      <Section1 />
      <Section2 />
    </div>
  );
};

export default Disclaimer;
