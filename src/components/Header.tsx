import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DropDown from "./DropDown";
import "./Header.css";

const Header = () => {
  // Sets the dropdown to be closed or open.
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);
  // Used to detect if the user is scrolling vertically.
  const scrollDetection: number = window.scrollY;
  // Gets the url
  const urlChange = useLocation();

  useEffect(() => {
    // When user scrolls.
    window.addEventListener("scroll", (e) => closeDropDown());

    // Ends/removes event listener
    return () => {
      window.removeEventListener("scroll", (e) => closeDropDown());
    };
  }, [scrollDetection]); // Runs scroll detection when verticle scroll changes and once on load.

  useEffect(() => {
    // When the user changes path name, puts screen to the top smoothly.
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [urlChange.pathname]);

  // Adds class name to for the drop down depending on boolean.
  const dropDown: string = !openDropDown ? "drop-not-visible" : "";

  // Sets drop down to close/false.
  const closeDropDown = () => setOpenDropDown(false);

  return (
    <nav className="Header">
      <ul className="items-container">
        <li>
          <Link to="/">
            <h1>G/S</h1>
          </Link>
        </li>
        <li className="middle-options-container">
          <Link className="link" to="/">
            Home
          </Link>
          <div className="divider" />
          <Link className="link" to="/contact">
            Contact
          </Link>
        </li>
        <li className="portfolio-link-container">
          <Link className="portfolio-link" to="/portfolio">
            View Portfolio
          </Link>
        </li>
        <li className="dropdown-container">
          <button
            className="dropdown-btn"
            onClick={() => setOpenDropDown((prev) => !prev)}
          >
            <img
              className="hamburger-icon"
              src="https://firebasestorage.googleapis.com/v0/b/gavinszczesniakportfolio.appspot.com/o/hamburger-icon.png?alt=media&token=eac10e0d-2fc6-42bf-8f0f-2c4a71eb7709"
              alt="sidebar button."
            />
          </button>
        </li>
      </ul>
      <div className={`drop-down ${dropDown}`}>
        <DropDown onDropDown={closeDropDown} />
      </div>
    </nav>
  );
};

export default Header;
