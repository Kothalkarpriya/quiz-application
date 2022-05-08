import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";
import "../assests/styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <h3>Created by Priya Kothalkar</h3>
      <p>Connect With me:</p>

      <ul>
        <li>
          <a href="https://www.linkedin.com/in/priyakothalkar/" alt="linkedin">
            <AiFillLinkedin className="social-icon" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/PriyaKothalkar" alt="twitter">
            <AiFillTwitterCircle className="social-icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Kothalkarpriya" alt="github">
            <AiFillGithub className="social-icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
