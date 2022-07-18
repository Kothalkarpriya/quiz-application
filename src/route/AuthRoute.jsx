import { useAuth } from "../context/AuthContext";
import { useLocation, Navigate } from "react-router-dom";

export default function AuthRoute({ children }) {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
