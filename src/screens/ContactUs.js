import React from "react";
import Navbar from "../components/Navbar";
import Section1 from "../components/Contact_Us_Components/Section1";
import Section2 from "../components/Contact_Us_Components/Section2";
import Section3 from "../components/Contact_Us_Components/Section3";
import NavbarTop from "../components/NavbarTop";

const ContactUs = () => {
  return (
    <div className="container">
      <NavbarTop />
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default ContactUs;
