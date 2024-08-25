import React, { useCallback, useEffect, useState } from "react";
import questions from "../../questions";
import { appContext } from "../../context/AppContext";
import { useContext } from "react";
import "./Question.css";
import Answer from "../answer/Answer";
import Result from "../result/Result";

function Question() {
  const { timer, setTimer, counter, setCounter, correctCounter } =
    useContext(appContext);

  const currentQuestion = questions[counter - 1];

  if (counter <= questions.length) {
    useEffect(() => {
      const intervalId = setInterval(() => {
        const answer = document.querySelector(".answer-container");
        if (timer <= 20 && timer > 0) {
          setTimer(timer - 1);
          answer.style.visibility = "visible";
        } else if (timer > 20) {
          setTimer(timer - 1);
          answer.style.visibility = "hidden";
        } else {
          setTimer(30);
          setCounter(counter + 1);
          answer.style.visibility = "hidden";
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }, [counter, setCounter, timer, setTimer]);
  }

  //const allQuestionsAnswered = counter > questions.length;

  return (
    <div className="question-container">
      <img src={currentQuestion.media} alt="hey" />
      <div className="question-border">
        <p>{currentQuestion.question}</p>
      </div>
      <Answer currentQuestion={currentQuestion} />
    </div>
  );
}

export default Question;