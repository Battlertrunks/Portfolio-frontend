import DropDown from "./DropDown";
import "./Header.css";

const Header = () => {
  return (
    <nav className="Header">
      <ul>
        <li>
          <h1>G/S</h1>
        </li>
        <li>
          <button>Sidebar</button>
        </li>
      </ul>
      <div>
        <DropDown />
      </div>
    </nav>
  );
};

export default Header;
