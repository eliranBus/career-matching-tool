import React from "react";
import { useHistory } from "react-router-dom";

function LastButtons() {
  let history = useHistory();

  return (
    <div className="buttons">
      <button
        className="finishBtn resultButton"
        onClick={() => history.push("/thanks")}
      >
        לא מתאים כרגע, תודה
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
        </svg>
      </button>
      <button
        className="toFormBtn resultButton"
        onClick={() => history.push("/contact")}
      >
        בטח!
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
        </svg>
      </button>
    </div>
  );
}

export default LastButtons;
