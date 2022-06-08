import { useState } from "react";
import {
  Animator,
  batch,
  MoveOut,
  ScrollContainer,
  ScrollPage,
} from "react-scroll-motion";
import DropDown from "./DropDown";
import "./Header.css";

const Header = () => {
  const [openDropDown, setOpenDropDown] = useState<boolean>(false);

  const dropDown: string = !openDropDown ? "drop-not-visible" : "";

  return (
    <nav className="Header">
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(MoveOut(0, -100))}>
            <ul className="items-container">
              <li>
                <h1>G/S</h1>
              </li>
              <li>
                <button onClick={() => setOpenDropDown((prev) => !prev)}>
                  Sidebar
                </button>
              </li>
            </ul>
            <div className="drop-down-menu">
              <div className={`drop-down ${dropDown}`}>
                <DropDown />
              </div>
            </div>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </nav>
  );
};

export default Header;
