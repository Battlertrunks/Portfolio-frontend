import { Link } from "react-router-dom";
import "./DropDown.css";

interface Props {
  onDropDown: () => void;
}

const DropDown = ({ onDropDown }: Props) => {
  return (
    <aside className="DropDown">
      <button onClick={() => onDropDown()}>close</button>
      <ul>
        <li>
          <Link className="link" to={"/"}>
            About
          </Link>
        </li>
        <li>
          <Link className="link" to={"/contact"}>
            Contact
          </Link>
        </li>
        <li>
          <Link className="link" to="/portfolio">
            Portfolio
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default DropDown;
