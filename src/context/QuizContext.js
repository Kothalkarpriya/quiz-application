import { createContext, useContext, useState } from "react";

const QuizContext = createContext();

function QuizContextProvider({ children }) {
  const [showResult, setShowResult] = useState(false);
  const [currenQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <QuizContext.Provider
      value={{
        showResult,
        setShowResult,
        currenQuestion,
        setCurrentQuestion,
        score,
        setScore,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

const useQuizContent = () => useContext(QuizContext);

export { QuizContextProvider, useQuizContent };
