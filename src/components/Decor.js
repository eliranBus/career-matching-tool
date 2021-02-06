import React from "react";

import "../assets/styles/decor.css";

function Decor() {
  return (
    <div className="decorImages">
      <img
        src={require("../assets/shapes/Ellipse-1.svg")}
        className="shape"
        alt="shape"
        style={{ right: "10em", bottom: "30%", width: "1em" }}
      />
      <img
        src={require("../assets/shapes/Ellipse-2.svg")}
        className="shape"
        alt="shape"
        style={{ right: "4em", bottom: "25%", width: "0.5em" }}
      />
      <img
        src={require("../assets/shapes/Ellipse-2.svg")}
        className="shape"
        alt="shape"
        style={{ top: "3.5em", left: "13em", width: "0.3em" }}
      />
      <img
        src={require("../assets/shapes/Ellipse-3.svg")}
        className="shape"
        alt="shape"
        style={{ bottom: "-2.5em", width: "7em", left: "1em" }}
      />
      <img
        src={require("../assets/shapes/Ellipse-4.svg")}
        className="shape"
        alt="shape"
        style={{ top: "13em", left: "3em", width: "0.5em" }}
      />
      <img
        src={require("../assets/shapes/Ellipse-6.svg")}
        className="shape"
        alt="shape"
        style={{ top: "-0.5em", width: "1em", left: "5em" }}
      />
      <img
        src={require("../assets/shapes/Ellipse-5.svg")}
        className="shape"
        alt="shape"
        style={{ right: "8.6em", top: "10%", width: "2em" }}
      />
      <img
        src={require("../assets/shapes/Ellipse-5.svg")}
        className="shape non-mobile"
        alt="shape"
        style={{ top: "16em", left: "1.5em", width: "2em" }}
      />
      <img
        src={require("../assets/shapes/Ellipse-6.svg")}
        className="shape"
        alt="shape"
        style={{ right: "10em", top: "20%", width: "1.5em" }}
      />
      <img
        src={require("../assets/shapes/Line-1.svg")}
        className="shape right-line"
        alt="shape"
        style={{ left: "1em", top: "4em", zIndex: "-5", height: "10em" }}
      />
      <img
        src={require("../assets/shapes/Line-1.svg")}
        className="shape left-line"
        alt="shape"
        style={{ right: "10em", bottom: "-10em" }}
      />
      <img
        src={require("../assets/shapes/Polygon-1.svg")}
        className="shape"
        alt="shape"
        style={{ right: "6em", top: "21%", width: "2em" }}
      />
      <img
        src={require("../assets/shapes/Polygon-1.svg")}
        className="shape"
        alt="shape"
        style={{
          right: "4em",
          bottom: "1.5em",
          width: "3em",
          transform: "rotate(20deg)",
        }}
      />
      <img
        src={require("../assets/shapes/Polygon-1.svg")}
        className="shape"
        alt="shape"
        style={{
          top: "5.5em",
          left: "8em",
          width: "3em",
        }}
      />
      <img
        src={require("../assets/shapes/Polygon-2.svg")}
        className="shape"
        alt="shape"
        style={{ right: "5em", bottom: "30%", width: "0.5em" }}
      />
      <img
        src={require("../assets/shapes/Polygon-2.svg")}
        className="shape"
        alt="shape"
        style={{ top: "2em", left: "11em", width: "0.7em" }}
      />
      <img
        src={require("../assets/shapes/Polygon-5.svg")}
        className="shape"
        alt="shape"
        style={{
          right: "12em",
          bottom: "7em",
          width: "2.5em",
        }}
      />
      <img
        src={require("../assets/shapes/Polygon-5.svg")}
        className="shape"
        alt="shape"
        style={{
          top: "2em",
          left: "2em",
          width: "2.5em",
        }}
      />
    </div>
  );
}

export default Decor;
