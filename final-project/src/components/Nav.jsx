import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'

const Nav = () => {
  return (
    <div className="sidebar">
        <div className="top-left">
        <li >
            <Link to="/" className="navlink">
                <h3> 🏠 Home </h3>
            </Link>
        </li>
        <li >
            <Link to="/create" className="navlink">
                <h3> ❤️️ Create </h3>
            </Link>
        </li>
        <li >
            <Link to="/gallery" className="navlink">
                <h3> ⭐ Gallery </h3>
            </Link>
        </li>

        <li>
            <Link to="/comments" className="navlink">
                <h3> 📰 Comments </h3>
            </Link>
        </li>

        </div>
       
    </div>
  );
};

export default Nav;
