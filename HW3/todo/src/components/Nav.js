import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="#4db6ac teal lighten-2 nav-extended">
      <ul className="row">
        <Link to="/">
          <li className="col s4 m4 l4 center">All</li>
        </Link>
        <Link to="/process">
          <li className="col s4 m4 l4 center">Processing</li>
        </Link>
        <Link to="/done">
          <li className="col s4 m4 l4 center">Done</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
