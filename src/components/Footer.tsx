import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <ul>
        <li>
          <Link className="link" to="/">
            About
          </Link>
        </li>
        <li className="breaker">
          <div></div>
        </li>
        <li>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </li>
        <li className="breaker">
          <div></div>
        </li>
        <li>
          <Link className="link" to="/portfolio">
            Portfolio
          </Link>
        </li>
      </ul>
      <p>Copyright Gavin Szczesniak</p>
    </footer>
  );
};

export default Footer;
