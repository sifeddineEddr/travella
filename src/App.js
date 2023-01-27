import React from "react";
import Home from "./home";
import About from "./about";
import Destinations from "./destinations/destinations";
import Booking from "./booking/booking";
import Footer from "./footer";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Destinations />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;
