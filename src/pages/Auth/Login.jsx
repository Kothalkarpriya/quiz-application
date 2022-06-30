import { BiRightArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import "../../assests/styles/auth.css";

export default function Login() {
  const [user, setUser] = useState({
    username: "priyakothalkar@gmail.com",
    password: "priya123",
  });
  const { login } = useAuth();

  const loginHandler = (e) => {
    e.preventDefault();
    login(user);
  };
  return (
    <section className="main-container">
      <div className="login">
        <h2 className="heading">Login</h2>
        <form
          action="#"
          className="login-form"
          onSubmit={loginHandler}
          id="login"
        >
          <div className="input-block">
            <label for="#input-email" className="text-align-left">
              Email Address
            </label>
            <input
              type="email"
              id="input-email"
              placeholder="email@email.com"
              required
              name="email"
              // eslint-disable-next-line no-undef
              value={user.username}
              // eslint-disable-next-line no-undef
              onChange={(e) => setUser({ username: e.target.value })}
            />
          </div>
          <div className="input-block">
            <label for="input-pass" className="text-align-left">
              Password
            </label>
            <input
              type="password"
              id="input-pass"
              className="input-password"
              placeholder="*************"
              required
              name="password"
              // eslint-disable-next-line no-undef
              value={user.password}
              // eslint-disable-next-line no-undef
              onChange={(e) => loginHandler({ password: e.target.value })}
            />
          </div>
          <div className="input-block">
            <Link to="/" className="btn-link">
              Forgot your Password?
            </Link>
          </div>
          <div className="input-block">
            <button className="btn-start upper-text" type="submit">
              Login
            </button>
          </div>
        </form>
        <div className="input-block login-to">
          <Link to="/SignUp" className="btn-link-login btn-link">
            Create New Account
          </Link>
          <BiRightArrow className="icon" />
        </div>
      </div>
    </section>
  );
}
