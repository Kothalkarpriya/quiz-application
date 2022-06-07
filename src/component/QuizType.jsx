import "../assests/styles/home.css";
import { useNavigate } from "react-router-dom";
export default function QuizType() {
  const navigate = useNavigate();

  const clickHandler = (tag) => {
    navigate("/rules", { state: { tag } });
  };
  return (
    <>
      <section className="quiz-type" onClick={() => clickHandler("HTML")}>
        <div className="quiz-type-one">
          <img src="images/general.jpg" alt="general quiz" className="image" />
          <div className="image-text">
            <h3>HTML</h3>
            <p className="details">
              Test Your HTML Understanding 
            </p>
          </div>
        </div>
      </section>
      <section className="quiz-type" onClick={() => clickHandler("CSS")}>
        <div className="quiz-type-two">
          <img src="images/harry.jpg" alt="harry potter" />
          <div className="image-text">
            <h3>CSS</h3>
            <p className="details">
              Test Your CSS Understanding
              here
            </p>
          </div>
        </div>
      </section>
      <section className="quiz-type" onClick={() => clickHandler("LR")}>
        <div className="quiz-type-three">
          <img src="images/logical.jpg" alt="Logical quiz" />
          <div className="image-text">
            <h3>Logical Reasoning</h3>
            <p className="details">
              Test Your Logical Reasoning Knowledge
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
