import React from "react";
import { useContext } from "react";
import { appContext } from "../../context/AppContext";
import "./Result.css";

function Result() {
  const { correctCounter, chosenAnswers, answeredCount } =
    useContext(appContext);

  return (
    <div className="result-container">
      <div className="score-container">
        <div className="results">
          <h2 className="score-header">Results</h2>
          <p className="result">Doğru sayısı: {correctCounter}</p>
          <p className="result">
            Yanlış sayısı: {answeredCount - correctCounter}
          </p>
          <p className="result">Boş sayısı: {10 - answeredCount}</p>
        </div>
        <div className="score">
          <h2 className="score-header">Score:</h2>
          <p className="total">{correctCounter}</p>
        </div>
      </div>
      <div>
        <h2 className="answers">Answers</h2>
        <ul className="result-list">
          {chosenAnswers.map((answer) => {
            return (
              <li
                key={answer.id}
                className={answer.isCorrect ? "correct-answer" : "wrong-answer"}
              >
                Soru {answer.id}: {answer.chosenAnswer}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Result;