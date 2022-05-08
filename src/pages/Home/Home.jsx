import { Link } from "react-router-dom";
import "../../assests/styles/home.css";

export default function Home() {
  return (
    <main className="main">
      <h2 className="main-heading">Basic Quizzes </h2>
      <article className="main-container">
        <section className="quiz-type">
          <Link to="/General" className="quiz-type-link">
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
          </Link>
        </section>
        <section className="quiz-type">
          <Link to="/HarryPotter" className="quiz-type-link">
            <div className="quiz-type-two">
              <img src="images/harry.jpg" alt="harry potter" />
              <div className="image-text">
                <h3>Harry Potter</h3>
                <p className="details">
                  {" "}
                  Test Your General Knowledge skill by taking a Quiz by clicking
                  here
                </p>
              </div>
            </div>
          </Link>
        </section>
        <section className="quiz-type">
          <Link to="/Logical" className="quiz-type-link">
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
          </Link>
        </section>
      </article>
    </main>
  );
}
