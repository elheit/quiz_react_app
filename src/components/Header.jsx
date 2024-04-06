import React from "react";
import QuizLogo from "../assets/quiz-logo.png";

const Header = () => {
  return (
    <header>
      <img src={QuizLogo} alt="Quiz Logo" />
      <h1>RaectQuiz</h1>
    </header>
  );
};

export default Header;
