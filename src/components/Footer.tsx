import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <ul>
        <li>About</li>
        <li className="breaker">
          <div></div>
        </li>
        <li>Contact</li>
        <li className="breaker">
          <div></div>
        </li>
        <li>Portfolio</li>
      </ul>
      <p>Copyright Gavin Szczesniak</p>
    </footer>
  );
};

export default Footer;
