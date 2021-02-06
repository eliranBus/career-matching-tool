import React from "react";

import "../../assets/styles/results.css";
import SureButton from "./LastButtons";
import Decor from "../Decor";

function CreativeResult() {
  return (
    <div className="results">
      <Decor />
      <h1>קריאייטיב</h1>
      <div className="content">
        <p>
          <p className="bold">תודה שהגעת עד לכאן!</p>
          על סמך התשובות שענית, נראה שאתה אדם יצירתי, אוהב להשתמש בדמיון שלך
          ולקחת אותו הכי רחוק שאפשר. יש לך יכולת מעולה לחשוב מחוץ לקופסא ולהביא
          רעיונות שיכולים להעיף כל עסק כמה צעדים קדימה. זו יכולת מעולה שממש ממש
          נדרשת בתחום הייטק
        </p>
        <div className="icons">
          <div className="first icon">
            <img
              src={require("../../assets/resultsIcons/speaker.png")}
              alt="קורס שיווק דיגיטלי"
            />
            <p>קורס שיווק דיגיטלי</p>
          </div>
          <div className="second icon">
            <img
              src={require("../../assets/resultsIcons/box.png")}
              alt="קורס אנימציה בתלת מימד"
            />
            <p>קורס אנימציה בתלת מימד</p>
          </div>
          <div className="third icon">
            <img
              src={require("../../assets/resultsIcons/remote.png")}
              alt="קורס גיימינג VR"
            />
            <p>קורס גיימינג VR</p>
          </div>
          <div className="fourth icon">
            <img
              src={require("../../assets/resultsIcons/palet.png")}
              alt="קורס עיצוב גרפי עם התמחות ב UI/UX"
            />
            <p>קורס עיצוב גרפי עם התמחות ב UI/UX</p>
          </div>
        </div>
        <p>
          <span className="bolder">אז מה אתה אומר, צדקנו?</span> בשיחת ייעוץ
          קצרה וחינמית נתן לך את כל הפרטים לגבי ?הקורסים הרלוונטיים לגביך. שנדבר
        </p>
        <SureButton />
        <div className="resultPerson">
          <img src={require(`../../assets/persons/Person8.png`)} alt="person" />
        </div>
      </div>
    </div>
  );
}

export default CreativeResult;
