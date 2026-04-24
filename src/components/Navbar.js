import { NavLink } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
    </nav>
  );
}

export default Navbar;