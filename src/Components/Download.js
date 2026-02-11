import React from "react";

import '../Components/Download.css';
const PebCtaBanner = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <h2 className="text">
          To know information about <strong>Opus</strong> Engineering <strong></strong>
        </h2>

        <button className="button">
              <a
          href="/opus.pdf"
          download="Opus-Brochure.pdf"
          className="button"
        >
          Download Brochure</a>
        </button>
      </div>
    </div>
  );
};


export default PebCtaBanner;
