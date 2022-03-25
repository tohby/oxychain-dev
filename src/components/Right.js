import React, { useState } from "react";
import BuyToken from "./BuyToken";
import Cloud from "./SVG/Cloud.svg";
import Thermostat from "./SVG/Thermostat.svg";
import Map from "./Map";

const Right = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="col-md-5 column">
        <div className="grey-container p-4 px-5 text-white h-100">
          <div className="row">
            <div className="d-grid gap-2 col-6 mx-auto">
              <button
                className="btn btn-light"
                type="button"
                onClick={handleShow}
              >
                Buy 02 tokens
              </button>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-success" type="button">
                Release 02 tokens
              </button>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 px-3">
              <h5>Timeline</h5>
              <ul>
                <li>Milestone 1</li>
                <li>Milestone 2</li>
                <li>Milestone 3</li>
              </ul>
            </div>
            <div className="col-md-6 px-3">
              <h5>Project files</h5>
              <ul>
                <li>File 1</li>
                <li>File 2</li>
                <li>File 3</li>
              </ul>
            </div>
          </div>
          <div className="row my-5 align-items-center pb-5">
            <div className="col-3">
              <img src={Thermostat} alt="cloud" width="15px" /> 37 <sup>&#x2218;</sup>
            </div>
            <div className="col-3">4500m <sup>2</sup></div>
            <div className="col-6">
              <img src={Cloud} alt="cloud" width="30px" /> 5 tons capturated
            </div>
          </div>

          <Map />
        </div>
      </div>

      <BuyToken show={show} handleClose={handleClose} />
    </>
  );
};

export default Right;
