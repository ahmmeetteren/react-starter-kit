import React from "react";
import { Link } from "react-router-dom";

function Navbar({ title, icon }) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <i className={icon}></i> {title}
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="about" className="nav-link">
                <span className="text-white">About</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
