import React from "react";
import '../Components/Download.css';

const PebCtaBanner = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <h2 className="text">
          To know information about <strong>Opus</strong> Engineering
        </h2>
        <a
          href="/opus.pdf"
          download="Opus-Brochure.pdf"
          className="button"
        >
          Download Brochure
        </a>
      </div>
    </div>
  );
};

export default PebCtaBanner;