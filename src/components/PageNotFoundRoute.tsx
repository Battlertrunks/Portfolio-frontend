import { Link } from "react-router-dom";
import "./PageNotFoundRoute.css";

const PageNotFoundRoute = () => {
  return (
    <div className="PageNotFoundRoute">
      <h3>404: Page Not Found.</h3>
      <Link to="/">Return Home.</Link>
    </div>
  );
};

export default PageNotFoundRoute;
