import React from "react";
import "./Nav.css";

function Nav() {
 return (
     
    <div className="topnav">
          <a className="active" href="/">Home</a>
          <a href="/login">Log In</a>
          <a href="/signup">Sign up</a>
          <a href="/schedule">Schedulle</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
        )
    }
export default Nav;