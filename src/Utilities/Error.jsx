import { Link } from "react-router-dom";
import "./Navbar.css";
const Error = () => {
  return (
    <div>
      <h2>404</h2>
      <p>Page not found!</p>
      <Link to="/" className="btn-explore">
        Back Home
      </Link>
    </div>
  );
};
export default Error;
