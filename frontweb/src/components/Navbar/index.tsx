import "./styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary main-nav">
      <div className="nav-text">
        <Link to="/" className="nav-logo">
          <h4>MovieFlix</h4>
        </Link>
       
      </div>
    </nav>
  );
};

export default Navbar;
