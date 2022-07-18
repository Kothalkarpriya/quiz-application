import { Routes, Route } from "react-router-dom";
import { Home, Login, SignUp, Quiz, Rules } from "../pages/pages";
import TwopiRest from "twopi-rest";
import { sample_requests } from "../backend/sample-requests";
import AuthRoute from "./AuthRoute";

export default function RoutePath() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/quiz"
        element={
          <AuthRoute>
            <Quiz />
          </AuthRoute>
        }
      />
      <Route
        path="/rules"
        element={
          <AuthRoute>
            <Rules />
          </AuthRoute>
        }
      />
      <Route path="/test" element={<TwopiRest preset={sample_requests} />} />
    </Routes>
  );
}
