import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

import Decor from "./Decor";
import Heading from "./Heading";
import "../assets/styles/form.css";

function Form() {
  let nameError = useRef(null);
  let phoneError = useRef(null);
  let emailError = useRef(null);
  let history = useHistory();

  function handleValidation() {
    let formIsValid = true;
    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");

    function addErrorIndication(input) {
      input.classList.add("errInd");
    }
    function removeErrorIndication(input) {
      input.classList.remove("errInd");
    }

    //Name
    if (!name.value) {
      formIsValid = false;
      nameError.current.innerHTML = "שם מלא הינו שדה חובה";
      addErrorIndication(name);
    } else if (!name.value.match(/^[' a-zא-ת]+(\s[' a-zא-ת]+)*$/i)) {
      formIsValid = false;
      nameError.current.innerHTML = "אנא הקלד אותיות בלבד";
      addErrorIndication(name);
    } else if (name.value.length < 2) {
      formIsValid = false;
      nameError.current.innerHTML = "שם מלא חייב להכיל מינימום 2 אותיות";
      addErrorIndication(name);
    } else {
      nameError.current.innerHTML = "";
      removeErrorIndication(name);
    }

    //Phone
    if (!phone.value) {
      formIsValid = false;
      phoneError.current.innerHTML = "טלפון נייד הינו שדה חובה";
      addErrorIndication(phone);
    } else if (
      !phone.value.match(
        /^(?:0(?!(5|7))(?:2|3|4|8|9))(?:-?\d){7}$|^(0(?=5|7)\d(?!6|9)(?:-?\d){8})$/
      )
    ) {
      formIsValid = false;
      phoneError.current.innerHTML = "אנא הקלד מספר טלפון נייד תקין";
      addErrorIndication(phone);
    } else {
      phoneError.current.innerHTML = "";
      removeErrorIndication(phone);
    }

    //Email

    let lastAtPos = email.value.lastIndexOf("@");
    let lastDotPos = email.value.lastIndexOf(".");

    if (!email.value) {
      formIsValid = false;
      emailError.current.innerHTML = "כתובת דוא''ל הינו שדה חובה";
      addErrorIndication(email);
    } else if (
      !(
        lastAtPos < lastDotPos &&
        lastAtPos > 0 &&
        email.value.indexOf("@@") === -1 &&
        lastDotPos > 2 &&
        email.value.length - lastDotPos > 2 &&
        email.value.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      )
    ) {
      formIsValid = false;
      emailError.current.innerHTML = "אנא הקלד כתובת דוא''ל תקינה";
      addErrorIndication(email);
    } else {
      emailError.current.innerHTML = "";
      removeErrorIndication(email);
    }

    return formIsValid;
  }

  function contactSubmit(e) {
    e.preventDefault();

    if (handleValidation()) {
      history.push(`/thanks`);
    }
  }

  return (
    <div className="top-container">
      <Heading />
      <Decor />
      <h2 className="heading-2">ענית על כל השאלות בהצלחה!</h2>
      <h3 className="heading-3">
        כתוב לנו כאן את הפרטים
        <br /> שלך ומיד נשלח אליך את התוצאות
      </h3>
      <div className="form-container">
        <form name="contactform" className="contactform">
          <div className="col-md-6">
            <fieldset>
              <input
                id="name"
                type="text"
                size="30"
                className="form__control name-field"
                placeholder="שם מלא:"
              />
              <span className="error" ref={nameError}></span>
              <br />

              <input
                id="phone"
                type="text"
                size="30"
                className="form__control name-field"
                placeholder="טלפון נייד:"
              />
              <span className="error" ref={phoneError}></span>
              <br />

              <input
                id="email"
                type="text"
                size="30"
                className="form__control name-field"
                placeholder="כתובת דוא''ל:"
              />
              <span className="error" ref={emailError}></span>
              <br />
            </fieldset>
          </div>
          <div className="col-md-12">
            <fieldset>
              <button
                className="btn btn-lg pro formBtn"
                id="submit"
                value="Submit"
                onClick={(e) => contactSubmit(e)}
              >
                הבא{" "}
                <span style={{ transform: "rotate(-90deg)", marginTop: "4px" }}>
                  {" "}
                  &#8963;{" "}
                </span>
              </button>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
