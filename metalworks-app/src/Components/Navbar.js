import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../Styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        КАТЕР 2004 ЕООД 
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li> 
          <Link to="/cenorazpis" onClick={() => setMenuOpen(!menuOpen)} >Ценоразпис</Link>
        </li>
        <li>
          <Link to="/kontakti" onClick={() => setMenuOpen(!menuOpen)}>Контакти</Link>
        </li>
        <li>
          <Link to="/za-nas" onClick={() => setMenuOpen(!menuOpen)}>За нас</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

