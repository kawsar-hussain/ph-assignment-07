import React from "react";

const Nav = () => {
  return (
    <div className="nav">
      <h1>CS — Ticket System</h1>
      <ul className="nav__list">
        <li>
          <a href="" className="nav__link">
            Home
          </a>
        </li>
        <li>
          <a href="" className="nav__link">
            FAQ
          </a>
        </li>
        <li>
          <a href="" className="nav__link">
            Changelog
          </a>
        </li>
        <li>
          <a href="" className="nav__link">
            Blog
          </a>
        </li>
        <li>
          <a href="" className="nav__link">
            Download
          </a>
        </li>
        <li>
          <a href="" className="nav__link">
            Contact
          </a>
        </li>

        <li>
          <a href="" className="nav__link">
            <button>+ New Ticket</button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
