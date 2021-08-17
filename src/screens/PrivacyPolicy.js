import React from "react";
import Navbar from "../components/Navbar";
import Section1 from "../components/Privacy_Policy_Components/Section1";
import Section2 from "../components/Privacy_Policy_Components/Section2";
import NavbarTop from "../components/NavbarTop";

const PrivacyPolicy = () => {
  return (
    <div className="container">
      <NavbarTop />
      <Navbar />
      <Section1 />
      <Section2 />
    </div>
  );
};

export default PrivacyPolicy;
