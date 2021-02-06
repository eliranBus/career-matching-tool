import React from "react";
import "../../assets/styles/results.css";
import SureButton from "./LastButtons";
import Decor from "../Decor";

function TechniqalResult() {
  return (
    <div className="results">
      <Decor />
      <h1>טכני</h1>
      <div className="content">
        <p>
          <span className="bold">תודה שהגעת עד לכאן!</span>
          על סמך התשובות שענית נראה שאתה אדם שאוהב לרדת לעומקם של דברים. אתה
          אוהב לדעת למה דברים קורים כמו שהם קורים ואם יש בעיה, אתה תעשה הכל
          בשביל לפתור אותה בצורה הטובה ביותר. אתה מהאנשים האלו. שכולם קוראים להם
          לעזרה כשיש להם תקלה טכנית, אלו שכולם סומכים עליהם שיפתרו כל בעיה שלא
          תהיה ההייטק צריך אנשים כמוכם!
        </p>
        <div className="icons">
          <div className="first icon">
            <img
              src={require("../../assets/resultsIcons/monitor.png")}
              alt="QA"
            />
            <p>קורס בדיקות תוכנה QA</p>
          </div>
          <div className="second icon">
            <img
              src={require("../../assets/resultsIcons/chain.png")}
              alt="Network"
            />
            <p>קורס ניהול רשתות</p>
          </div>
          <div className="third icon">
            <img
              src={require("../../assets/resultsIcons/shield.png")}
              alt="Cyber"
            />
            <p>קורס סייבר ואבטחת מידע</p>
          </div>
          <div className="fourth icon">
            <img
              src={require("../../assets/resultsIcons/server.png")}
              alt="DBA"
            />
            <p>קורס DBA</p>
          </div>
          <div className="fifth icon">
            <img
              src={require("../../assets/resultsIcons/network.png")}
              alt="Linux"
            />
            <p>קורס לינוקס</p>
          </div>
        </div>
        <p>
          <span className="bolder">אז מה אתה אומר, צדקנו?</span> בשיחת ייעוץ
          קצרה וחינמית נתן לך את כל הפרטים לגבי ?הקורסים הרלוונטיים לגביך. שנדבר
        </p>

        <SureButton />

        <div className="resultPerson">
          <img src={require(`../../assets/persons/Person9.png`)} alt="person" />
        </div>
      </div>
    </div>
  );
}

export default TechniqalResult;
