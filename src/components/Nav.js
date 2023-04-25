import React from "react";
import {NavLink} from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

function Nav(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light flex-row">
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-header">
          <span class="navbar-toggler-icon"></span>
        </div>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <NavLink class="nav-link" to="/">
              About Me
            </NavLink>
          </li>
          <br></br>
          <li class="nav-item">
            <NavLink to="/project">Portfolio</NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/resume">Resume</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;