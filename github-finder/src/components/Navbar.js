import React from "react";

function Navbar({ title, icon }) {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary">
        <a href="navbar" className="navbar-brand">
          <i className={icon}></i>
          {title}
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
