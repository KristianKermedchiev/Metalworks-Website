import React, { useState } from "react";

import "../Styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <a href="#" className="title">
        Website
      </a>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a href="#">Каталог</a>
        </li>
        <li>
        <a href="#">За нас</a>
        </li>
        <li>
        <a href="#">Контакти</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;