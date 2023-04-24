import React from "react";
import {NavLink} from "react-router-dom";

function Nav(props) {
  return (
 <nav class="navbar navbar-inverse navbar-fixed-top">
   <div class="container-fluid">
     <div class="navbar-header">
       <a class="navbar-brand" href="#">
         Michael's Portfolio
       </a>
     </div>
     <ul class="nav navbar-nav">
       <li class="active">
         <a href="#">Home</a>
       </li>
       <li>
        <NavLink to="/aboutme">About Me</NavLink>
       </li>
       <li>
          <NavLink to="/project">Portfolio</NavLink>
       </li>
       <li>
          <NavLink to="/contact">Contact Info</NavLink>
       </li>
       <li>
          <NavLink to="/resume">Resume</NavLink>
       </li>
     </ul>
   </div>
 </nav>;
 );
}

export default Nav;