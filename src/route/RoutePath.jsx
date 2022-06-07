import { Routes, Route } from "react-router-dom";
import { Home, Login, SignUp, Quiz, Rules, QuizAns } from "../pages/pages";
import TwopiRest from "twopi-rest";
import { sample_requests } from "../backend/sample-requests";

export default function RoutePath() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/quizans" element={<QuizAns />} />
      <Route path="/test" element={<TwopiRest preset={sample_requests} />} />
    </Routes>
  );
}
