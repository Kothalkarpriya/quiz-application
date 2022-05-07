import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  SignIn,
  General,
  HarryPotter,
  Logical,
} from "../pages/pages";

export default function RoutePath() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/General" element={<General />} />
      <Route path="/HarryPotter" element={<HarryPotter />} />
      <Route path="/Logical" element={<Logical />} />
    </Routes>
  );
}
