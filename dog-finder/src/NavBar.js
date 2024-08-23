import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({ dogs }) {
  return (
    <nav className="NavBar">
      <NavLink to="/dogs" end>
        Home
      </NavLink>
      {dogs.map(({ name }) => (
        <NavLink 
          key={name} 
          to={`/dogs/${name.toLowerCase()}`} 
          className="nav-link"
        >
          {name}
        </NavLink>
      ))}
    </nav>
  );
}

export default NavBar;

