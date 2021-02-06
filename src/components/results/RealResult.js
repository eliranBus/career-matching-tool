import React from "react";
import "../../assets/styles/results.css";
import SureButton from "./LastButtons";
import Decor from "../Decor";

function RealResult() {
  return (
    <div className="results">
      <Decor />
      <h1>ריאלי</h1>
      <div className="content">
        <p>
          <span className="bold">תודה שהגעת עד לכאן!</span>
          על סמך התשובות שענית, נראה שאתה אדם מאוד אנליטי. יש לך חשיבה יוצאת
          דופן בכל מה שקשור למספרים יכול מאוד להיות שאתה היית מהאנשים האלה
          שהצטיינו במתמטיקה כשלמדת בבית ספר. נו... אלו שכולם העתיקו מהם במבחן כי
          הם היו כל כך טובים. אתה אוהב אתגרים וכשאתה מקבל משימה אתה כנראה תעשה
          הכל כדי !לפתור אותה על הצד הטוב ביותר. בהייטק מחפשים אנשים כמוך
        </p>
        <div className="icons">
          <div className="first icon">
            <img
              src={require("../../assets/resultsIcons/divs.png")}
              alt="קורס בניית אתרים"
            />
            <p>קורס בניית אתרים</p>
          </div>
          <div className="second icon">
            <img
              src={require("../../assets/resultsIcons/mobile.png")}
              alt="קורס פיתוח אפליקציות"
            />
            <p>קורס פיתוח אפליקציות</p>
          </div>
          <div className="third icon">
            <img
              src={require("../../assets/resultsIcons/globe.png")}
              alt="NET .קורס"
            />
            <p>NET .קורס</p>
          </div>
        </div>
        <p>
          <span className="bolder">אז מה אתה אומר, צדקנו?</span> בשיחת ייעוץ
          קצרה וחינמית נתן לך את כל הפרטים לגבי ?הקורסים הרלוונטיים לגביך. שנדבר
        </p>

        <SureButton />

        <div className="resultPerson">
          <img src={require(`../../assets/persons/Person5.png`)} alt="person" />
        </div>
      </div>
    </div>
  );
}

export default RealResult;
