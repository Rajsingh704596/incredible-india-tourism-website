import { NavLink } from "react-router-dom";
import { FaHome, FaPlane, FaBars } from "react-icons/fa"; // Icons import karein
import { useState } from "react";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle ke liye state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="logo">
        <FaBars className="toggle-icon" onClick={toggleMenu} /> {/* Toggle icon for mobile */}
        <span>Incredible India Tourism</span> 
      </div>

      <ul className={`navbar ${isMenuOpen ? "active" : ""}`}>
        <NavLink to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          <li>
            <FaHome className="icon" /> Home
          </li>
        </NavLink>
        <NavLink to="/TouristPlace" className="nav-link" onClick={() => setIsMenuOpen(false)}>
          <li>
            <FaPlane className="icon" /> Tourist Place
          </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Header;