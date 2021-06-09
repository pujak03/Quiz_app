import React from "react";
import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../Helper/Contexts";
import { Questions } from "../Helper/QuestionSet";

const EndScreen = () => {
  const { score, setScore, setGameState, userName } = useContext(
    GameStateContext
  );

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };
  return (
    <div className="endscreen">
      <h1>Quiz Finished</h1>
      <h3>{userName} your score is-</h3>
      <h1>
        {score} / {Questions.length}
      </h1>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default EndScreen;