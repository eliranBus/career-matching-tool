import React, { useState, useContext, useRef } from "react";
import { useHistory } from "react-router-dom";

// Import Swiper React components
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import { slidesData } from "./slides/slidesData";
import Heading from "./Heading";
import { Context } from "../Context";
import Decor from "./Decor";

function Carousel() {
  let {
    index,
    setIndex,
    circularPrecentage,
    setCircularPrecentage,
  } = useContext(Context);

  let [concatAnswers, setConcatAnswers] = useState([]);
  let [slideNum, setSlideNum] = useState(1);
  let history = useHistory();
  let qNumbers = useRef(null);
  const resultBtn = useRef(null);
  const nextBtnDisabled = useRef(null);
  const prevBtnDisabled = useRef(null);
  const nextBtn = useRef(null);
  const prevBtn = useRef(null);

  function nextQuestion() {
    concatResults();
    setSlideNum((slideNum = slideNum + 1));
    fillBullets();
    if (index < 10) {
      setIndex((index = index + 1));
    }
    if (circularPrecentage < 100) {
      setCircularPrecentage((circularPrecentage = circularPrecentage + 10));
    }
    nextBtnDisabled.current.style.display = "block";
    prevBtnDisabled.current.style.display = "none";
  }

  function prevQuestion() {
    let answers = document.querySelectorAll(".answer");
    [].forEach.call(answers, function (el) {
      el.classList.remove("answered");
    });
    subtractResults();
    setSlideNum((slideNum = slideNum - 1));
    fillBullets();
    // history.push(`/q-${slideNum}`);
    if (index > 1) {
      setIndex((index = index - 1));
    }
    if (circularPrecentage > 10) {
      setCircularPrecentage((circularPrecentage = circularPrecentage - 10));
      if (index === 1) {
        prevBtnDisabled.current.style.display = "block";
      }
    }

    (function hideResultBtn() {
      nextBtnDisabled.current.style.display = "block";
      nextBtn.current.style.display = "flex";
      nextBtn.current.style.opacity = "1";
      resultBtn.current.style.display = "none";
    })();
  }

  function concatResults() {
    concatAnswers.push(qNumbers.current);
    setConcatAnswers(concatAnswers);
  }

  function subtractResults() {
    concatAnswers.pop();
    setConcatAnswers(concatAnswers);
  }

  function showResultsBtn() {
    if (slideNum === 10) {
      nextBtnDisabled.current.style.dispaly = "none";
      document.querySelector(".swiper-button-disabled").style.opacity = "0";
      resultBtn.current.style.display = "flex";
    }
  }

  function showResults() {
    let totalScore = concatAnswers.reduce(function (a, b) {
      return a + b;
    }, 0);

    function resetProgress() {
      setIndex(1);
      setCircularPrecentage(10);
      setConcatAnswers([]);
    }

    if (totalScore < 11) {
      history.push(`/results-creative`);
      resetProgress();
    } else if (totalScore > 11 && totalScore < 21) {
      history.push(`/results-real`);
      resetProgress();
    } else {
      history.push(`/results-techniqal`);
      resetProgress();
    }
  }
  function fillBullets() {
    const bullets = document.querySelectorAll(".swiper-pagination-bullet");
    const numbers = document.querySelectorAll(".slideNumber");

    for (const number of numbers) {
      number.classList.remove("enlarged");
    }

    for (const bullet of bullets) {
      if (Number(bullet.dataset.number) === Number(slideNum)) {
        bullet.previousElementSibling.classList.add("enlarged");
        bullet.classList.add("currentBullet");
      } else {
        bullet.classList.remove("currentBullet");
      }
      if (bullet.dataset.number <= slideNum) {
        bullet.classList.add("swiper-pagination-bullet-active");
      } else if (bullet.dataset.number > slideNum) {
        bullet.classList.remove("swiper-pagination-bullet-active");
      }
    }
  }

  function clicked(e) {
    let answers = document.querySelectorAll(".answer");
    [].forEach.call(answers, function (el) {
      el.classList.remove("answered");
    });

    e.target.classList.add("answered");
    qNumbers.current = Number(e.target.dataset.number);
    nextBtnDisabled.current.style.display = "none";
    showResultsBtn();
  }

  SwiperCore.use([Navigation, Pagination, A11y]);

  const slideView = slidesData.map((slide) => {
    return (
      <SwiperSlide key={slide.id}>
        <h3> {slide.question} </h3>

        <div className="answers">
          <p className="answer" data-number="1" onClick={clicked}>
            {slide.answer1}
          </p>
          <p className="answer" data-number="2" onClick={clicked}>
            {slide.answer2}
          </p>
          <p className="answer" data-number="3" onClick={clicked}>
            {slide.answer3}
          </p>
        </div>

        <div className="slide-person">
          <img
            src={require(`../assets/persons/${slide.personImage}`)}
            alt="person"
          />
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className="slide">
      <Heading />

      <Decor />

      <Swiper
        loop={false}
        allowTouchMove={false}
        navigation={{
          nextEl: ".swiper-btn-next",
          prevEl: ".swiper-btn-previous",
        }}
        spaceBetween={50}
        pagination={{ clickable: false }}
      >
        {slideView}


        <div
          className="swiper-btn-next-disabled"
          tabIndex="3"
          role="button"
          aria-label="Next slide"
          aria-disabled="false"
          ref={nextBtnDisabled}
        ></div>
        <div
          className="swiper-btn-prev-disabled"
          tabIndex="3"
          role="button"
          aria-label="Next slide"
          aria-disabled="false"
          ref={prevBtnDisabled}
        ></div>
        <div
          className="swiper-btn-next"
          tabIndex="3"
          role="button"
          aria-label="Next slide"
          aria-disabled="false"
          onClick={() => nextQuestion()}
          ref={nextBtn}
        ></div>
        <div
          className="swiper-btn-previous"
          tabIndex="3"
          role="button"
          aria-label="Next slide"
          aria-disabled="false"
          onClick={() => prevQuestion()}
          ref={prevBtn}
        ></div>

        <div className="swiper-pagination swiper-pagination-bullets">
          <span data-number="1" className="slideNumber enlarged">
            1
          </span>
          <span
            data-number="1"
            className="swiper-pagination-bullet swiper-pagination-bullet-active"
          ></span>
          <span data-number="2" className="slideNumber">
            2
          </span>
          <span data-number="2" className="swiper-pagination-bullet"></span>
          <span className="slideNumber">3</span>
          <span data-number="3" className="swiper-pagination-bullet"></span>
          <span className="slideNumber">4</span>
          <span data-number="4" className="swiper-pagination-bullet"></span>
          <span className="slideNumber">5</span>
          <span data-number="5" className="swiper-pagination-bullet"></span>
          <span className="slideNumber">6</span>
          <span data-number="6" className="swiper-pagination-bullet"></span>
          <span className="slideNumber">7</span>
          <span data-number="7" className="swiper-pagination-bullet"></span>
          <span className="slideNumber">8</span>
          <span data-number="8" className="swiper-pagination-bullet"></span>
          <span className="slideNumber">9</span>
          <span data-number="9" className="swiper-pagination-bullet"></span>
          <span className="slideNumber">10</span>
          <span data-number="10" className="swiper-pagination-bullet"></span>
        </div>

        <button
          className="resultsBtn"
          ref={resultBtn}
          onClick={() => showResults()}
        >
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
      </Swiper>
    </div>
  );
}

export default Carousel;
