import { useRef } from "react";

const Answers = ({ answers, selectedAnswer, answerState, onSelect }) => {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => (
        <li key={answer} className="answer">
          <button
            disabled={answerState}
            onClick={() => onSelect(answer)}
            className={
              selectedAnswer === answer
                ? answerState === "answered"
                  ? "selected"
                  : answerState
                : ""
            }
          >
            {answer}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Answers;
