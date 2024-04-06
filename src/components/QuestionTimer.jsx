import React, { useState, useEffect } from "react";

const QuestionTimer = ({ timeout, onTimeout }) => {
  const [reminingTime, setReminingTime] = useState(timeout);

  useEffect(() => {
    const timeoutRef = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timeoutRef);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setReminingTime((prev) => prev - 100);
    }, 100);

    return () => {
      clearInterval(intervalRef);
    };
  }, []);

  return <progress id="question-time" max={timeout} value={reminingTime} />;
};

export default QuestionTimer;
