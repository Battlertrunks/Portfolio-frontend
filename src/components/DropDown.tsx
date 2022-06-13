import { Link } from "react-router-dom";
import "./DropDown.css";

interface Props {
  onDropDown: () => void;
}

const DropDown = ({ onDropDown }: Props) => {
  return (
    <aside className="DropDown">
      <button onClick={() => onDropDown()}>
        <img
          className="close-icon"
          src="https://firebasestorage.googleapis.com/v0/b/gavinszczesniakportfolio.appspot.com/o/Close-icon.png?alt=media&token=d1ba2507-338c-4c9c-8af9-bf9158ac238d"
          alt="Close button"
        />
      </button>
      <ul>
        <li>
          <Link className="link" to={"/"} onClick={() => onDropDown()}>
            About
          </Link>
        </li>
        <li>
          <Link className="link" to={"/contact"} onClick={() => onDropDown()}>
            Contact
          </Link>
        </li>
        <li>
          <Link className="link" to="/portfolio" onClick={() => onDropDown()}>
            Portfolio
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default DropDown;
