import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import BoilerScreen from "./screens/BoilerScreen";
import SupportScreen from "./screens/SupportScreen";
import FAQ from "./screens/FAQ";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import RefundPolicy from "./screens/RefundPolicy";
import AboutUs from "./screens/AboutUs";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <Router>
      <ScrollToTop />

      <Route path="/" component={HomeScreen} exact></Route>
      <Route path="/test" component={BoilerScreen}></Route>
      <Route path="/aboutus" component={AboutUs}></Route>
      <Route path="/support" component={SupportScreen}></Route>
      <Route path="/faq" component={FAQ}></Route>
      <Route path="/privacypolicy" component={PrivacyPolicy}></Route>
      <Route path="/refundpolicy" component={RefundPolicy}></Route>
      <Footer />
    </Router>
  );
}

export default App;
