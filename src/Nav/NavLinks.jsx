import { Link, NavLink } from "react-router-dom";

import logo from "../assets/Logo11.svg";
import "./Nav.scss";

export default function NavLinks() {
  const getActiveStyle = ({ isActive }) => ({
    fontWeight: isActive ? "600" : "200",
    textShadow: isActive ? "5px 1px 5px #78dff8b1" : "",
  });

  return (
    <div>
      <div>
        <Link to="/">
          <img className="NavImg rotate" src={logo} alt="SG" />
        </Link>
      </div>
      <nav>
        <NavLink style={getActiveStyle} className="navlink" to="/">
          <h2 style={{ fontWeight: "lighter" }}>Home</h2>
        </NavLink>
        <NavLink style={getActiveStyle} className="navlink" to="/projects">
          <h2 style={{ fontWeight: "lighter" }}>Projects</h2>
        </NavLink>
        <NavLink style={getActiveStyle} className="navlink" to="/Blogs">
          <h2 style={{ fontWeight: "lighter" }}>Blogs</h2>
        </NavLink>
      </nav>
    </div>
  );
}
