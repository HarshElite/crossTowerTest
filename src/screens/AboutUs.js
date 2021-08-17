import React from "react";
import Navbar from "../components/Navbar";
import NavbarTop from "../components/NavbarTop";
import Section1 from "../components/About_Us_Components/Section1";
import Section2 from "../components/About_Us_Components/Section2";
import Section3 from "../components/About_Us_Components/Section3";
import Section4 from "../components/About_Us_Components/Section4";
import Section5 from "../components/About_Us_Components/Section5";
const AboutUs = () => {
  return (
    <div className="container">
      <NavbarTop />
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
};

export default AboutUs;
