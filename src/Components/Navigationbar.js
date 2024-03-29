import React from "react";

const Navigationbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Home
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="Navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li>
            <a className="nav-link" href="/projects">
              Projects
            </a>
          </li>
          <li>
            <a className="nav-link" href="/skills">
              Skills
            </a>
          </li>
          <li>
            <a className="nav-link" href="/contacts">
              Contacts
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigationbar;