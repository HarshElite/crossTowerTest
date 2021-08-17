import React from "react";
import Section1 from "../components/SupportPage_Components/Section1";
import Section2 from "../components/SupportPage_Components/Section2";
import Navbar from "../components/Navbar";
import NavbarTop from "../components/NavbarTop";
const SupportScreen = () => {
  return (
    <div className="container">
      <NavbarTop />
      <Navbar />
      <Section1 />
      <Section2 />
    </div>
  );
};

export default SupportScreen;
