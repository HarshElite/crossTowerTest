import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import BoilerScreen from "./screens/BoilerScreen";
import SupportScreen from "./screens/SupportScreen";
import Cookie from "./screens/CookieScreen";
import Security from "./screens/SecurityScreen";
import TermsOfUse from "./screens/TermsOfUse";
import FAQ from "./screens/FAQ";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import RefundPolicy from "./screens/RefundPolicy";
import ComingSoon from "./screens/ComingSoon";
import Disclaimer from "./screens/Disclaimer";
import ContactUs from "./screens/ContactUs";
import AboutUs from "./screens/AboutUs";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Route path="/" component={HomeScreen} exact></Route>
      <Route path="/test" component={BoilerScreen}></Route>
      <Route path="/aboutus" component={AboutUs}></Route>
      <Route path="/support" component={SupportScreen}></Route>
      <Route path="/faq" component={FAQ}></Route>
      <Route path="/privacypolicy" component={PrivacyPolicy}></Route>
      <Route path="/security" component={Security}></Route>
      <Route path="/cookiepolicy" component={Cookie}></Route>
      <Route path="/refundpolicy" component={RefundPolicy}></Route>
      <Route path="/disclaimer" component={Disclaimer}></Route>
      <Route path="/termsofuse" component={TermsOfUse}></Route>
      <Route path="/contactus" component={ContactUs}></Route>
      <Route path="/login" component={ComingSoon}></Route>
      <Route path="/comingsoon" component={ComingSoon}></Route>
      <Footer />
    </Router>
  );
}

export default App;
