import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import avatar from "../avatar.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="oxychain" height="38" />
        </Link>
        <div class="d-flex align-items-center">
          <span className="text-white h6 me-4">0x204...BA7D</span>{" "}
          <img src={avatar} alt="oxychain" height="70" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-down text-white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
