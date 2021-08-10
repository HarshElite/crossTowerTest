import React from "react";
import NavBar from "../components/Navbar";
import Section1 from "../components/HomeScreen_Components/Section1";
import Section2 from "../components/HomeScreen_Components/Section2";
import Section3 from "../components/HomeScreen_Components/Section3";
import Section4 from "../components/HomeScreen_Components/Section4";
import Section5 from "../components/HomeScreen_Components/Section5";
import Section6 from "../components/HomeScreen_Components/Section6";
import Section7 from "../components/HomeScreen_Components/Section7";
import Section8 from "../components/HomeScreen_Components/Section8";
import Section9 from "../components/HomeScreen_Components/Section9";
import Section10 from "../components/HomeScreen_Components/Section10";

const HomeScreen = () => {
  return (
    <>
      <div className="container">
        <NavBar />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section7 />
        <Section6 />
        <Section8 />
        <Section9 />
        <Section10 />
      </div>
    </>
  );
};

export default HomeScreen;
