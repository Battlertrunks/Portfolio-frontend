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
                <button>Sidebar</button>
              </li>
            </ul>
            <div className="drop-down-menu">
              <DropDown />
            </div>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </nav>
  );
};

export default Header;
