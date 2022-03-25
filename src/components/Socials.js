import React from "react";
import facebook from "./SVG/facebook.svg";
import insta from "./SVG/insta.svg";
import linkedin from "./SVG/linkedin.svg";
import twitter from "./SVG/twitter.svg";

const Socials = () => {
  return (
    <div className="start-0 text-white ms-5 mb-5 fixed-bottom">
      <div className="row row-cols-1 gy-3">
        <div className="col">
          <a
            href="https://mobile.twitter.com/oxychainearth"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="twitter" />
          </a>
        </div>
        <div className="col">
          <a
            href="https://www.instagram.com/explore/tags/oxychain/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={insta} alt="Instagram" />
          </a>
        </div>
        <div className="col">
          <a
            href="https://www.linkedin.com/company/oxychain"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
        <div className="col">
          <a
            href="https://www.facebook.com/oxychain/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="facebook" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socials;
