import { Link } from "react-router-dom";
import "./PageNotFoundRoute.css";

const PageNotFoundRoute = () => {
  // When the user puts in a non-existent path.
  return (
    <div className="PageNotFoundRoute">
      <div>
        <h3>404: Page Not Found. Sorry :(</h3>
        <Link className="link" to="/">
          Return Home.
        </Link>
      </div>
    </div>
  );
};

export default PageNotFoundRoute;
