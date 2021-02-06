import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Heading from "./Heading";
import Logo from "./Logo";
import "../assets/styles/header.css";

function Header() {
  let history = useHistory();
  let [quesNumber, setQuestNumber] = useState(0);


  function startQuiz() {
    setQuestNumber(quesNumber + 1);
    history.push(`/questions`);
  }

  
  return (
    <div className="top-wrapper">
      <Heading />
      <div className="question">
        <p>
          רוצה לדעת איזה מקצוע בהייטק <br />
          <span className="bold">תפור עלייך בול?</span>
        </p>
      </div>
      <div className="person">
        <img src={require("../assets/persons/Person13.png")} alt="person" />
      </div>
      <div className="button">
        <button className="startBtn" onClick={() => startQuiz()}>
          לחץ לגלות
          <svg
            className="nextArrow"
            xmlns="http://www.w3.org/2000/svg"
            width="10.305"
            height="19.08"
            viewBox="0 0 10.305 19.08"
          >
            <g transform="translate(128.047 19.081) rotate(180)">
              <g transform="translate(117.742 0)">
                <path
                  d="M127.83,9.017,119,.216a.74.74,0,1,0-1.044,1.047l8.3,8.277-8.3,8.277A.74.74,0,0,0,119,18.865l8.825-8.8a.739.739,0,0,0,0-1.047Z"
                  transform="translate(-117.742 0)"
                />
              </g>
            </g>
          </svg>{" "}
        </button>
      </div>

      <Logo />

      <img
        src={require("../assets/shapes/Ellipse-1.svg")}
        className="shape UpDown"
        alt="shape"
        style={{ right: "10em", bottom: "30%", width: "1em" }}
      />
      <img
        src={require("../assets/shapes/Ellipse-2.svg")}
        className="shape Breath2"
        alt="shape"
        style={{ right: "4em", bottom: "25%", width: "0.5em" }}
      />
      <img
        src={require("../assets/shapes/Ellipse-2.svg")}
        className="shape LeftRight Breath2"
        alt="shape"
        style={{ top: "3.5em", left: "13em", width: "0.3em" }}
      />
      <img
        src={require("../assets/shapes/Ellipse-3.svg")}
        className="shape Breath"
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
        className="shape Breath"
        alt="shape"
        style={{ right: "8.6em", top: "10%", width: "2em" }}
      />
      <img
        src={require("../assets/shapes/Ellipse-5.svg")}
        className="shape Breath2"
        alt="shape"
        style={{ top: "16em", left: "1.5em", width: "2em" }}
      />
      <img
        src={require("../assets/shapes/Ellipse-6.svg")}
        className="shape DownUp"
        alt="shape"
        style={{ right: "10em", top: "20%", width: "1.5em" }}
      />
      <img
        src={require("../assets/shapes/Line-1.svg")}
        className="shape right-line UpDown"
        alt="shape"
        style={{ left: "6em", top: "15%", zIndex: "-5" }}
      />
      <img
        src={require("../assets/shapes/Line-1.svg")}
        className="shape left-line Breath"
        alt="shape"
        style={{ right: "10em", bottom: "-10em" }}
      />
      <img
        src={require("../assets/shapes/Polygon-1.svg")}
        className="shape LeftRight"
        alt="shape"
        style={{ right: "6em", top: "21%", width: "2em" }}
      />
      <img
        src={require("../assets/shapes/Polygon-1.svg")}
        className="shape Breath"
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
        className="shape RightLeft"
        alt="shape"
        style={{
          top: "5.5em",
          left: "8em",
          width: "3em",
        }}
      />
      <img
        src={require("../assets/shapes/Polygon-2.svg")}
        className="shape UpDown"
        alt="shape"
        style={{ right: "5em", bottom: "30%", width: "0.5em" }}
      />
      <img
        src={require("../assets/shapes/Polygon-2.svg")}
        className="shape Breath"
        alt="shape"
        style={{ top: "2em", left: "11em", width: "0.7em" }}
      />
      <img
        src={require("../assets/shapes/Polygon-5.svg")}
        className="shape DownUp"
        alt="shape"
        style={{
          right: "12em",
          bottom: "7em",
          width: "2.5em",
        }}
      />
      <img
        src={require("../assets/shapes/Polygon-5.svg")}
        className="shape DownUp"
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

export default Header;
