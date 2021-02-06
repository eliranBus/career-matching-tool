import React from "react";

import "../../assets/styles/lastSlide.css";

function LastSlide() {
  return (
    <div className="final-container">
      <img
        src={require("../../assets/icons/last-slide.svg")}
        alt="hackeru logo"
        className="yes"
      />
      <hr className="after-yes" />
      <div className="person">
        <img src={require("../../assets/persons/Person3.png")} alt="person" />
      </div>
    </div>
  );
}

export default LastSlide;
