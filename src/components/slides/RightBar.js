import React, { useContext } from "react";
import { slidesData } from "./slidesData";
import { Context } from "../../Context";

import "../../assets/styles/rightBar.css";

function Rightbar() {
  let { index, circularPrecentage } = useContext(Context);

  const bubbleText = slidesData.filter(slide => slide.id === index).map((slide) => {
      return (
        <p className="bubText" key={slide.id}>
          {slide.bubbleText}{" "}
        </p>
      );
  });

  return (
    <div className="right-bar">
      <div className="top-logo">
        <img
          src={require("../../assets/icons/hackeru-logo.png")}
          alt="hackeru logo"
        />
      </div>

      <div className="precentage-container">
        <svg viewBox="0 0 36 36" className="circular-chart">
          <path
            className="circle"
            strokeDasharray={circularPrecentage + ", 100"}
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>

        <div className="precentage">
          {circularPrecentage}%<div className="outOf">{index}/10</div>
        </div>
      </div>

      <div className="bubble">
        <img src={require("../../assets/icons/bubble.svg")} alt="bubble" />
        {bubbleText}
      </div>
    </div>
  );
}

export default Rightbar;
