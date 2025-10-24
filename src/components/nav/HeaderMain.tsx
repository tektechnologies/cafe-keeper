import React from "react";
import { Link } from "@tanstack/react-router";

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/" className="play-regular">
            TEK Technologies
          </Link>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#solutions">Solutions</a>
          </li>
          <li>
            <a href="#technology">Technology</a>
          </li>
          <li>
            <Link to="/about" className="[&.active]:font-bold">
              About
            </Link>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
