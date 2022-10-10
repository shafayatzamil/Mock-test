import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-box">
      <h1 className="header-title">Quiz Test</h1>
      <nav>
        <Link className="nav-box" to="/">
          Tropics
        </Link>
        <Link className="nav-box" to="/statics">
          Statics
        </Link>
        <Link className="nav-box" to="/blog">
          Blog
        </Link>
      </nav>
    </div>
  );
};

export default Header;
