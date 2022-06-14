import React from "react";
import "../styles/global.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <header className="header">
      <div className="logo">React-1</div>
      <div className="menu">
        <Link to="/players" className="menu__item">
          Players
        </Link>
        <Link to="/teams" className="menu__item">
          Teams
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
