import React, { useCallback, useState } from "react";
import QUESTIONS from "../../../questions";
import Question from "./Question";
import Summary from "./Summary";

const Quiz = () => {
  //const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  //const [answerState, setAnswerState] = useState("");

  const currentQuestionIndex = userAnswers.length;
  const quizIsComplete = currentQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      //setAnswerState("answered");
      setUserAnswers((prev) => {
        return [...prev, selectedAnswer];
      });

      /*setTimeout(() => {
        if (selectedAnswer === QUESTIONS[currentQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }
        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);*/
    },
    //[currentQuestionIndex]
    []
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={currentQuestionIndex}
        index={currentQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
