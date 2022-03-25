import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Socials from "../components/Socials";
import Slider from "../components/Slider";
import Left from "../components/Left";
import Right from "../components/Right";

const token = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Slider />
        <div className="row mt-5 d-flex flex-wrap">
          <Left />
          <Right />
        </div>
      </div>
      <Socials />
      <Footer />
    </div>
  );
};

export default token;
