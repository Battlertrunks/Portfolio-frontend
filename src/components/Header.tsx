import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DropDown from "./DropDown";
import "./Header.css";

const Header = () => {
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);
  const scrollDetection: number = window.scrollY;
  const urlChange = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", (e) => closeDropDown());

    return () => {
      window.removeEventListener("scroll", (e) => closeDropDown());
    };
  }, [scrollDetection]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [urlChange.pathname]);

  const dropDown: string = !openDropDown ? "drop-not-visible" : "";

  const closeDropDown = () => setOpenDropDown(false);

  return (
    <nav className="Header">
      <ul className="items-container">
        <li>
          <h1>G/S</h1>
        </li>
        <li>
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
