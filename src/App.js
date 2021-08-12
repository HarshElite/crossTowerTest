import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import BoilerScreen from "./screens/BoilerScreen";
import AboutUs from "./screens/AboutUs";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Route path="/" component={HomeScreen} exact></Route>
      <Route path="/test" component={BoilerScreen}></Route>
      <Route path="/aboutus" component={AboutUs}></Route>
      <Footer />
    </Router>
  );
}

export default App;
