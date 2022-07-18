import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthReducer } from "../backend/utils/AuthReducer";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(AuthReducer, {
    isLoggedIn: false,
    token: null,
  });

  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const { isLoggedIn } = authState;

  const login = async (user) => {
    try {
      const data = await axios.post(`/user/login`, user);
      localStorage.setItem("user", JSON.stringify(data));
      authDispatch({ type: "LOGIN", payload: data });
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const signup = async (user) => {
    try {
      const data = await axios.post(`/user/signup`, user);
      localStorage.setItem("user", JSON.stringify(data));
      authDispatch({ type: "SIGNUP", payload: data });
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem("user");
      authDispatch({ type: "LOGOUT" });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider
      value={{ authState, isLoggedIn, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthContextProvider, useAuth };
