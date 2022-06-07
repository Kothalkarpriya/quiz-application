import "../../assests/styles/home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const clickHandler = (tag) => {
    navigate("/rules", { state: { tag } });
  };

  return (
    <main className="main">
      <h2 className="main-heading">Basic Quizzes </h2>
      <article className="main-container">
        <section className="quiz-type" onClick={() => clickHandler("HTML")}>
          <div className="quiz-type-one">
            <img
              src="images/general.jpg"
              alt="general quiz"
              className="image"
            />
            <div className="image-text">
              <h3>General Knowledge</h3>
              <p className="details">
                Test Your General Knowledge skill by taking a Quiz by clicking
                here
              </p>
            </div>
          </div>
        </section>
        <section className="quiz-type" onClick={() => clickHandler("CSS")}>
          <div className="quiz-type-two">
            <img src="images/harry.jpg" alt="harry potter" />
            <div className="image-text">
              <h3>Harry Potter</h3>
              <p className="details">
                Test Your General Knowledge skill by taking a Quiz by clicking
                here
              </p>
            </div>
          </div>
        </section>
        <section className="quiz-type" onClick={() => clickHandler("LR")}>
          <div className="quiz-type-three">
            <img src="images/logical.jpg" alt="Logical quiz" />
            <div className="image-text">
              <h3>Logical Reasoning Quiz</h3>
              <p className="details">
                Test Your General Knowledge skill by taking a Quiz by clicking
                here
              </p>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
