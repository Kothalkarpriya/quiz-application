import { Routes, Route } from "react-router-dom";
import { Home, Login, SignIn, Quiz, Rules } from "../pages/pages";
import TwopiRest from "twopi-rest";
import { sample_requests } from "../backend/sample-requests";

export default function RoutePath() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/test" element={<TwopiRest preset={sample_requests} />} />
    </Routes>
  );
}
