import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuizContent } from "../../context/QuizContext";
import "../../assests/styles/quiz.css";

export default function Quiz() {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location?.state?.tag;
  const [data, setData] = useState();

  const {
    showResult,
    setShowResult,
    currenQuestion,
    setCurrentQuestion,
    score,
    setScore,
  } = useQuizContent();

  useEffect(() => {
    fetch(`/question?tags=${tag}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [tag]);

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currenQuestion + 1 < data?.questions.length) {
      setCurrentQuestion(currenQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
    navigate("/");
  };
  return (
    <section className="section">
      <div className="main-container">
        <article className="quiz-container">
          <h2 className="upper-text">Quiz on Understanding of {tag}</h2>
          <section className="question-container text-align-left">
            {showResult ? (
              <article className="ques-result text-align-center">
                <p className="result-head">Final Results</p>
                <p className="results">
                  {score} out of {data?.questions.length} correct - (
                  {(score / data?.questions.length) * 100}% )
                </p>

                <button
                  className="btn-start upper-text"
                  onClick={() => resetQuiz()}
                >
                  Play More Quizzes
                </button>
              </article>
            ) : (
              <>
                <div className="ques-head">
                  <p>
                    Question: {currenQuestion + 1} out of{" "}
                    {data?.questions.length}
                  </p>
                  <p>Score: {score}</p>
                </div>

                <article className="ques">
                  <p className="question">
                    {data?.questions[currenQuestion].statement}
                  </p>
                  <ol className="ques-option-list">
                    {data?.questions[currenQuestion].option.map((options) => {
                      return (
                        <li
                          key={options.id}
                          onClick={() => optionClicked(options.isCorrect)}
                          className="ans-list"
                        >
                          {options.text}
                        </li>
                      );
                    })}
                  </ol>
                </article>
              </>
            )}
          </section>
        </article>
      </div>
    </section>
  );
}
