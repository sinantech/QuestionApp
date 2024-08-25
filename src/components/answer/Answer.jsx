import React from "react";
import "./Answer.css";
import { useContext } from "react";
import { appContext } from "../../context/AppContext";
import questions from "../../questions";

function Answer({ currentQuestion }) {
  const {
    counter,
    setCounter,
    setTimer,
    correctCounter,
    setCorrectCounter,
    chosenAnswers,
    setChosenAnswers,
    answeredCount,
    setAnsweredCount,
  } = useContext(appContext);

  function handleClick(index) {
    const answer = document.querySelector(".answer-container");
    if (currentQuestion.options[index] == currentQuestion.answer) {
      chosenAnswers.push({
        id: questions.indexOf(currentQuestion) + 1,
        chosenAnswer: currentQuestion.options[index],
        isCorrect: true,
      });
      setChosenAnswers([...chosenAnswers]);
      setCorrectCounter(correctCounter + 1);
    } else {
      chosenAnswers.push({
        id: questions.indexOf(currentQuestion) + 1,
        chosenAnswer: currentQuestion.options[index],
        isCorrect: false,
      });
      setChosenAnswers([...chosenAnswers]);
    }
    setAnsweredCount(answeredCount + 1);
    setCounter(counter + 1);
    setTimer(30);
    answer.style.visibility = "hidden";
  }

  return (
    <div className="answer-container">
      {currentQuestion.options.map((option, index) => (
        <button
          className="option"
          key={index}
          onClick={() => handleClick(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Answer;