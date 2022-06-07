import "../../assests/styles/home.css";
import { QuizType } from "../../component/component";

export default function Home() {
  return (
    <main className="main">
      <h2 className="main-heading">Basic Quizzes </h2>
      <article className="main-container">
        <QuizType />
      </article>
    </main>
  );
}
