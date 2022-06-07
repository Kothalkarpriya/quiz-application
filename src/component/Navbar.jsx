import { Link } from "react-router-dom";
import "../assests/styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <header className="nav-brand upper-text">
        <h1>
          <Link to="/" className="nav-brand-link">
            Quiz App
          </Link>
        </h1>
      </header>
      {/* Todo- Work on Auth Part */}
      {/* <div className="nav-collapse">
        <ul className="nav-list-group">
          <li className="list-ele">
            <Link to="/" className="nav-link upper-text">
              Home
            </Link>
          </li>
          <li className="list-ele">
            <Link to="/login" className="nav-link upper-text">
              Login
            </Link>
          </li>
        </ul>
      </div> */}
    </nav>
  );
}
