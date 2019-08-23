import React from "react";

const navbar = ({ count }) => {
  return (
    <nav className="navbar navbar-light bg-light" style={{ fontSize: 25 }}>
      <a className="navbar-brand" href="#">
        Navbar <span className="badge badge-pill badge-secondary">{count}</span>
      </a>
    </nav>
  );
};
export default navbar;
