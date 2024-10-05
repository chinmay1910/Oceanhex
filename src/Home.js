import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrowserMockup from "./components/BrowserMockup";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <BrowserMockup />
    </div>
  );
};

export default Home;
