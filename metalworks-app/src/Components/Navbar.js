import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../Styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Website
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li> 
          <Link to="/catalog" onClick={() => setMenuOpen(!menuOpen)} >Каталог</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(!menuOpen)} >За нас</Link>
        </li>
        <li>
          <Link to="/contacts" onClick={() => setMenuOpen(!menuOpen)}>Контакти</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
