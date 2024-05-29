import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="nav">
      <NavLink
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        active
        aria-current="page"
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        active
        aria-current="page"
        to="/login"
      >
        Login
      </NavLink>
    </nav>
  );
};
