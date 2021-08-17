import React from "react";
import Navbar from "../components/Navbar";
import Section1 from "../components/FAQ_Components/Section1";
import Section2 from "../components/FAQ_Components/Section2";
import NavbarTop from "../components/NavbarTop";

const FAQ = () => {
  return (
    <div className="container">
      <NavbarTop />
      <Navbar />
      <Section1 />
      <Section2 />
    </div>
  );
};

export default FAQ;
