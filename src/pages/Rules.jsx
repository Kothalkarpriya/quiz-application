import { useLocation, useNavigate } from "react-router-dom";
import "../assests/styles/rules.css";

export default function Rules() {
  const location = useLocation();
  const navigate = useNavigate();
  const tag = location?.state?.tag;

  const clickHandler = () => {
    navigate("/quiz", { state: { tag } });
  };

  return (
    <section className="section">
      <div className="main-container rule">
        <h2 className="upper-text">Rules</h2>
        <article className="rules">
          <ol className="text-align-left">
            <li className="rule-list">Their are 5 questions in total</li>
            <li className="rule-list">Each Question got 2 Marks</li>
            <li className="rule-list">
              Every right answer will reward you with 2 marks
            </li>
            <li className="rule-list">
              You can attmpt each question only once, can not redirect previous
              question.
            </li>
            <li className="rule-list">All questions are mandatory</li>
            <li className="rule-list">
              After End of questions you have to click Submit
            </li>
            <li className="rule-list">
              After submitting the test you will get your Score in the Quiz
            </li>
          </ol>
          <p className="wish upper-text">All the BEst!</p>
        </article>

        <button
          type="submit"
          onClick={() => clickHandler()}
          className="btn-start upper-text"
        >
          Start Quiz
        </button>
      </div>
    </section>
  );
}
