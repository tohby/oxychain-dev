import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Left from "../components/Left";
import Right from "../components/Right";
import { Button } from "react-bootstrap";

const token = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Slider />
        <div className="row mt-5 d-flex flex-wrap">
            <Left/>
            <Right/>
        </div>
      </div>
    </div>
  );
};

export default token;
